//making a reducer for each property import the data array first
import { CAMPSITES } from '../shared/campsites';

//all reducers take two parameters current state,
// if no state, set a default state with = CAMPSITES
export const Campsites = (state = CAMPSITES, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
