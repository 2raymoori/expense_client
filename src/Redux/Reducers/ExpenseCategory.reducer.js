const { ADD_EXPENSE_CATEGORY } = require("../Constants/ActionTypes");

const initState =[];

export const expenseCatReducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case ADD_EXPENSE_CATEGORY:
            return [...state,payload];
        default:
            return state;
    }
}
// module.exports={expenseCatReducer};