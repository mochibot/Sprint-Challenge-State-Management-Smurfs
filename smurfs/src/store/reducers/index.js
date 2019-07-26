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
DELETE_SMURF_FAILURE } from '../actions/index';

const initialState = {
  smurfs: [],
  isFetching: false,
  isAdding: false,
  isDeleting: false,
  isUpdating: false,
  error: '' 
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START: 
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      }
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ADD_SMURF_START:
      return {
        ...state,
        isAdding: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        isAdding: false,
        smurfs: action.payload
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        isAdding: false,
        error: action.payload
      }
    case EDIT_SMURF_START:
      return {
        ...state,
        isUpdating: true,
        error: null
      }
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        isUpdating: false,
        smurfs: action.payload
      }
    case EDIT_SMURF_FAILURE:
      return {
        ...state,
        isUpdating: false,
        error: action.payload
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        isDeleting: true,
        error: null
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        smurfs: action.payload
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload
      }
    default: 
      return state;
  }
}