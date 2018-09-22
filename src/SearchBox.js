import React from 'react';

const SearchBox = ({searchChange}) => {

  return (
    <div className="ma2 pa2 tc">
      < input 
        type ='search' 
        placeholder = 'search recipes by name' 
        className="pa3 ba b--purple"
        onChange={searchChange}
        />
    </div>


  );

}

export default SearchBox;