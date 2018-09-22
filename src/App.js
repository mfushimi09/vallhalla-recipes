import React from 'react';
import { recipes } from './recipes';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Title from './Title';



class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      recipes: recipes,
      searchfield : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {
    const filterdRecipes = this.state.recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div>
        <div className="fl w-10 ">/</div>
        <div className="fl  w-80 pa2 tc">
          <Title />
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList recipes={filterdRecipes}/>
        </div>
        <div className="fl w-10 ">/</div>
      </div>
    );
  }

}

export default App;