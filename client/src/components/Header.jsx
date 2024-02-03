import React from "react"
import "../index.css"
import { ApiContext } from "../ApiContext"
import { Link } from "react-router-dom"

export default function Header(){

    const {myName, signOut} = React.useContext(ApiContext)

    const [showMenu, setShowMenu] = React.useState(false)

    function displayMenu(){
        setShowMenu(prevState => !prevState)
    }
    
    console.log(myName)

    const windowWidth = window.innerWidth

    if(windowWidth > 1100){
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
    )}
    else {
        return(
        <>
        <div className="headerBody">
        <div className="headerLeft">
            <h1 >Your Top Headlines Here</h1>
        </div>
        <div className="headerRight">
            <div style={{display:'flex', flexDirection:'column'}}>
         { !showMenu?  <h2 onClick={displayMenu}>&#9776;</h2> :<h2 className="closeMenu" onClick={displayMenu}>&#88;</h2>}
         {showMenu && <div>
            <h2>Welcome, {myName.firstName}</h2>
            <Link className="links" onClick={signOut} to="/">Sign Out</Link>
            
            </div>}
            </div>
        </div>
        </div>
    </> 
    )}
}