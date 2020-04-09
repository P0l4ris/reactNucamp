import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form'; //new form
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import { InitialFeedback } from './Forms';



// one reducer 
// import { Reducer, initialState } from './reducer';

//this function creates the redux store
//only takes one root reducer as argument so we split the reducer

export const ConfigureStore = () => {
    const store = createStore(
            combineReducers({
                campsites: Campsites,
                comments: Comments,
                partners: Partners,
                promotions: Promotions,
                //the new form
                ...createForms({
                    feedbackForm: InitialFeedback
                })
            }),

            //to use thunk and logger. logger is done.
            applyMiddleware(thunk, logger)
        
        
        // Reducer,
        // initialState
    );

    return store;
};