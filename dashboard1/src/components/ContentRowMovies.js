import React, { Component } from 'react';
import SmallCard from './SmallCard';

class ContentRowMovies extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      user: 0
    };
  }

  async componentDidMount() {
    try {
      const responseProducts = await fetch("/api/products");
      const dataProducts = await responseProducts.json();
      this.setState({ genres: dataProducts.count });

      const responseUsers = await fetch("/api/user");
      const dataUsers = await responseUsers.json();
      this.setState({ user: dataUsers.count });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { genres, user } = this.state;

    return (
      <div className="row">
        <SmallCard
          title="Total de productos"
          color="primary"
          cuantity={genres}
          icon="fa-clipboard-list"
        />
        <SmallCard
          title="Total de categorias"
          color="primary"
          cuantity="3"
          icon="fa-award"
        />
        <SmallCard
          title="Total de Clientes"
          color="primary"
          cuantity={user}
          icon="fa-award"
        />
      </div>
    );
  }
}

export default ContentRowMovies;