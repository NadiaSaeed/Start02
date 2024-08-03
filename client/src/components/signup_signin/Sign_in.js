import React, { useState } from 'react'
import "./signup.css";
import { NavLink } from "react-router-dom";
 
function Sign_in() {
    const [logdata, setData] = useState({
        email: "",
        password: ""
    });   
        // console.log(data);

    const adddata = (e) => {
            const { name, value } = e.target;
            // console.log(name, value);
    
            setData(() => {
                return {
                    ...logdata,
                    [name]: value
                }
            })
    };
  return (
    <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form>
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                            onChange={adddata}
                            value={logdata.email}
                            name="email" id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" 
                            onChange={adddata}
                            value={logdata.password}
                            name="password" id="password" placeholder="At least 6 characters"/>
                        </div>
                        <button type="submit" className="signin_btn" >Continue</button>
                    </form>
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <NavLink to="/register"><button> Create your Amazon Account</button></NavLink>
                </div>
            </div>

        </section>
  )
}

export default Sign_in
