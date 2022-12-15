import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Main from './Main'
import "./App.css";
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Login from './Login';
import Thank from './Thank';
import S from './S';

function App() {
 
  return (
    <div>

<BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login/>} ></Route>
          <Route path='Thank' element={<Thank/>} ></Route>
          <Route path='Main' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter> 
      
      
{/* <S/> */}
      {/* <Main me={me} setYname={setYname} yname={yname} setme={setme} /> */}
      </div>
  )
}

export default App