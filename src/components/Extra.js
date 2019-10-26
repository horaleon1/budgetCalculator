import React, { Component } from "react";
import axios from "axios";
import Title from "./Title";

const urlCategories = "/services/api/v1/market/categories/";
const urlProducts = "/services/api/v1/market/products/"

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorias: "",
      categories: false,
      productos: ""
    };
  }

  componentDidMount() {
    axios(urlCategories)
    .then(res => {
      const categorias = res.data;
      const categorias2 = res;
      this.setState({ categorias });
      console.log(categorias);
    });

    axios(urlProducts)
    .then(res => {
      const productos = res.data
      this.setState({ productos });
      console.log(productos);
    })
  }

  activateCategories = e => {
    this.setState({ categories: !this.state.categories });
  };

  render() {
    return (
      <div>
        <Title title={"hola"} />
        <button onClick={() => this.activateCategories()}>Categorias</button>

        {this.state.categories ? (
          <ul>
            {Object.keys(this.state.categorias).map((object, i) => (
              <li key={i}>{this.state.categorias[object].name}</li>
            ))}
          </ul>
        ) : null}

        <Title title={"adios"} />
        <Title title={"thrid-B"} />
      </div>
    );
  }
}
