import React, { useState } from "react";

const Forms2 = props => {

  const [username, setUsername] = useState();
  const [email , setEmail] = useState();
  const[ type, setType] = useState();

  const handleUsername = e => {
    setUsername(e.target.value);
  };
  const handleType = e => {
    setType(e.target.value);
  }
  const handleEmail = e => {
    setEmail(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    setUsername("");
    setEmail("");
    setType("empty");
    console.log(username);
  };

  return (
    <div style={{ padding: "10px" }}>
      <form onSubmit={handleSubmit}>
        <label> Nombre</label>
        <input type="text" value={username} onChange={handleUsername} />
        <label> Email </label>
        <input
          type="text"
          value={email}
          onChange={handleEmail}
        />
        <label> Type </label>
        <select value={type} onChange={handleType}>
          <option value="empty">Selecciona</option>
          <option value="bitmex">Bitmex</option>
          <option value="bitso">Bitso</option>
          <option value="binance">Binance</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms2;
