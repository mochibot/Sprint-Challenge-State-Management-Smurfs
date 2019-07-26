import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { 
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  EDIT_SMURF_START,
  EDIT_SMURF_SUCCESS,
  EDIT_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE } from '../store/actions/index';
import { Card } from 'semantic-ui-react';
import SmurfForm from './SmurfForm';
import Smurf from './Smurf'

const SmurfList = () => {
  const state = useSelector(state => state);
  const [activeSmurf, setActiveSmurf] = useState(null);
  const dispatch = useDispatch();

  const fetchSmurfs = () => {
    dispatch({
      type:  FETCH_SMURF_START
    })
    axios.get('http://localhost:3333/smurfs')
    .then(response => {
      console.log('fetch smurfs success: ', response);
      dispatch({
        type: FETCH_SMURF_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      console.log('fetch smurfs error: ', error);
      dispatch({
        type: FETCH_SMURF_FAILURE,
        payload: 'Error fetching smurfs'
      })
    })
  }

  const addSmurf = (input) => {
    dispatch({
      type: ADD_SMURF_START
    })
    axios.post('http://localhost:3333/smurfs', input)
      .then(response => {
        console.log('add smurf success: ', response);
        dispatch({
          type: ADD_SMURF_SUCCESS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log('add smurf error: ', error);
        dispatch({
          type: ADD_SMURF_FAILURE,
          payload: 'Error adding smurf'
        })
      })
  }

  const editSmurf = (smurf) => {
    dispatch({
      type: EDIT_SMURF_START
    })
    axios.put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
      .then(response => {
        console.log('edit smurf success: ', response)
        dispatch({
          type: EDIT_SMURF_SUCCESS,
          payload: response.data
        })
        setActiveSmurf(null);
      })
      .catch(error => {
        console.log('edit smurf failure: ', error)
        dispatch({
          type: EDIT_SMURF_FAILURE,
          payload: 'Error editing smurf'
        })
      })
  }

  const deleteSmurf = (id) => {
    dispatch({
      type: DELETE_SMURF_START
    })
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        console.log('delete smurf success: ', response)
        dispatch({
          type: DELETE_SMURF_SUCCESS,
          payload: response.data
        })
        fetchSmurfs();
      })
      .catch(error => {
        console.log('delete smurf failure: ', error)
        dispatch({
          type: DELETE_SMURF_FAILURE,
          payload: 'Error deleting smurf'
        })
      })
  }

  const selectSmurf = (event, smurf) => {
    event.preventDefault();
    setActiveSmurf(smurf)
  }

  useEffect(() => {
    fetchSmurfs();
  }, [])

  return (
    <div className='app-content'>
      <div className='sidebar'>
        <SmurfForm addSmurf={addSmurf} editSmurf={editSmurf} activeSmurf={activeSmurf}/>
      </div>
      <div className='content'>
        {state.isFetching && <div>Fetching smurfs</div>}
        {state.isAdding && <div>Adding smurfs</div>}
        {state.isDeleting && <div>Deleting smurfs</div>}
        {state.error && <div>{state.error}</div>}
        <Card.Group itemsPerRow={3}>
          {state.smurfs.map(item => <Smurf key={item.id} smurf={item} deleteSmurf={deleteSmurf} selectSmurf={selectSmurf}/>)}
        </Card.Group> 
      </div>
    </div>
  )
}

export default SmurfList;