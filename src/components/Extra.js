import React, { Component } from "react";
import axios from "axios";
import Title from "./Title";

const urlCategories = "/services/api/v1/market/categories/";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: ""
    };
  }

  componentDidMount() {
    axios(urlCategories).then(res => {
      const categorias = res.data;
      const categorias2 = res;
      this.setState({ categorias });
      console.log(categorias2);
    });
  }

  render() {
    return (
      <div>
        <Title title={"hola"} />
        <ul>
          {Object.keys(this.state.categorias).map((object, i) => (
            <li key={i}>{this.state.categorias[object].name}</li>
          ))}
        </ul>
        <Title title={"adios"} />
        <Title title={"thrid"} />
      </div>
    );
  }
}
