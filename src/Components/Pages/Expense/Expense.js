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
                        {props.expense.length === 0 ? 
                        (<span className='text-center text-danger'>Sorry There exists no Expense yet. Please add</span>):(
                            props.expense.map((e) => {
                                return (
                                    <tr>
                                        <th scope="row">2</th>
                                        <td className="">
                                            <div className="border border-danger">
                                                <p>
                                                    <span  style={{display:"block",textAlign:"center"}}>{e.expenseDate.split("T")[0]}</span>
                                                    <br />
                                                    <b>Name: </b>{e.name}
                                                    <br />
                                                    <b>Description: </b>{e.description}
                                                    <br />
                                                    <b>Category: </b>{e.expenseCategory.name}
                                                </p>
                                            </div>
                                            <div className="border border-primary text-danger">
                                                <p style={{textAlign:"right"}}>{e.amount}</p>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
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
