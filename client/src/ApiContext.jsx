import React from 'react'
import axios from 'axios'


const ApiContext = React.createContext()


 function ApiContextProvider(props){
    const initInputs = {
        firstName: localStorage.getItem('user') || "",
        updateName: localStorage.getItem('user')? false : true
    }

    const creds ={
        username: "",
        password: "",
        err: ""
    }
const [apiData, setApiData] = React.useState(localStorage.getItem('userStories')? JSON.parse(localStorage.getItem('userStories')): [])

const [myFilters, setMyFilters] = React.useState(localStorage.getItem('filters')? JSON.parse(localStorage.getItem('filters')): [])


const [myName, setMyName] = React.useState( initInputs)

const [displayNews, setDisplayNews] = React.useState(localStorage.getItem('userStories')? true : false)

const [loginUser, setLoginUser] = React.useState(creds)

const [authUser, setAuthUser] = React.useState({
    token: localStorage.getItem("token")? localStorage.getItem('token'): ""
}) 
    
    
function handleNameChange(event){
    const {name, value} = event.target

    setMyName(prevState => {
        return{
            ...prevState,
            [name]: value
        }
    })
}

function handleChange(event){
    const {name, value} = event.target
    if(name === "username" || "password"){
        setLoginUser(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }
}

function signOn(event){
    event.preventDefault()
    axios.post('/api/login', loginUser)
        .then(res => setAuthUser(prevState => {
            localStorage.setItem("token", res.data.token)
            return {
                ...prevState,
                token: res.data.token
            }
        }))
        .catch(err => setLoginUser(prevState=> {
            return{
                ...prevState,
                err: err.respone.data.message
            }
        }))
}

function signOut(){
    localStorage.removeItem('token')
    setAuthUser(prevState => {
        return{
            ...prevState,
            token: ""
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

function refreshPage(){
    const loadData = JSON.parse(localStorage.getItem('filters'))
    let saveData = []
    axios.post('/api/getNews', loadData )
        .then(res => setApiData(prevState => {
            localStorage.setItem('userStories', JSON.stringify(res.data))
            return res.data
        }))

       
}


function renderNews(){
    setDisplayNews(prevState => !prevState)
}


return(
    <ApiContext.Provider value={{
        apiData: apiData,
        updateNameDisplay,
        handleNameChange,
        myName,
        loadInputs,
        myFilters,
        renderNews,
        displayNews,
        authUser,
        loginUser,
        handleChange,
        signOn,
        signOut,
        refreshPage
    }}>{props.children} </ApiContext.Provider>
)
}

export {ApiContext, ApiContextProvider}