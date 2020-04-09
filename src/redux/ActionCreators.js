//second step?
//what does this page do exactly? manage the state change when one is "adding comment?" 
//its a creator function so its when a user is creating/doing something new?

//asterisk imports all ActionTypes from folder 
import * as ActionTypes from './ActionTypes';
//server simulation with a delay *TEMP
import { baseUrl } from '../shared/baseUrl';


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

    return fetch(baseUrl + 'campsites') //location of campsites for the fetch promise. Url and its location in it
        //response.json turns the representation to javascript as a new promise
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                //wont move on, error with response/response.status are informative built in properties. throw it the catch-end.
                const error = new Error(`Error ${response.status}: ${response.statusText}`);  //404s?
                error.response = response;
                throw error; 
            }
            },
            //error for rejected promise in this .then regardless. that means .then promise never even worked
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json()) //the promise chained
        .then(campsites => dispatch(addCampsites(campsites))) //the array dispatched with the action creator
        .catch(error => dispatch(campsitesFailed(error.message))); 
        //this error catches the any of ALL failed .then promises here
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

//another thunk 
export const fetchComments = () => dispatch => {    
    return fetch(baseUrl + 'comments')

    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`); 
            error.response = response;
            throw error; 
        }
    },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));

};


//normal action creators, one arrow function
export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

//thunk
export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`); 
            error.response = response;
            throw error; 
        }
    },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
    )
    .then(response => response.json())
    .then(promotions => dispatch(addPromotions(promotions)))
    .catch(error => dispatch(promotionsFailed(error.message)));

}

//regular action creator 
export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});