const {
  ADD_EXPENSE_CATEGORY,
  LOAD_EXPENSE_CATEGORY,
} = require("../Constants/ActionTypes");

const initState = [];

export const expenseCatReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_EXPENSE_CATEGORY:
      return [...state, payload];

    case LOAD_EXPENSE_CATEGORY:
      state = payload;
      return state;

    default:
      return state;
  }
};
// module.exports={expenseCatReducer};
