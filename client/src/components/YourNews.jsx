import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"

export default function YourNews(){
    const {loadInputs, myFilters} = React.useContext(ApiContext)
    const [myNews, setMyNews] = React.useState("")
    const [usedSaved, setUsedSaved] = React.useState(localStorage.getItem('filters')? true : false)


    function handleKeywords (event){
        const {value} = event.target
        setMyNews(prevState => value)
    }
    
    const windowSize = window.innerHeight

    function submitNews(event){
        event.preventDefault()
        loadInputs(myNews)
    }
    const displayedFilter = myFilters.map((filter)=>{
        return(
       <h2>{filter} </h2>
    )})
    function changeFilter(){
        setUsedSaved(prevState => false)
    }

    function fetchNews(){
        const toString = myFilters.join(" ")
        loadInputs(toString)
    }
   
    return(
        <>
       {!usedSaved && <div style={{position:"relative", top: windowSize / 2}} className="newsSearch">
            
            <h2>Please enter your keywords for your news search here</h2>
            <form className="nameForm" onSubmit={submitNews}>
                <textarea style={{width:"200px", height:"100px"}} type="text" onChange={handleKeywords} value={myNews} ></textarea>
                <div className="nameSubmit">
                <button className="nameButton" >Submit</button>
                </div>
            </form>
        </div>}
        {usedSaved && <div style={{position: "relative", top:windowSize /3}} className="newsSearch">
                <h1>These are the filters you have applied</h1>
                    {displayedFilter}
                   <div>
                   <button className="nameButton" onClick={fetchNews}>Fetch News</button> <button className="nameButton" onClick={changeFilter}>Change Filters</button>
                   </div>
            </div>}
        </>
    )

}