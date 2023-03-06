import {ADD_EXPENSE, LOAD_EXPENSE} from "../Constants/ActionTypes";
const initState = [];
export const expenseReducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOAD_EXPENSE:
            state = payload;
            return state;
        case ADD_EXPENSE:
            return [...state, payload];
        default:
            return state;
    }
};