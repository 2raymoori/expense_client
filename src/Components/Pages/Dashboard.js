import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Dashboard = (props) => {
  const [dashboardData,setDashboardData] = useState(props.income);
  const [dashboardExpenseData,setDashboardExpenseData] = useState(props.expense);
  const [filteredValue,setFilteredValue] = useState({month:0,year:0,category:0});
  const [option2,setOption2] = useState( {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false ,
        type: 'pie'
    },
    title: {
        text: '',
        align: 'center'
    },
    tooltip: {
        pointFormat: '{series.name}:: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                // connectorColor: 'gold'
            }
        }
    },
    series: [{
        name: 'LOT Share',
        data: [
        ]
    }]
  })
  const processForm = (e)=>{
    e.preventDefault();
    const {year,month,category} = filteredValue;
    let data = [];
    console.log(`Filtered Value ==>> ${year} :: ${category} :: ${month}`);
    let dataToProcess ;
    if(category == 1){
       dataToProcess = dashboardData[year][month];
    }else{
      dataToProcess = dashboardExpenseData[year][month];
      console.log(dashboardExpenseData);


    }
    const series = [{
        name: 'LOT Share',
        data: []
    }]
    for(const curVal of Object.keys(dataToProcess)){
        const tmpData = {};
        console.log(curVal);
        const res = dataToProcess[curVal].reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
          }, 0);
          console.log(res);
          tmpData["name"]=curVal;
          tmpData["y"] = Math.abs(res);
          data.push(tmpData);
    }
    series[0]["data"] = data;
    console.log("######################################");
   console.log(option2);
    setOption2({...option2,series:series});
    console.log("######################################");
 

}
  useEffect(()=>{
    console.log(props.income);
    const tmpIncomeReportingObj = {};
    const tmpExpenseReportingObj = {};
  for(const item of props.income){
    const curCategory = item.incomeCategory.name;
    const transactionDate = item.createdAt.split('T')[0];
    const year = transactionDate.split("-")[0];
    const month = transactionDate.split("-")[1];

    if(tmpIncomeReportingObj[year] === undefined){
      //tmpReportingObj[year] = {[transactionDate]:{amount:item.amount}}
      tmpIncomeReportingObj[year] = {[month]:{[curCategory]:[item.amount]}};
    }else{
      console.log("sdfsd")
      if(tmpIncomeReportingObj[year][month] === undefined) {
        tmpIncomeReportingObj[year][month]= {[curCategory]:[item.amount]};//=[item.amount];// =  {amount: item.amount}
      }
      else{
        if(tmpIncomeReportingObj[year][month][curCategory] === undefined){
            tmpIncomeReportingObj[year][month][curCategory] = [item.amount];
        }
        else{
          tmpIncomeReportingObj[year][month][curCategory].push(item.amount);
        }
        // let updateAmount = item.amount + tmpReportingObj[curCategory][transactionDate].amount;
        // tmpReportingObj[curCategory][transactionDate] =  {amount: updateAmount}
      }
    }
  }

  for(const item of props.expense){
    const curCategory = item.expenseCategory.name;
    // console.log(curCategory);
    const transactionDate = item.expenseDate.split('T')[0];
    const year = transactionDate.split("-")[0];
    const month = transactionDate.split("-")[1];

    if(tmpExpenseReportingObj[year] === undefined){
      //tmpReportingObj[year] = {[transactionDate]:{amount:item.amount}}
      tmpExpenseReportingObj[year] = {[month]:{[curCategory]:[item.amount]}};
    }
    else{
    //   console.log("sdfsd")
      if(tmpExpenseReportingObj[year][month] === undefined) {
        tmpExpenseReportingObj[year][month]={[curCategory]:[item.amount]};// =  {amount: item.amount}
      }
      else{
        if(tmpExpenseReportingObj[year][month][curCategory] === undefined){
            tmpExpenseReportingObj[year][month][curCategory] = [item.amount];
        }
        else{
          tmpExpenseReportingObj[year][month][curCategory].push(item.amount);
        }
    //     // let updateAmount = item.amount + tmpReportingObj[curCategory][transactionDate].amount;
    //     // tmpReportingObj[curCategory][transactionDate] =  {amount: updateAmount}
      }
    }
  }
  setDashboardExpenseData(tmpExpenseReportingObj);
  console.log(Object.keys(tmpIncomeReportingObj))
  console.log(Object.values(tmpIncomeReportingObj))
  setDashboardData(tmpIncomeReportingObj);
  },[]);

  console.log(dashboardData);

const processSelect=(e)=>{
  setFilteredValue({...filteredValue,year:e.target.value})
}
const processSelectMonth=(e)=>{
  setFilteredValue({...filteredValue,month:e.target.value});
}
const processCategory = (e)=>{
  setFilteredValue({...filteredValue,category:e.target.value})
}
const monthList = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <>
      {
props.user.status === 0 ? (<Navigate replace to="/" />):(
  <div>

    <form onSubmit={processForm}>
        <select onChange={processSelect}>
            <option selected>Select Year</option>
            {
                Object.keys(dashboardData).map(e=><option value={`${e}`}>{e}</option>)
            }
        </select>

        <select onChange={processSelectMonth}>
            <option>
                Please select a month
            </option>
            {
                monthList.map(e=><option>{`0${e}`}</option>)
            }
        </select>
        <select onChange={processCategory}>
            <option selected>
                Please select a type
            </option>
          <option value="1">
            Income
          </option>
          <option value="2">
            Expense
          </option>
        </select>
        <input type="submit" />
    </form>
    {option2.series[0].data.length ===0 ? (<h1>Please use the form to populate the chart</h1>):(<HighchartsReact highcharts={Highcharts} options={option2} />)}
    
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

