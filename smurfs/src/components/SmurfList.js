import React, { useEffect } from 'react';
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
import SmurfForm from './SmurfForm';
import Smurf from './Smurf'

const SmurfList = () => {
  const state = useSelector(state => state)
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

  useEffect(() => {
    fetchSmurfs();
  }, [])

  return (
    <div>
      <SmurfForm addSmurf={addSmurf}/>
      {state.isFetching && <div>Fetching smurfs</div>}
      {state.error && <div>{state.error}</div>}
      {state.smurfs.map(item => <Smurf key={item.id} smurf={item}/>)}
    </div>
  )
}

export default SmurfList;