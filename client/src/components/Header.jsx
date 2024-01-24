import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"
import { Link } from "react-router-dom"

export default function Header(){

    const {myName, signOut} = React.useContext(ApiContext)
    
    console.log(myName)

    return(
        <>
            <div className="headerBody">
            <div className="headerLeft">
                <h1 >Your Top Headlines Here</h1>
            </div>
            <div className="headerRight">
                <h1 >Welcome, {myName.firstName}</h1>
                <Link className="links" onClick={signOut} to="/">Sign Out</Link>
            </div>
            </div>
        </>
    )
}