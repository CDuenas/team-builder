import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Members from "./components/Members";

function App() {
  const [members, setMember] = useState([
    {
      name:"Matt",
      email:"MattA@LS.com",
      role:"Front-End Dev"
    }
  ]);

  const addNewMember = member =>  {
    const newMember = setMember([...members, member]);
  };

  return (
    <div className="App">
      <h1>Members:</h1>
      <Form addNewMember={addNewMember} />
      <Members members={members} />

    </div>
  );
}

export default App;
