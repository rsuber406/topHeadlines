import React from 'react'


const ApiContext = React.createContext()


 function ApiContextProvider(props){
  
const [apiData, setApiData] = React.useState([])
const [inputData, setInputData]= React.useState([])


return(
    <ApiContext.Provider value={{
        apiData: apiData,
        inputData: inputData
    }}>{props.children} </ApiContext.Provider>
)
}

export {ApiContext, ApiContextProvider}