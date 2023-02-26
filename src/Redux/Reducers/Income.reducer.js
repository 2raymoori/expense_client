import { ADD_INCOME, LOAD_INCOME } from "../Constants/ActionTypes";
const initState = [];
export const incomeReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_INCOME:
      state = payload;
      return state;
    case ADD_INCOME:
      return [...state, payload];
    default:
      return state;
  }
};
