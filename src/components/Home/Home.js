import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";
import store, { CLEAR_FIELDS } from './../../store';

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();

    this.state = {
      recipes: reduxState.recipeList
    };

    this.clearInputs = this.clearInputs.bind( this )
    this.reRender = this.reRender.bind( this )
  }

  clearInputs(){
    store.dispatch({
      type: CLEAR_FIELDS
    })
  }

  reRender(){
    const reduxState = store.getState();
    this.setState({
      recipes: reduxState.recipeList
    })
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          index={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authFirst}
          authorLast={recipe.authLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          reRender={this.reRender}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button onClick={ this.clearInputs }>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
