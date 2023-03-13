import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Dashboard = (props) => {
  const [dashboardData,setDashboardData] = useState({});
  useEffect(()=>{
    const tmpReportingObj = {};
  for(const item of props.income){
    const curCategory = item.incomeCategory.name;
    const transactionDate = item.createdAt.split('T')[0]
    if(tmpReportingObj[curCategory] === undefined){
      tmpReportingObj[curCategory] = {[transactionDate]:{amount:item.amount}}
    }else{
      if(tmpReportingObj[curCategory][transactionDate] === undefined) {
        tmpReportingObj[curCategory][transactionDate] =  {amount: item.amount}
      }
      else{
        console.log("false....")
        let updateAmount = item.amount + tmpReportingObj[curCategory][transactionDate].amount;
        tmpReportingObj[curCategory][transactionDate] =  {amount: updateAmount}
      }

    }
  }
  console.log(tmpReportingObj)
  },[]);
  return (
    <>
      {
props.user.status === 0 ? (<Navigate replace to="/" />):(
  <div>
    Dashboard View {props.user.status}
  </div>
  )
      }
    </>

  )
}
const mapStatetoProps = state =>{
  return {
    user:state.user,
    income : state.income,
    expense : state.expense
  }
}
export default connect(mapStatetoProps,null) (Dashboard);

