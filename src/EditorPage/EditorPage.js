import React, { useState, useEffect, useRef } from 'react'
import TextArea from '../TextArea/TextArea';
import Output from '../OutPut/Output';
import Input from '../Input/Input';
import toast ,{ Toaster } from 'react-hot-toast';
import './EditorPage.css';
import { Navigate, useLocation ,useNavigate, useParams  } from 'react-router-dom'
import { initSocket } from '../socket/socket';
import ACTIONS from '../socket/Action';
import UserColumn from '../UserColumn/UserColumn';
function EditorPage(){
    const reactNavigator = useNavigate();
    const [usercode, setcode] = useState('');
    const [userLang, setLang] = useState("cpp");
    const [users,setUsers]=useState([]);
    const location=useLocation();
    const socketRef = useRef(null);
    const {roomId} = useParams();
    useEffect(()=>{ 
        const init = async ()=>{
            function handleErrors(e)
            {  
                console.log("socket error", e);
                toast.error('Socket connection failed, try again later')
                reactNavigator("/")
            }
            socketRef.current = await initSocket()
            socketRef.current.on('connect_error',(err)=>handleErrors(err));
            socketRef.current.on('connect_failed',(err)=>handleErrors(err));
            socketRef.current.emit(ACTIONS.JOIN,{
                roomId,
                userName:location.state?.username,
            });
            socketRef.current.on(ACTIONS.JOINED,({clients, userName, socketId}) =>{
                console.log(`${userName} joined`);
                
                if(userName !== location.state?.username)
                {  
                    toast(`${userName} join the room`)
                    console.log(`${userName} joined`);
                }
                setUsers(clients)
                console.log(clients);
                console.log(users)
            })
            socketRef.current.on(ACTIONS.DISCONNECTED,({socketId,username})=>{
                    toast(`${username} left the room`);
                    setUsers((prev)=>{
                        return prev.filter((client)=> client.socketId !== socketId);
                    })
            })
            
        }
        init();
        return () => {
           socketRef.current.disconnect();
           socketRef.current.off(ACTIONS.JOIN);
           socketRef.current.off(ACTIONS.DISCONNECTED);
        }
    },[])
   const [userOutput,setoutPut]=useState('');
   const [userInput,setinPut]=useState('');
  
   if(!location.state)
   {
      return  <Navigate to="/" />;
   }
   return (
   <div className='container'>
   <UserColumn users={users}/>   
   <TextArea setoutPut={setoutPut} userInput={userInput} usercode={usercode} setcode={setcode} userLang={userLang} setLang={setLang}/>
   
   <div className="container2">
   <Toaster />
   <Output userOutput={userOutput} />
   

   <Input setinPut={setinPut}/>
  
   </div>

   </div>)
 

}


export default EditorPage;