import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { alertReducer } from "./Reducers/AlertReducer";
import { expenseCatReducer } from "./Reducers/ExpenseCategory.reducer";
import { incomeReducer } from "./Reducers/Income.reducer";
import { incomeCatReducer } from "./Reducers/IncomeCategory.reducer";
import { userReducer } from "./Reducers/User.reducer";
import {expenseReducer} from "./Reducers/Expense.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  alert: alertReducer,
  expenseCategory: expenseCatReducer,
  incomeCategory: incomeCatReducer,
  income: incomeReducer,
  expense:expenseReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
/*
export const income={
    2023:{
        "2":{
            "cat1":[22,234,40],
            "cat2":[44,105,5],
            "cat6":[66]
        },
        "3":{
            "cat1":[20,16,84],
            "cat2":[44,105,5],
        }
    },
    2022:{
        "1":{
            "cat1":[22,24,40],
            "cat2":[44,105,5],
            "cat6":[66]
        },
        "2":{
            "cat1":[20,16,84],
            "cat2":[44,105,5],
        }
    },
    2024:{
        "2":{
            "cat1":[22,234,40],
            "cat2":[44,105,5],
            "cat6":[66]
        },
        "3":{
            "cat1":[20,16,84],
            "cat2":[44,105,5],
        }
    },
    2021:{
        "1":{
            "cat1":[22,24,40],
            "cat2":[44,105,5],
            "cat6":[66]
        },
        "2":{
            "cat1":[20,16,84],
            "cat2":[44,105,5],
        }
    }
}
 */
