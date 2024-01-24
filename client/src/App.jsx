import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Login from './components/Login.jsx'


export default function App(){


    return(
        <BrowserRouter>
   <Header />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
        </Routes>
        </BrowserRouter>
    )
}