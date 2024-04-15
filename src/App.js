import React from 'react';

import './App.css';
import Login from './login/login';
import {
 
    Routes,
    Route,
  } from "react-router-dom";
import EditorPage from './EditorPage/EditorPage'


import { Navigate } from 'react-router-dom';

function App() {


   
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/adad" element={<EditorPage/>}/>
      </Routes>
       
       
    </div>



   );
}



export default App;