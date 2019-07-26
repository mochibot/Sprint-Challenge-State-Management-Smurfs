import React, { useState } from 'react';

const SmurfForm = (props) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    height: ''
  })

  const inputHandler = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let newSmurf = {
      ...input,
      age: parseInt(input.age)
    }
    console.log(newSmurf)
    props.addSmurf(newSmurf);
    setInput({
      name: '',
      age: '',
      height: ''
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Name: </label>
        <input name='name' value={input.name} onChange={inputHandler} required/>
        <label>Age: </label>
        <input type='number' name='age' value={input.age} onChange={inputHandler} required/>
        <label>Height: </label>
        <input name='height' value={input.height} onChange={inputHandler} required/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SmurfForm;