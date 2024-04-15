import { useEffect, useState  } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "./AppContext";;



const AppState =(props)=>{


const naviagte=useNavigate();

const [user,setuser]=useState(false);

return (
    <AppContext.Provider value = {{user,setuser}}>
        {props.children}
    </AppContext.Provider>
)

}

export default AppState;



