import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';

const Dashboard = (props) => {
  const [dashboardData,setDashboardData] = useState({});
  useEffect(()=>{
    const tmpReportingObj = {};
  for(const item of props.income){
    const curCategory = item.incomeCategory.name;
    const transactionDate = item.createdAt.split('T')[0];
    const year = transactionDate.split("-")[0];
    const month = transactionDate.split("-")[1];

    if(tmpReportingObj[year] === undefined){
      //tmpReportingObj[year] = {[transactionDate]:{amount:item.amount}}
      tmpReportingObj[year] = {[month]:{[curCategory]:[item.amount]}};
    }else{
      console.log("sdfsd")
      if(tmpReportingObj[year][month] === undefined) {
        tmpReportingObj[year][month]=[item.amount];// =  {amount: item.amount}
      }
      else{
        if(tmpReportingObj[year][month][curCategory] === undefined){
            tmpReportingObj[year][month][curCategory] = [item.amount];
        }
        else{
          tmpReportingObj[year][month][curCategory].push(item.amount);
        }
        // let updateAmount = item.amount + tmpReportingObj[curCategory][transactionDate].amount;
        // tmpReportingObj[curCategory][transactionDate] =  {amount: updateAmount}
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

