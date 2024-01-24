import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import Login from './components/Login.jsx'
import { ApiContext } from './ApiContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

export default function App(){
    const {authUser} = React.useContext(ApiContext)
    
    return(
        <BrowserRouter>
   <Header />
        <Routes>
            <Route path='/' element={ authUser.token? <Navigate to="/home" />: <Login />} />
            <Route path='/home' element={<ProtectedRoute > <Home /></ProtectedRoute>} />
        </Routes>
        </BrowserRouter>
    )
}