import * as actionTypes from '../actions';

const initialState = {
    saveCounter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE:
         var updatedArray=[...state.saveCounter, action.payload.value]
            return {
               saveCounter: [...updatedArray]
            }
        default:
            return state;
    }
}

export default reducer;