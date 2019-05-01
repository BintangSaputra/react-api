import React from "react";
import axios from "axios";

const API_STRING = `https://www.food2fork.com/api/search?key=ac8acc26c6c2b613c62c5583b4d5207f&q=broccoli`;

export class Food extends React.Component {
  state = {
    foodRecipes: []
  };
  componentDidMount() {
    axios
      .get(API_STRING)
      .then(res => {
        const foodRecipes = res.data.recipes;
        this.setState({ foodRecipes });

        console.log(res.data.recipes);
      })
      .catch(error => console.log(error));
  }

  render() {
    const recipes = this.state.foodRecipes.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.title}</td>
          <td>
            <img src={item.image_url} alt="recipes" />
          </td>
          <td>{item.publisher}</td>
        </tr>
      );
    });
    return (
      <table>
        <tbody>
          <tr>
            <td>Food Name</td>
            <td>Recipes</td>
            <td>How to Cook</td>
          </tr>
          {recipes}
        </tbody>
      </table>
    );
  }
}
