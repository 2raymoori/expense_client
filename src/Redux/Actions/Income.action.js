import axios from "axios";
import { ADD_INCOME, LOAD_INCOME } from "../Constants/ActionTypes";
import { ADD_ALERT } from "../Constants/AlertTypes";
import { registerAlert } from "./AlertAction";
const authToken = localStorage.getItem("tokenVal");
const config = {
  headers: {
    "Content-Type": "application/json",
    "user-auth-token": authToken,
  },
};
const url_prefix = "http://127.0.0.1:3001/api/income/";
export const loadIncome = () => async (dispatcher) => {
  try {
    const URL = url_prefix + "all";

    const res = await axios.get(URL, config);
    if (res.status === 200) {
      dispatcher({
        type: LOAD_INCOME,
        payload: res.data.data,
      });
    }
  } catch (error) {
    console.log("Sorry there exists an error...");
  }
};

export const addIncome = (incomeDetail) => async (dispatcher) => {
  try {
    console.log("dispathcer..... income");
    const { name, amount, description, incomeCategory, incomeDate } =
      incomeDetail;
    if (
      name.trim().length > 0 &&
      incomeCategory.trim().length > 0 &&
      description.trim().length > 0 &&
      incomeDate.trim().length > 0 &&
      amount > 0
    ) {
      const body = JSON.stringify(incomeDetail);
      const url = url_prefix + "add";

      const res = await axios.post(url, body, config);
      if (res.status === 200) {
        dispatcher({
          type: ADD_INCOME,
          payload: res.data.data,
        });
        dispatcher(registerAlert("Income Successfully added ", "success"));
      } else {
        dispatcher(registerAlert(res.data.data, "danger"));
      }
    } else {
      dispatcher(registerAlert("Sorry All Fields are required ", "danger"));
    }
  } catch (error) {
    console.log(error);
    console.log("Error from income action...");
  }
};
