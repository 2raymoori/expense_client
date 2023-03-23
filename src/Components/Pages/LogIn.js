import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addAlert } from "../../Redux/Actions/AlertAction";
import { signInUser } from "../../Redux/Actions/User.action";
import Alert from "../Alert/Alert";
import InputField from "../GenericComponents/InputField";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { loadIncomeCategory } from "../../Redux/Actions/IncomeCategory.action";
import { loadExpenseCategory } from "../../Redux/Actions/ExpenseCategory.action";
import { loadIncome } from "../../Redux/Actions/Income.action";
import {loadExpense} from "../../Redux/Actions/Expense.action";

const LogIn = (props) => {
  const [formInput, setFormInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const processInput = (ref) => {
    setFormInput({ ...formInput, [ref.target.name]: ref.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    props.signIn(formInput.email, formInput.password);
  };

  return (
    <>
      {props.user.status === 1 ? (
        // <Navigate replace to="/dashboard" />
        // navigate('/dashboard')
          setTimeout(()=>{
navigate('/dashboard')
          },100)
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
    income:state.income
  };
};
const mapActionToProps = (dispatch) => {
  return {
    signIn: (inputEmail, inputPassword) => {
      dispatch(signInUser(inputEmail, inputPassword));
    }
  };
};
export default connect(mapStateToProps, mapActionToProps)(LogIn);
