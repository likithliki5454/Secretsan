import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";
function Thank() {
    let navigate = useNavigate();


   function homeBack(e){
navigate('/Login')

   }

  return (
    <div>

<p>k</p>

<button onClick={homeBack}>Back home</button>

    </div>

  )
}

export default Thank