import TextArea from '../TextArea/TextArea';
import Output from '../OutPut/Output';
import Input from '../Input/Input';
import React, { useState } from 'react';
import './EditorPage.css';
function EditorPage(){

     
   
   const [userOutput,setoutPut]=useState('');
   const [userInput,setinPut]=useState('');
  

   return (<div className='container'>
      
   <TextArea setoutPut={setoutPut} userInput={userInput}   />
   
   <div className="container2">
   <Output userOutput={userOutput} />
   

   <Input setinPut={setinPut}/>
  
   </div>

   </div>)
 

}


export default EditorPage;