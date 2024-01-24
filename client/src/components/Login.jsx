import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"

export default function Login(){

    const {handleChange, loginUser, signOn} = React.useContext(ApiContext)

   const windowHeight = window.innerHeight
   document.body.style.backgroundColor = "#386270"

    return(<>
        <div className="homeBody">
            
            <div className="loginContainer" style={{position:"relative", top: windowHeight / 2}}>
                <h2 style={{color:"whitesmoke"}}>Please log into your account to continue.</h2>
            <form className="loginForm" onSubmit={signOn}>
          <input className="loginInput" type="text" name="username" placeholder="username" onChange={handleChange} value={loginUser.firstName}></input>
          <input className="loginInput" type="password" name="password" placeholder="password" onChange={handleChange} value={loginUser.password}></input>
          <button className="loginButton">Login</button>
          </form>
          </div>
        </div>
    </>)
}