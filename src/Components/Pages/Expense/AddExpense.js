import React, {useState} from "react";
import Alert from "../../Alert/Alert";
import {connect} from "react-redux";
import { addExpense } from "../../../Redux/Actions/Expense.action";

const AddExpense = (props) => {
  const [formControl, setFormControl] = useState({
    name: "",
    amount: 0,
    description: "",
    expenseCategory: "",
    expenseDate: "",
  });
  const processInput = (e) => {
    setFormControl({ ...formControl, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const processForm = (e) => {
    e.preventDefault();
    console.log(formControl);
    props.addExpense(formControl);
    setFormControl({
      name: "",
      amount: 0,
      description: "",
      expenseCategory: "",
      expenseDate: "",
    })
  };
  return (
      <div className="container border border-1 border-danger">
        <h1 className="text-primary text-center">Expense Details</h1>
        <Alert />
        <div className="container row">
          <form onSubmit={processForm}>
            <div className="col-lg-12">
              <div className="form-floating mb-3">
                <input
                    required
                    name={"name"}
                    onChange={processInput}
                    value={formControl.name}
                    type={"type"}
                    className="form-control"
                    id={"id"}
                    placeholder={"placeholder"}
                />
                <label htmlFor="id">Expense Name</label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-floating mb-3">
                <input
                    required
                    name={"amount"}
                    onChange={processInput}
                    value={formControl.amount}
                    type="number"
                    className="form-control"
                    min="1"
                    id={"id"}
                    placeholder={"placeholder"}
                />
                <label htmlFor="id">Amount</label>
              </div>
            </div>
            <div className="col-lg-12">
              <div class="form-floating mb-3">
              <textarea
                  name={"description"}
                  value={formControl.description}
                  onChange={processInput}
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
              ></textarea>
                <label for="floatingTextarea">Expense Description</label>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-floating mb-3">
                <input
                    required
                    name={"expenseDate"}
                    type={"date"}
                    value={formControl.expenseDate}
                    onChange={processInput}
                    className="form-control"
                    id={"id"}
                    placeholder={"placeholder"}
                />
                <label htmlFor="id">Date</label>
              </div>
            </div>
            <div className="col-lg-12">
              <div class="form-floating">
                <select
                    onChange={processInput}
                    name={"expenseCategory"}
                    id="expenseCategory"
                    class="form-control form-select"
                >
                  <option value={"0"} key={0}>
                    {"Select Category"}
                  </option>
                  {props.expenseCategory.map((e) => {
                    return (
                        <option value={e._id} key={e._id}>
                          {e.name}
                        </option>
                    );
                  })}
                </select>
                <label for="floatingTextarea">Expense Category</label>
              </div>
            </div>
            &nbsp;
            <div className="col-lg-12">
              <div className="form-floating mb-3">
                <input className="form-control btn btn-primary" type={"submit"} />
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};
const mapStateToProps = (state) => {
  return {
    expenseCategory: state.expenseCategory,
  };
};
const mapDispatcerToProps = (dispatcher) => {
  return {
    addExpense: (data) => {
      dispatcher(addExpense(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatcerToProps)(AddExpense);
