import React from 'react';
import Card from './Card';

const CardList = ({ recipes })  => {
  if(recipes.length ===0) {
    return <h2>Not found</h2>
  } else {
    return(
      <div>
        {
          recipes.map((recipe, i) => {
            return( 
              <Card 
              key={i} 
              id={recipes[i].id} 
              name={recipes[i].name} 
              flavour={recipes[i].flavour}
              /> 
            );
          })
        }
      </div>
    );
  }
}

export default CardList;