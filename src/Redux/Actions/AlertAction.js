
const { ADD_ALERT, REMOVE_ALERT } = require("../Constants/AlertTypes");
const { v4: uuidv4 } = require('uuid');

const addAlert = (alertMsg,alertId,alertType='danger')=>{
    return {
        type:ADD_ALERT,
        payload:{msg:alertMsg,id:alertId,type:alertType}
    }
}


const removeAlert = (id)=>{
    console.log("REMOVING MY ALERT...!")
    return {
        type:REMOVE_ALERT,
        payload:{id}
    }
}
const registerAlert = (msg,alertType)=>{
    console.log("MST from sdfsdf. ")
    return (dispatch)=>{
        const id =uuidv4();
            dispatch(addAlert(msg,id,alertType));
        setTimeout(()=>{
            dispatch(removeAlert(id))
        },5000)
    }
}
module.exports = {
    registerAlert,removeAlert,addAlert
}