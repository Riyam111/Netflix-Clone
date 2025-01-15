import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
const Login = () => {
  const[Signstate, setSignstate]=useState("Sign in")
  const[name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const[lodding,setLoding]=useState(false);
  const user_auth=async(e)=>{
    setLoding(true)
    e.preventDefault();
    if(Signstate==="Sign in"){
      await login(email,password);
    }
    else{
      await signup(name,email,password);
    }
    setLoding(false)
  }
  return (
    lodding?<div className="lodding-spinner">
      <img src={netflix_spinner} alt="" />
    </div>
    :<div className='login'>
      <img src={logo} alt="" className='logo-icon' />
      <div className="login-form">
        <h1>{Signstate}</h1>
        <form >
          {Signstate=="Sign up"?
          <input value={name} onChange={(e)=>{ setname(e.target.value) }} type="text" placeholder='Full Name'/>:<></>}

          <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="Email" placeholder='Email'/>
         <input value={password} onChange={(e)=>{setpassword(e.target.value)}}type="password" placeholder='Password'/>

         <button onClick={user_auth} type='submit'>{Signstate}</button>
         <div className="help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>
          <p>Need help</p>
         </div>  
        </form>
        <div className="form-switch">
          {Signstate=="Sign in"?
          <p>New to netflix?<span onClick={()=>{setSignstate("Sign up")}}>Sign up</span></p>:
          <p>Already have an account?<span onClick={()=>{setSignstate("Sign in")}}>Sign in</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
