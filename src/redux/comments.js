//i think this is just taking care of adding a new comment to the preexisting array COMMENTS. it receives the action object made by action creator. that is passed here, it compares the action "adding a new comment" with CASE. it verifies case against ActionTypes.ADD_COMMENT if there is a new comment, then it changes to the new state which ends upt adding a new object it to the original COMMENTS array.

//update its state with:
import * as ActionTypes from './ActionTypes';


//a comment reducer function here, waiting for change.

//we are updating the capitalized "state = COMMENTS, action" arrays into what they are now full objects with errors and the actual array
export const Comments = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        case ActionTypes.ADD_COMMENT:
                const comment = action.payload;
                comment.id = state.comments.length; //number in array
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)}; //adds comment to array... but now we spread original state + new comm.
        default:
            return state;
    }
};