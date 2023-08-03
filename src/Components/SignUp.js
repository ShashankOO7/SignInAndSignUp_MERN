import React, { useRef } from "react";
import style from "./style.module.css"
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SignUp=()=>{

    let navigate = useNavigate();

    let firstName = useRef(null)
    let lastName = useRef(null)
    let email = useRef(null)
    let password = useRef(null)
    let confirmPassword = useRef(null)

    let handleSubmit = (event) => {
        event.preventDefault(); //prevents the page from reloading
        let data = {
        firstName : firstName.current.value,
        lastName : lastName.current.value,
        email : email.current.value,
        password : password.current.value,
        confirmPassword : confirmPassword.current.value
        }
        
        if(firstName && lastName && email && (password = confirmPassword))
        {
            axios.post('http://localhost:4000/signup', data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
            })
        }
        else
        {
            alert('Invalid Credentials')
        }
        console.log(data)
      }

    return(
        <div className={style.main}>
        <div className={style.block}>
            <form action="" onSubmit={handleSubmit} method="POST">
            <h1 className={style.color}>Sign Up</h1><br/>
                {/* <label htmlFor="">First Name:</label> */}
                <input type="text" name="firstname" placeholder="Enter First Name" ref={firstName}/><br/><br/>
                {/* <label htmlFor="">Last Name:</label> */}
                <input type="text" name="lastname" placeholder="Enter Last Name" ref={lastName}/><br/><br/>
                {/* <label htmlFor="">Email Address:</label> */}
                <input type="email" name="email" placeholder="Enter Email Address" ref={email}/><br /><br />
                {/* <label htmlFor="">Password:</label> */}
                <input type="password" name="password" placeholder="Enter Password" ref={password} /><br /><br />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" ref={confirmPassword}/><br /><br />
                <button className='btn btn-primary'>Submit</button><br />
                <p className={style.color}>Already have an account? <Link to="/">Sign In</Link></p>
            </form>
        </div>
        </div>
    )
}
export default SignUp