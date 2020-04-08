import { CAMPSITES } from "../shared/campsites";

//this holds the ActionTypes and passed onto the creators and comment/campsites/partners/promotions wherever
export const ADD_COMMENT = 'ADD_COMMENT';
//while the site loads and waits for response
export const CAMPSITES_LOADING = 'CAMPSITES_LOADING';
//when it fails to load data and show error message in new state
export const CAMPSITES_FAILED = 'CAMPSITES_FAILED';
//successful load of campsites and new data can be addded
export const ADD_CAMPSITES = 'ADD_CAMPSITES';
