import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { alertReducer } from "./Reducers/AlertReducer";
import {expenseCatReducer} from "./Reducers/ExpenseCategory.reducer";
import {incomeCatReducer} from "./Reducers/IncomeCategory.reducer";
import {userReducer} from "./Reducers/User.reducer";

const rootReducer = combineReducers({
    user:userReducer,
    alert:alertReducer,
    expenseCategory:expenseCatReducer,
    incomeCategory:incomeCatReducer
})
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk
)));
export default store;