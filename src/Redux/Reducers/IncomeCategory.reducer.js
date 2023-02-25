const { ADD_INCOME_CATEGORY } = require("../Constants/ActionTypes");

const initState =[];

export const incomeCatReducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case ADD_INCOME_CATEGORY:
            return [...state,payload];
        default:
            return state;
    }
}
// module.exports=incomeCatReducer;