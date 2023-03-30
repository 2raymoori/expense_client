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
                <th scope="col">Income List</th>
              </tr>
            </thead>
            <tbody>
              {props.income.length === 0 ? (<span>Sorry There exists no Income in the System. Please add one</span>):(props.income.map((e) => {
                return (
                  <tr>
                    <td className="">

                      <div className="border border-danger">
                        <p>
                        <span  style={{borderBottom:"solid 1px ", display:"block",textAlign:"center"}}>{e.createdAt.split("T")[0]}</span>
                          <br />
                          <b>Name: </b>{e.name}
                          <br />
                          <b>Description: </b>{e.description}
                          <br />
                          <b>Category: </b>{e.incomeCategory.name}
                        </p>
                      </div>
                      <div className="border border-primary text-success">
                        <p style={{textAlign:"right"}} >{e.amount}</p>
                      </div>
                    </td>
                  </tr>
                );
              }))}
              {}
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
