//i think this is just taking care of adding a new comment to the preexisting array COMMENTS. it receives the action object made by action creator. that is passed here, it compares the action "adding a new comment" with CASE. it verifies case against ActionTypes.ADD_COMMENT if there is a new comment, then it changes to the new state which ends upt adding a new object it to the original COMMENTS array.

import { COMMENTS } from '../shared/comments';
//update its state with:
import * as ActionTypes from './ActionTypes';


//a comment reducer function here, waiting for change.
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
                const comment = action.payload;
                comment.id = state.length; //number in array
            comment.date = new Date().toISOString();
            return state.concat(comment); //adds comment to array
        default:
            return state;
    }
};