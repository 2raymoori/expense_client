import React from 'react'
import {connect} from "react-redux";

const Expense = (props) => {
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
                        {props.expense.map((e) => {
                            return (
                                <tr>
                                    <th scope="row">2</th>
                                    <td className="d-flex align-items-center justify-content-between">
                                        <div className="border border-danger">
                                            <p>
                                                {e.expenseDate.split("T")[0]}
                                                <br />
                                                {e.name}
                                                <br />
                                                {e.description}
                                                <br />
                                                {e.expenseCategory.name}
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
        expense: state.expense,
    };
};
export default connect(mapStateToProps, null)(Expense);
