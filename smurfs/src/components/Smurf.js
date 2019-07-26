import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const Smurf = (props) => {

  const deleteSmurf = (event, id) => {
    event.preventDefault();
    props.deleteSmurf(id)
  }
 
  return (
    <Card style={{'height': '200px'}}>
      <Card.Content>
        <Card.Header style={{'font-family': 'Love Ya Like A Sister'}}>{props.smurf.name}</Card.Header>
        <Card.Description>
          <div>Age: {props.smurf.age}</div>
          <div>Height: {props.smurf.height}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Icon name='edit outline' size='large' color='blue' onClick={(event) => props.selectSmurf(event, props.smurf)} />
          <Icon name='trash alternate outline' size='large' color='red' onClick={(event) => deleteSmurf(event, props.smurf.id)} />
      </Card.Content>
    </Card>
  )
}

export default Smurf;