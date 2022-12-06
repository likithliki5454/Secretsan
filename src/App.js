import React, { useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [me, setme] = useState("");
  const [san, setsan] = useState({id:0,name:'wait a minuite who are you '});

  var user = [
    { id: 1, name: "likith" },
    { id: 2, name: "syed sohail" },
    { id: 3, name: "dinesh" },
    { id: 4, name: "santhosh" },
    { id: 5, name: "sagar" },
    { id: 5, name: "vp" },
  ];

  var santa = [
    { id: 1, name: "A" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
    { id: 4, name: "d" },
    { id: 5, name: "e" },
  ];

  function handleSelect(e) {
    setme(e.target.value );
  }
  console.log(me);
  

  function handleClick(e) {
    const random = user[Math.floor(Math.random() * user.length)];
    console.log(random)
    setsan(random);
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
          <h5 style={{width:'18vw'}}>{san.name}</h5>
        </div>
      </div>
    </div>
  );
}

export default App;
