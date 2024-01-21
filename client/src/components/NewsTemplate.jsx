import React from 'react'
import "../index.css"

export default function NewsTemplate(props){
    const {title, source} = props
    console.log(source)

    return(<>
        <div key={title} className='newsTemplate'>
            <h1>{title} </h1>
            <h2>Source: {source} </h2>
            
        </div>
    </>)
}