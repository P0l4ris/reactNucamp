//what does this page do exactly? manage the state change when one is "adding comment?" 
//its a creator function so its when a user is creating/doing something new?

//asterisk imports all ActionTypes from folder 
import * as ActionTypes from './ActionTypes';
//server simulation with a delay *TEMP
import { CAMPSITES } from '../shared/campsites';


export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        //if identifier of property is same as value, just write it once.
        rating: rating,
        author: author,
        text: text
    }
});

//***thunk syntax, function in another function =>x2
export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading()); //an action while the page loads. the next action creator below

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);

}



//not thunk, regular action creator syntax ONE => like the first one at the top
export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
    //no payload
});


export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
});