import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react';

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
    <div className='form-container'>
      <Form onSubmit={submitHandler}>
        <Form.Field>
          <label style={{'color': 'white', 'fontSize': '16px'}}>Name: </label>
          <input name='name' value={input.name} onChange={inputHandler} required/>
        </Form.Field>
        <Form.Field>
          <label style={{'color': 'white', 'fontSize': '16px'}}>Age: </label>
          <input type='number' name='age' value={input.age} onChange={inputHandler} required/>
        </Form.Field>
        <Form.Field>
          <label style={{'color': 'white', 'fontSize': '16px'}}>Height: </label>
          <input name='height' value={input.height} onChange={inputHandler} required/>
        </Form.Field>
        <Button type='submit' inverted color='white'>Submit</Button>
      </Form>
    </div>
  )
}

export default SmurfForm;