import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"

export default function Header(){

    const {myName} = React.useContext(ApiContext)
    
    console.log(myName)

    return(
        <>
            <div className="headerBody">
            <div className="headerLeft">
                <h1 >Your Top Headlines Here</h1>
            </div>
            <div className="headerRight">
                <h1 >Welcome, {myName.firstName}</h1>
            </div>
            </div>
        </>
    )
}