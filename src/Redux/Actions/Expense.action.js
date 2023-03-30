import axios from "axios";
import { ADD_EXPENSE, LOAD_EXPENSE } from "../Constants/ActionTypes";
import { ADD_ALERT } from "../Constants/AlertTypes";
import { registerAlert } from "./AlertAction";
const authToken = localStorage.getItem("tokenVal");
const config = {
    headers: {
        "Content-Type": "application/json",
        "user-auth-token": authToken,
    },
};
const url_prefix = "https://smiling-bull-apron.cyclic.app/api/expense/";
export const loadExpense = (inputToken) => async (dispatcher) => {
    console.log(":::: "+inputToken);
    try {
        const URL = url_prefix + "all";
        const res = await axios.get(URL, {
            headers: {
                "Content-Type": "application/json",
                "user-auth-token": inputToken,
            }
        });
        console.log(res);
        if (res.status === 200) {
            dispatcher({
                type: LOAD_EXPENSE,
                payload: res.data.data,
            });
        }
    } catch (error) {
        console.log("Sorry there exists an error...");
    }
};

export const addExpense = (expenseDetail) => async (dispatcher) => {
    try {
        console.log("dispathcer..... Expense");
        console.log(expenseDetail);
        //expenseDate, expenseCategory,
        const { name, amount, description, expenseCategory, expenseDate } =
            expenseDetail;
        if (
            name.trim().length > 0 &&
            expenseCategory.trim().length > 0 &&
            description.trim().length > 0 &&
            expenseDate.trim().length > 0 &&
            amount > 0
        ) {
            const body = JSON.stringify(expenseDetail);
            const url = url_prefix + "add";

            const res = await axios.post(url, body, config);
            console.log(res);
            const response = await axios.get(`${url_prefix}${res.data.data._id}`,config);
            console.log(response);
            if (res.status === 200) {
                dispatcher({
                    type: "ADD_EXPENSE",
                    payload: response.data.data[0],
                });
                dispatcher(registerAlert("Expense Successfully added ", "success"));
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
