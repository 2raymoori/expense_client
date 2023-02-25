import React, { useState } from "react";
import { connect } from "react-redux";

const AddIncome = (props) => {
  const [formControl, setFormControl] = useState({
    name: "",
    amount: 0,
    desc: "",
    category: "",
    date: "",
  });
  const processInput = (e) => {
    setFormControl({ ...formControl, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  const processForm = (e) => {
    e.preventDefault();
    console.log(formControl);
  };
  return (
    <div className="container border border-1 border-danger">
      <h1 className="text-primary text-center">Income Details</h1>
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
              <label htmlFor="id">Income Name</label>
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
                name={"desc"}
                value={formControl.desc}
                onChange={processInput}
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Income Description</label>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-floating mb-3">
              <input
                required
                name={"date"}
                type={"date"}
                value={formControl.date}
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
                name={"category"}
                id="incomeCategory"
                class="form-control form-select"
              >
                {props.incomeCategory.map((e) => {
                  return (
                    <option value={e._id} key={e._id}>
                      {e.name}
                    </option>
                  );
                })}
              </select>
              <label for="floatingTextarea">Income Category</label>
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
    incomeCategory: state.incomeCategory,
  };
};

export default connect(mapStateToProps, null)(AddIncome);
