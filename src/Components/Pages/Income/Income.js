import React from "react";
import { connect } from "react-redux";

const Income = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Category Name</th>
              </tr>
            </thead>
            <tbody>
              {props.income.map((e) => {
                return (
                  <tr>
                    <th scope="row">2</th>
                    <td className="d-flex align-items-center justify-content-between">
                      <div className="border border-danger">
                        <p>
                          {e.createdAt.split("T")[0]}
                          <br />
                          {e.name}
                          <br />
                          {e.description}
                          <br />
                          {e.incomeCategory.name}
                        </p>
                      </div>
                      <div className="border border-primary text-success">
                        <p>{e.amount}</p>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    income: state.income,
  };
};
export default connect(mapStateToProps, null)(Income);
