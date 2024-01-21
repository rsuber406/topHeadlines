import React from "react"
import { ApiContext } from "../ApiContext"
import "../index.css"
import NewsTemplate from "./NewsTemplate.jsx"

export default function YourNews(){
    const {loadInputs, myFilters, displayNews, apiData, renderNews} = React.useContext(ApiContext)
    const [myNews, setMyNews] = React.useState("")
    const [usedSaved, setUsedSaved] = React.useState(localStorage.getItem('filters')? true : false)


    function handleKeywords (event){
        const {value} = event.target
        setMyNews(prevState => value)
    }
    
    const windowSize = window.innerHeight

    function submitNews(event){
        event.preventDefault()
        setUsedSaved(true)
        loadInputs(myNews)
    }
    const displayedFilter = myFilters.map((filter)=>{
        return(
       <h2>{filter} </h2>
    )})
    function changeFilter(){
        setUsedSaved(prevState => false)
        renderNews()
    }

    function fetchNews(){
        const toString = myFilters.join(" ")
        loadInputs(toString)
    }

    const yourNews = apiData.map((news)=>{
        return(
            <NewsTemplate title={news.title} source={news.host} key={news.title} />
        )
    })

    function cancelChange(){
        setUsedSaved(true)
        renderNews()
    }
   
    return(
        <>
       {!usedSaved && <div style={{position:"relative", top: windowSize / 2}} className="newsSearch">
            
            <h2>Please enter your keywords for your news search here</h2>
            <form className="nameForm" onSubmit={submitNews}>
                <textarea style={{width:"200px", height:"100px"}} type="text" onChange={handleKeywords} value={myNews} ></textarea>
                <div className="nameSubmit">
                <button className="nameButton" >Submit</button><button className="nameButton" onClick={cancelChange}>Cancel Change</button>
                </div>
            </form>
        </div>}
        {usedSaved && !displayNews && <div style={{position: "relative", top:windowSize /3}} className="newsSearch">
                <h1>These are the filters you have applied</h1>
                    {displayedFilter}
                   <div>
                   <button className="nameButton" onClick={fetchNews}>Fetch News</button> <button className="nameButton" onClick={changeFilter}>Change Filters</button>
                   </div>
            </div>}

            {displayNews && 
            <div className="newsContainer">
                <button onClick={changeFilter} className="changeFilters">Change Filters</button>
            <div className="renderedNews">
                {yourNews}
                </div>
                
                </div>}
        </>
    )

}