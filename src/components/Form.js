import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      type: ""
    };
  }

  handleUsername = e => {
    this.setState({
      username: e.target.value
    });
  };
  handleEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleType = e => {
    this.setState({
      type: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ username: "" });
    this.setState({ type: "" });
    this.setState({ email: "" });
    console.log(this.state.username, this.state.email,this.state.type);
  };

  render() {
    return (
      <div style={{ padding: "10px" }}>
        <form onSubmit={this.handleSubmit}>

          <label> Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          />


          <label> Email </label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />



          <label> Type </label>
          <select value={this.state.type} onChange={this.handleType}>
            <option value="">Selecciona</option>
            <option value="bitmex">Bitmex</option>
            <option value="bitso">Bitso</option>
            <option value="binance">Binance</option>
          </select>


          <button type="submit">Submit</button>
        </form>


      </div>
    );
  }
}
