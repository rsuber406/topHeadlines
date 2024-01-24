import React from 'react'
import "../index.css"
import Header from './Header.jsx'
import YourInfoHere from './YourInfoHere.jsx'
import { ApiContext } from '../ApiContext.jsx'
import YourNews from './YourNews.jsx'

export default function Home(){

    const { myName} = React.useContext(ApiContext)
   
    

    

    return(
        <>
       <div className='homeBody'>
      
      {myName.updateName &&  <div className='nameInput'>
            <h1>Please input your name below</h1>
            <YourInfoHere />
        </div>}
        <YourNews />
        
       </div>
        </>
    )
}