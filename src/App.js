import React from 'react';
import { recipes } from './recipes';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Title from './Title';



class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      recipes: [],
      searchfield : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  componentDidMount() {
      this.setState( {recipes: recipes });
      
  }

  render() {
    const filterdRecipes = this.state.recipes.filter(recipe => {
      return recipe.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
        <div className="pa2 tc">
          <Title />
          <SearchBox searchChange={this.onSearchChange}/>
          <CardList recipes={filterdRecipes}/>
        </div>
    );
  }

}

export default App;