import React from 'react';

import './App.css';
import Login from './login/login';
import {
    Routes,
    Route,
  } from "react-router-dom";
import EditorPage from './EditorPage/EditorPage'


function App() {


   
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/editor/:roomId" element={<EditorPage/>}/>
      </Routes>
       
       
    </div>



   );
}



export default App;