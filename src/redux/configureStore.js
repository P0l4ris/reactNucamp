import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

//this function creates the redux store
export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};