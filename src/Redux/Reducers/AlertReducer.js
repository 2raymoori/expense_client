const { REMOVE_ALERT, ADD_ALERT } = require("../Constants/AlertTypes");

const initState = [{msg:"Error Occured Login",id:2130,type:"danger"}]
export const alertReducer = (state = initState, action)=>{
    const {type,payload} = action;
    switch(type){
        case ADD_ALERT:
            return [...state,payload]
        case REMOVE_ALERT:
            console.log("removing alert in reducer")
            return state.filter(alert=>alert.id !== action.payload.id)
        default: return state
    }
}
// module.exports = {
//     alertReducer
// }
