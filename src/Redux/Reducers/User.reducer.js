import { LOAD_EXPENSE_CATEGORY, LOAD_INCOME_CATEGORY } from "../Constants/ActionTypes";

const { USER_LOADED, USER_LOADED_ERROR, LOAD_USER, SIGN_OUT } = require("../Constants/ActionConstants");

const initState = {
    error:"ERRORsss",
    loading:true,
    status:0,
    userIncome:[],
    userExpense:[],
    userIncomeCategory:[],
    userExpenseCategory:[],
    user:{}
}
export const userReducer = (state=initState, action)=>{
    switch(action.type){
        case USER_LOADED:
            return {
                ...state,
                loading:false,
                status:1,
                user:action.payload
            }
        case USER_LOADED_ERROR:
            return {
                ...state,
                loading:false,
                error:action.payload.err
            }
            case LOAD_USER:
                return {
                    ...state,
                    loading:true,
                    error:"123 Error..."
                }
            case SIGN_OUT:
            return {
                ...state,
                loading:false,
                user: action.payload
            }
                case LOAD_INCOME_CATEGORY:
                    return {
                        ...state,
                        userIncomeCategory:action.payload
                    }
                    case LOAD_EXPENSE_CATEGORY:
                        return {
                            ...state,
                            userExpenseCategory:action.payload
                        }
        default: return state;
    }
}

// export default userReducer;