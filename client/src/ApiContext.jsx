import React from 'react'
import axios from 'axios'


const ApiContext = React.createContext()


 function ApiContextProvider(props){
    const initInputs = {
        firstName: localStorage.getItem('user') || "",
        updateName: localStorage.getItem('user')? false : true
    }
const [apiData, setApiData] = React.useState(localStorage.getItem('userStories')? JSON.parse(localStorage.getItem('userStories')): [])

const [myFilters, setMyFilters] = React.useState(localStorage.getItem('filters')? JSON.parse(localStorage.getItem('filters')): [])


const [myName, setMyName] = React.useState( initInputs)

const [displayNews, setDisplayNews] = React.useState(localStorage.getItem('userStories')? true : false)
    
    
function handleNameChange(event){
    const {name, value} = event.target

    setMyName(prevState => {
        return{
            ...prevState,
            [name]: value
        }
    })
}

function updateNameDisplay(event){
    event.preventDefault()
    localStorage.setItem('user', myName.firstName)
    setMyName(prevState => {
        return{
            ...prevState,
            updateName: false
        }
    })
   
}

function loadInputs(filter){
    
    const toArr = filter.split(" ")
        console.log(toArr)
    axios.post("/api/getNews" , toArr)
        .then(res => setApiData(prevState => {
            localStorage.setItem("userStories", JSON.stringify(res.data))
            return res.data
        }), renderNews())
        .catch(err => console.log(err.response.data.message))

        localStorage.setItem('filters', JSON.stringify(toArr))
    
}

function renderNews(){
    setDisplayNews(prevState => !prevState)
}

console.log(typeof(myName.updateName))

console.log(apiData)

return(
    <ApiContext.Provider value={{
        apiData: apiData,
        updateNameDisplay,
        handleNameChange,
        myName,
        loadInputs,
        myFilters,
        renderNews,
        displayNews
    }}>{props.children} </ApiContext.Provider>
)
}

export {ApiContext, ApiContextProvider}