import React from 'react';


const Card = (props) => {
  const { id, name, flavour } = props;
  return  (
    <div className='bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5 '>
      <img  src ={`./images/${id}.png`} alt={`test`}/>
      <div>
        <h2>{name}</h2>
        <p>{flavour}</p>
      </div>
    </div>
  );
}

export default Card;
