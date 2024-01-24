import React from "react"
import "../index.css"

export default function Login(){


   const windowHeight = window.innerHeight

    return(<>
        <div className="homeBody">
            <div className="loginContainer" style={{position:"relative", top: windowHeight / 2}}>
            <form className="loginForm">
          <input className="loginInput" type="text" name="username" placeholder="username"></input>
          <input className="loginInput" type="password" name="password" placeholder="password"></input>
          <button>Login</button>
          </form>
          </div>
        </div>
    </>)
}