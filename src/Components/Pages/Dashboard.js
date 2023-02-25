import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Dashboard = (props) => {
  return (
    <>
      {
props.user.status === 0 ? (<Navigate replace to="/" />):(
  <div>
    Dashboard View
  </div>
  )
      }
    </>
    
  )
}
const mapStatetoProps = state =>{
  return {
    user:state.user
  }
}
export default connect(mapStatetoProps,null) (Dashboard);

