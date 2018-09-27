import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
    FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
}


export default function(state = initialState, action) {

    switch(action.type) {

        default:
            return state;
    }
}
