import React, { useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {


const [me, setme] = useState('')
const [san, setsan] = useState()

  var user = [
    { id: 1, name: "A" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
  ];

  var santa = [
    { id: 1, name: "A" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
  ]


  


 function handleSelect(e){
setme({me:e.target.value})
}
  console.log(me)


 function handleClick(){
  const random = santa[Math.floor(Math.random() * santa.length)];
  setsan(random)
  console.log(san)

 }


  return (
    <div>
      <section>
        <div>
          <img id="simage" src="Secret-Santa-Greetings.jpg" />
        </div>
      </section>

      <div className="sant">
        <div>
          <label>Who are you?</label>
          <Form.Select className="users" onChange={handleSelect}>
            <option>select</option>
            {user.map((user) => (
              <option key={user.id}>{user.name}</option>
            ))}
          </Form.Select>
        </div>

        <div className="wrap">
          <button type="submit" className="button" onClick={handleClick}>
            Choose your santa 
          </button>
        </div>

        <div id="username">
        <h1>a</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
