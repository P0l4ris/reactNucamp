//making a reducer for each property import the data array first. This is being passed in from ActionTypes instead
// import { CAMPSITES } from '../shared/campsites';

import * as ActionTypes from './ActionTypes'

//all reducers take two parameters #1 current state,
// if no state, set a default state with = CAMPSITES, and then #2 an action. We changed the structure of the state and not just hold the array. use a spread at the cases for each property
export const Campsites = (state = {
        isLoading: true,
        errMess: null,
        campsites: []
    }, action) => {
        switch (action.type) {
            case ActionTypes.ADD_CAMPSITES:
                return {...state, isLoading: false, errMess: null, campsites: action.payload};
            case ActionTypes.CAMPSITES_LOADING:
                return {...state, isLoading: true, errMess: null, campsites: []};
            case ActionTypes.CAMPSITES_FAILED:
                return {...state, isLoading: false, errMess: action.payload};
            default:
                return state;
        }
};
