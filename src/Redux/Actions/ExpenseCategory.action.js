import axios from "axios";
import {
  ADD_EXPENSE_CATEGORY,
  LOAD_EXPENSE_CATEGORY,
} from "../Constants/ActionTypes";
import { registerAlert } from "./AlertAction";
const token = localStorage.getItem("tokenVal");
export const addExpenseCategory = (categoryName) => async (dispatch) => {
  try {
    const body = JSON.stringify({
      categoryName,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        "user-auth-token": token,
      },
    };

    const res = await axios.post(
      "http://localhost:3001/api/expensecategory/add",
      body,
      config
    );
    console.log(res);
    if (res.status === 200) {
      dispatch({
        type: ADD_EXPENSE_CATEGORY,
        payload: res.data.msg,
      });
      dispatch(
        registerAlert("Expense Category Successfully added. ", "success")
      );
    } else {
      console.log("Err...");
      dispatch(registerAlert(res.data.msg, "danger"));
    }
  } catch (error) {
    dispatch(
      registerAlert("Sorry There exists an error. Please try again ", "danger")
    );
  }
};

export const loadExpenseCategory = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "user-auth-token": token,
      },
    };

    console.log("EXPPPPPPPPPPPPPPPPPPP form expense category action");
    console.log(config);
    console.log("EXPPPPPPPPPPPPPPPPPPP form expense category action");

    const url = "http://127.0.0.1:3001/api/expensecategory/all";
    const res = await axios(url, config);
    if (res.status === 200) {
      dispatch({
        type: LOAD_EXPENSE_CATEGORY,
        payload: res.data.data,
      });

      // console.log(res.data);
    }
  } catch (error) {}
};
