import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { addAlert } from '../../Redux/Actions/AlertAction'
import { signupUser } from '../../Redux/Actions/User.action'
import Alert from '../Alert/Alert'
import InputField from '../GenericComponents/InputField'

const Signup = (props) => {
    const [formInput,setFormInput] = useState({fName:"",lName:"",email:"",password:"",confirmPassword:""})
    const processInput = (ref)=>{
        setFormInput({...formInput,[ref.target.name]:ref.target.value})

    }

    const submitForm = (e)=>{
        
        e.preventDefault();
        props.signUp(formInput);
        console.log(props.user.status)

    }
  return (
    <>

    {props.user.status === 1 ? (<Navigate replace to="/dashboard" />):(
 <div className="signupLogin">

 <div className='formContainer'>
   {props.user.status}
   <Alert />
   <form onSubmit={submitForm}>
   <div className='row'>
       <h3 className='text-dark'>START FOR FREE</h3>
       <h1 className='text-dark'>Create new account.</h1>
       <p className='text-dark'>Already A Member? <Link to="/">Login in</Link></p>
   </div>
   <div className='row'>
       <div className='col-lg-6 form-group'>
           <InputField value={formInput.fName} name="fName" processData = {processInput} type="text" label="First Name" id="floatingFName" placeholder="First Name" />
       </div>
       <div className='col-lg-6'>
           <InputField value={formInput.lName} name="lName" processData = {processInput} type="text" label="Last Name" id="floatingLName" placeholder="Last Name" />

       </div>
   </div>
   <div className='row'>
       <div className='col-lg-12 form-group'>
           <InputField value={formInput.email} name="email" processData = {processInput} type="email" label="Email" id="floatingEmail" placeholder="Email" />
       </div>
   </div>
   <div className='row'>
       <div className='col-lg-12 form-group'>
           <InputField value={formInput.password} name="password" processData = {processInput} type="password" label="Password" id="floatingPassword" placeholder="Password" />
       </div>
   </div>
   <div className='row'>
       <div className='col-lg-12 form-group'>
           <InputField  value={formInput.confirmPassword} name="confirmPassword" processData = {processInput} type="password" label="Confirm Password" id="floatingConfirmPassword" placeholder="Confirm Password" />
       </div>
   </div>
   <div className='row'>
       <div className='col-lg-12 form-group'>
           <button className='form-control btn btn-dark'>SignUP</button>
       </div>
   </div>

   </form>
 </div>
</div>
    )}
    </>

   
  )
}
const mapStateToProps = state=>{
    return {
        user:state.user
    }
}
const mapActionToProps = dispatch =>{
    return {
        signUp :(input)=>{dispatch(signupUser(input))},

    }
}
export default connect(mapStateToProps,mapActionToProps)(Signup)
