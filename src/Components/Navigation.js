import React from 'react'
import { connect } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div>
        {
            props.user.status === 1 ? 
            (
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid containerNav " >
                  <div className=''>
                  <Link className="navbar-brand" to="/dashboard">Navbar</Link>
                  </div>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse  items" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/dashboard">Home</Link>
                      </li>

                      <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Income
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/income/add">Add Income</Link></li>
                          <li><Link className="dropdown-item" to="/income">View Income</Link></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><Link className="dropdown-item" to="/incomecat">Income Category</Link></li>
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Expense
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><Link className="dropdown-item" to="/expense/add">Add Expense</Link></li>
                          <li><Link className="dropdown-item" to="/expense">View Expense</Link></li>
                          <li><hr className="dropdown-divider"/></li>
                          <li><Link className="dropdown-item" to="/expensecat">Expense Category</Link></li>
                          
                        </ul>
                      </li>

                      <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Reporting
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item nav-link" href="/">Monthly Expense</a></li>
                          <li><a className="dropdown-item nav-link" href="/">Daily Expense</a></li>
                          {/* <li><hr className="dropdown-divider"></li> */}
                          <li><a className="dropdown-item nav-link" href="/">Expense by Category</a></li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            ) : (<></>)
      }
    </div>
  )
}

const mapStateToProps = state=>{
    return {
        user:state.user
    }
}

export default connect(mapStateToProps,null) (Navigation);
