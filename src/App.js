import React from 'react';
import { recipes } from './recipes';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Title from './Title';


const App = () => {
  return (
    <div>
      <Title />
      <SearchBox />
      <CardList recipes={recipes}/>
    </div>
  );

}

export default App;