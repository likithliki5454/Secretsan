import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { MagnifyingGlass } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loader, setloader] = useState(false);

  const [me, setme] = useState("");

  const [rand, setRand] = useState("");

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

  var santa = [
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
  ];

  function handleSelect(e) {
    setme(e.target.value);
    console.log(me)
  }

  function handleClick() {
    setRand("");
    if (me === "") {
      alert("Choose your name");
    } else {
      setTimeout(() => {
        const random = santa[Math.floor(Math.random() * santa.length)];
        if (me === random.name) {
          handleClick();
        } else {
          setRand(random);
          setloader(false);
        }
      }, 2000);
      setloader(true);
    }
  }

  function handleDone(e) {
    setYname(yname.filter((item) => item.name !== me));
    console.log(rand.name);
    setRand("");
    setme("");
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
            <option hidden>Choose</option>
            {yname.map((user) => (
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
          {loader ? (
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="MagnifyingGlass-loading"
              wrapperStyle={{}}
              wrapperClass="MagnifyingGlass-wrapper"
              glassColor="#c0efff"
              color="#e15b64"
            />
          ) : (
            ""
          )}
          <h5 style={{ width: "18vw" }}>Your santa is </h5>

          <div id="wrapper">
            <div id="container">
              <h1>{rand.name}</h1>
            </div>
          </div>
        </div>
      </div>
      <button onClick={handleDone}>Done</button>
    </div>
  );
}

export default App;
