import axios from "axios";
import { registerAlert } from "./AlertAction";
import {loadExpense} from "./Expense.action";
import {loadIncome} from "./Income.action";
import {loadIncomeCategory} from "./IncomeCategory.action";
import {loadExpenseCategory} from "./ExpenseCategory.action";
const token = localStorage.getItem("tokenVal");

const {
  USER_LOADED_ERROR,
  LOAD_USER,
  USER_LOADED,
} = require("../Constants/ActionConstants");

const userLoadError = (
  error = "Sorry There exists an error in loading the user"
) => {
  return {
    type: USER_LOADED_ERROR,
    payload: { err: error },
  };
};

const loadUser = () => {
  return {
    type: LOAD_USER,
  };
};
const userLoaded = (data = {}) => {
  return {
    type: USER_LOADED,
    payload: data,
  };
};
const signOut = (data = {}) => {
  return {
    type: USER_LOADED,
    payload: data,
  };
};
export const signInUser = (email, password) => async (dispatch) => {
  try {
    // console.log(data)
    if (email === "" || password === "") {
      dispatch(registerAlert("Sorry All Fields are required.", "danger"));
    } else {
      dispatch(loadUser());
      try {
        const data = {
          email: email,
          password: password,
        };
        const res = await axios.post(
          "https://smiling-bull-apron.cyclic.app/api/auth/signin",
          data,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("tokenVal", res.data.token);
          // console.log(res.data.token);
          console.log(token);
            
          dispatch(userLoaded(res.data.user));
          dispatch(loadExpense(res.data.token));
          dispatch(loadIncome(res.data.token));
          dispatch(loadIncomeCategory(res.data.token));
          dispatch(loadExpenseCategory(res.data.token));
          
          console.log('loginSuccess....')
          return 'loginSuccess';
        } else {
          dispatch(registerAlert(res.data.msg, "danger"));
        }
      } catch (error) {
        dispatch(
          registerAlert(
            "Sorry There exists an error with your credentials.. ",
            "danger"
          )
        );
      }
    }
  } catch (error) {}
};
export const signupUser = (data) => async (dispatch) => {
  try {
    if (
      data.email === "" ||
      data.fName === "" ||
      data.lName === "" ||
      data.password === "" ||
      data.confirmPassword === ""
    ) {
      dispatch(registerAlert("Sorry All Fields are required.", "danger"));
    } else if (data.password !== data.confirmPassword) {
      dispatch(
        registerAlert(
          "Sorry Password field and Confirm Password has to match.",
          "danger"
        )
      );
    } else {
      dispatch(loadUser());
      try {
        const res = await axios.post(
          "https://smiling-bull-apron.cyclic.app/api/auth/signup",
          data,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        if (res.status === 200) {
          localStorage.setItem("tokenVal", res.data.token);
          dispatch(userLoaded(res.data.user));
          // dispatch(userLoaded(res.data.msg))
        } else {
          dispatch(registerAlert(res.data.msg, "danger"));
        }
      } catch (error) {}
    }
  } catch (error) {}
};

const signOutUser = () => (dispatch) => {};

// module.exports = {
//     signInUser,
//     signupUser
// }
