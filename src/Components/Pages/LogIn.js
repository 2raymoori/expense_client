import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addAlert } from "../../Redux/Actions/AlertAction";
import { signInUser } from "../../Redux/Actions/User.action";
import Alert from "../Alert/Alert";
import InputField from "../GenericComponents/InputField";
import { Link, Navigate, redirect } from "react-router-dom";
import { loadIncomeCategory } from "../../Redux/Actions/IncomeCategory.action";
import { loadExpenseCategory } from "../../Redux/Actions/ExpenseCategory.action";
import { loadIncome } from "../../Redux/Actions/Income.action";
import {loadExpense} from "../../Redux/Actions/Expense.action";

const LogIn = (props) => {
  const [formInput, setFormInput] = useState({ email: "", password: "" });

  const processInput = (ref) => {
    setFormInput({ ...formInput, [ref.target.name]: ref.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(formInput);
    await props.signIn(formInput.email, formInput.password);
    props.loadIncomeCateogyr();
    props.loadExpenseCategory();
    props.loadIncome();
    props.loadExpense();
    if (props.user.status === 1) {
      console.log(
        "Because the status changed to 1, I will load the income category..."
      );
    }
  };
  return (
    <>
      {props.user.status === 1 ? (
        <Navigate replace to="/dashboard" />
      ) : (
        <div className="signupLogin">
          <div className="formContainer">
            {props.user.status}
            <Alert />
            <form onSubmit={submitForm}>
              <div className="row">
                <h1 className="text-dark">Welcome...</h1>
                <p className="text-dark">
                  No Account Yet? <Link to={"/signup"}>Sign UP</Link>
                </p>
              </div>
              <div className="row">
                <div className="col-lg-12 form-group">
                  <InputField
                    value={formInput.email}
                    name="email"
                    processData={processInput}
                    type="email"
                    label="Emailsss"
                    id="floatingEmailss"
                    placeholder="Emails"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 form-group">
                  <InputField
                    value={formInput.password}
                    name="password"
                    processData={processInput}
                    type="password"
                    label="Password"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 form-group">
                  <button className="form-control btn btn-dark">
                    Login In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapActionToProps = (dispatch) => {
  return {
    loadExpenseCategory: () => {
      dispatch(loadExpenseCategory());
    },
    loadIncomeCateogyr: () => {
      dispatch(loadIncomeCategory());
    },
    signIn: (inputEmail, inputPassword) => {
      dispatch(signInUser(inputEmail, inputPassword));
    },
    loadIncome: () => {
      dispatch(loadIncome());
    },
    loadExpense:()=>{
      dispatch(loadExpense());
    }
  };
};
export default connect(mapStateToProps, mapActionToProps)(LogIn);
