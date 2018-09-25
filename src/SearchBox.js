import React from 'react';

const SearchBox = ({searchChange}) => {

  return (
    <div className="ma2 pa2 tc">
      < input 
        size = '30'
        type ='search' 
        placeholder = 'search recipes by name' 
        className="pa3 ba b--purple searchbox"
        onChange={searchChange}
        />
    </div>


  );

}

export default SearchBox;