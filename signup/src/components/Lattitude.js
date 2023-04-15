import React, { useState,useEffect } from 'react'

export default function Lattitude() {
    const initialValues={fullname:"",email:"",password:"",confirmpassword:""}
    const [FormValues, setFormValues] = useState(initialValues)
    const [FormErrors, setFormErrors] = useState(initialValues)
    const [IsSubmit, setIsSubmit] = useState(false)

    const handleChange=(e)=>{
       
const{name,value}=e.target;
setFormValues({...FormValues,[name]:value});
console.log(FormValues)
    }
const handleSubmit=(e)=>{
e.preventDefault();
setFormErrors(validate(FormValues));
setIsSubmit(true)
}
useEffect(()=>{
    console.log(FormErrors);
if(Object.keys(FormErrors).length===0 && IsSubmit)
{
    console.log(FormValues);
}},[FormErrors])
const validate=(values)=>{
const errors={};
const regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!values.fullname){
    errors.fullname="fullname is required" 
}
if(!values.email){
    errors.email="email is required" 
}else if(!regex.test(values.email)){
    errors.email="this is not valid email format"
}
if(!values.password){
    errors.password="password is required" 
}else if(values.password.length<4){
    errors.password="password should be more than 4 charecters"
}
if(!values.confirmpassword){
    errors.confirmpassword="confirmpassword the password" 
}
return  errors;
}
  return (
    <div className='container'>
        {Object.keys(FormErrors).length===0 && IsSubmit? (<div className='ui message success'>signed in successfully</div>):( <pre>{JSON.stringify(FormValues,undefined,2)}</pre>)}
       
   <form onSubmit={handleSubmit}>
    <h1>Sign Up</h1>
  <label htmlFor="fname">Full name:</label><br></br>
  <input type="text" id="fullname" name="fullname" value={FormValues.fullname}onChange={handleChange} /> <p>{FormErrors.fullname}</p><br></br><br></br>
  <label htmlFor="lname">Email:</label><br></br>
  <input type="text" id="email" name="email" value={FormValues.email}onChange={handleChange}/><p>{FormErrors.email}</p><br></br><br></br>
  <label htmlFor="lname">Password:</label><br></br>
  <input type="text" id="password" name="password"value={FormValues.password}onChange={handleChange} /><p>{FormErrors.password}</p><br></br><br></br>
  <label htmlFor="lname">Confirm Password:</label><br></br>
  <input type="text" id="confirmpassword" name="confirmpassword"value={FormValues.confirmpassword}onChange={handleChange} /><p>{FormErrors.confirmpassword}</p><br></br><br></br>
  
  <input type="submit" value="Sign Up"/>
</form>
</div>

    
  )
}
