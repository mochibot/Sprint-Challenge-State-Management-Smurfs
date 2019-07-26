import React from 'react';

const Smurf = (props) => {

  const deleteSmurf = (event, id) => {
    event.preventDefault();
    props.deleteSmurf(id)
  }
 
  return (
    <div>
      <div>Name: {props.smurf.name}</div>
      <div>Age: {props.smurf.age}</div>
      <div>Height: {props.smurf.height}</div>
      <button onClick={(event) => props.selectSmurf(event, props.smurf)}>Edit</button>
      <button onClick={(event) => deleteSmurf(event, props.smurf.id)}>Delete</button>
    </div>
  )
}

export default Smurf;