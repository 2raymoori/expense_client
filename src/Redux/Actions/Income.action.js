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
const url_prefix = "https://smiling-bull-apron.cyclic.app/api/income/";
export const loadIncome = (inputToken) => async (dispatcher) => {
  
  try {
    const URL = url_prefix + "all";
    const res = await axios.get(URL, {
      headers: {
        "Content-Type": "application/json",
        "user-auth-token": inputToken,
      },
    });
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
  console.log(incomeDetail);
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
      const response = await axios.get(`${url_prefix}${res.data.data._id}`,config);
      console.log(response);
      console.log("########################################################################################")
      console.log(res.data.data);
      if (response.status === 200) {
        dispatcher({
          type: "ADD_INCOME",
          payload: response.data.data[0],
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
