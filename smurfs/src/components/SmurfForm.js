import React, { useState, useEffect } from 'react';

const SmurfForm = (props) => {
  const [input, setInput] = useState({
    name: '',
    age: '',
    height: ''
  })

  useEffect(() => {
    if (props.activeSmurf) {
      setInput(props.activeSmurf);
    }
  }, [props.activeSmurf])

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
    if (props.activeSmurf) {
      props.editSmurf(newSmurf);
    } else {
      props.addSmurf(newSmurf);
    }
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