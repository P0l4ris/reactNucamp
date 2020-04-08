import { createStore, combineReducers } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';



// one reducer 
// import { Reducer, initialState } from './reducer';

//this function creates the redux store
//only takes one root reducer as argument

export const ConfigureStore = () => {
    const store = createStore(
            combineReducers({
                campsites: Campsites,
                comments: Comments,
                partners: Partners,
                promotions: Promotions
            })
        
        
        // Reducer,
        // initialState
    );

    return store;
};