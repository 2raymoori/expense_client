import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addIncomeCategory } from "../../../Redux/Actions/IncomeCategory.action";
import Alert from "../../Alert/Alert";

const IncomeCategory = (props) => {
  const [formData, setFormData] = useState("");
  const onChange = (e) => {
    setFormData(e.target.value);
  };
  const processForm = (e) => {
    e.preventDefault();
    // const curUserId = props.userState.user._id ;
    // console.log(`USER ID: ${curUserId}`)
    props.addExpense(formData);
    console.log(formData);
    setFormData("");
  };
  return (
    <div className="container border border-primary">
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        class="btn btn-lg btn-block btn-outline-primary"
        data-toggle="modal"
        data-target="#modalForm"
      >
        Add Income Category
      </button>

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="modalForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Add Income Category
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={processForm}>
              <div class="modal-body">
                <Alert />
                <div className="row">
                  <div className="col-lg-12 form-group">
                    <div className="form-floating mb-3">
                      <input
                        name="catName"
                        value={formData}
                        onChange={onChange}
                        type="text"
                        className="form-control"
                        placeholder="catName"
                      />
                      <label>Category Name:</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" class="btn btn-outline-primary">
                  Add Expense Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {
props.incomeCatState.map((e) => {
  return (
    <tr>
      <th scope="row">2</th>
      <td>{e.name}</td>
      <td>
        <button className="btn btn-outline-primary margin-right-21">
          Edit
        </button>
        <button className="btn btn-outline-danger">Delete</button>
      </td>
    </tr>
  );
})
            }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userState: state.user,
    incomeCatState: state.incomeCategory,
  };
};
const mapDispatcherToProps = (d) => {
  return {
    addExpense: (catName) => {
      d(addIncomeCategory(catName));
    },
  };
};
export default connect(mapStateToProps, mapDispatcherToProps)(IncomeCategory);
