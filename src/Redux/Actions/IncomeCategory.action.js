import axios from "axios";
import { ADD_INCOME_CATEGORY, LOAD_INCOME_CATEGORY } from "../Constants/ActionTypes";
import { registerAlert } from "./AlertAction";
const token = localStorage.getItem('token');
export const addIncomeCategory = (catName)=>async (dispatch)=>{
    try {
        
        const body = JSON.stringify({
            catName
        });
        const config = {
            headers:{
                'Content-Type':'application/json',
                'user-auth-token':token
            }
        }
        const res = await axios.post('http://localhost:3001/api/incomecategory/add',body,config);
        console.log(res);
        if(res.status===200){
            dispatch({
                type:ADD_INCOME_CATEGORY,
                payload: res.data.msg
            })
            dispatch(registerAlert("Income Category Successfully added. ",'success'))
        }
        else{
            console.log("Err...")
            dispatch(registerAlert(res.data.msg,'danger'))
   
        }

    } catch (error) {
        
        dispatch(registerAlert("Sorry There exists an error. Please try again ",'danger'))
    }
}



export const loadIncomeCategory =()=>async (dispatch)=>{
    try {
        const config = {
            headers:{
                'Content-Type':'application/json',
                'user-auth-token':token
            }
        }
        const url = 'http://127.0.0.1:3001/api/incomecategory/all';
        const res = await axios(url,config);
        if(res.status === 200){
            dispatch({
                type:LOAD_INCOME_CATEGORY,
                payload:res.data.data
            })

        // console.log(res.data);
        }
    } catch (error) {
        
    }
}