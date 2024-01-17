import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"

export default function YourInfoHere(){
    const {updateNameDisplay, handleNameChange} = React.useContext(ApiContext)
   

  



    return(
        <>
        <div>
            <form className="nameForm">
                <input type="text" name="firstName" onChange={handleNameChange} placeholder="            Your Name"></input>
                <div className="nameSubmit">
                <button className="nameButton" onClick={updateNameDisplay}>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}