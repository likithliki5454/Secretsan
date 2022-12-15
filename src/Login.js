import React, { createContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, Route, useNavigate } from 'react-router-dom';
import Main from './Main';

import "./App.css";

function Login() {
    let navigate = useNavigate();

    const [me, setme] = useState("");
    const [log, setlog] = useState(true)
    const [rend, setrend] = useState(false)

  const [yname, setYname] = useState([
    { id: 1, name: "syed sohail" },
    { id: 2, name: "likith" },
    { id: 3, name: "dinesh" },
    { id: 4, name: "santhosh" },
    { id: 5, name: "sagar" },
    { id: 6, name: "Pradumna" },
    { id: 7, name: "sushmitha" },
    { id: 8, name: "veena" },
    { id: 9, name: "vibha" },
    { id: 10, name: "harshitha" },
    { id: 11, name: "shashikala" },
    { id: 12, name: "meghana" },
    { id: 13, name: "Aishwarya" },
    { id: 14, name: "veeru patil" },
    { id: 15, name: "Manohar" },
    { id: 16, name: "Sharath" },
    { id: 17, name: "Alocius" },
  ]);
  function handleSelect(e) {
    setme(e.target.value);
    // console.log(me)
  }


//   function handleLogin(){
//     if(me!==''){
//         // navigate('/Main')
//         setlog(false)
     
//     }
//     else if(me==''){
//         alert('please choose name')
//     }
//   }

 const add = () => {
    if(me!==''){
        // navigate('/Main')
        setlog(false)
     
    }
    else if(me==''){
        alert('please choose name')
    }
    setrend({rend : !rend})
  }

  return (
    
    <div className='loginp'>

      <div id='lf'>
          <label className='lb'>Please choose your name</label>
          <Form.Select id='fs' className="users" onChange={handleSelect}>
            <option hidden>Select</option>
            {yname.map((user) => (
              <option key={user.id}>{user.name}</option>
            ))}
          </Form.Select>

         {/* a
            <Main style={{display:'flex'}} onClick={handleLogin}  me={me} setme={setme} yname={yname} setYname={setYname}>Done</Main> */}
            <Link  onClick={() =>add()}>CLICK</Link>
     { rend &&
      <Main  me={me} setme={setme} yname={yname} setYname={setYname}/>
     }
           
            
        </div>    
    </div>
 
  )
}


export default Login;