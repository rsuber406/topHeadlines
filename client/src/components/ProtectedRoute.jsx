import React from "react"
import { ApiContext } from "../ApiContext"
import { Navigate } from "react-router-dom"

export default function ProtectedRoute(props){
const {authUser} = React.useContext(ApiContext)

 return authUser.token? props.children : <Navigate to="/" />
}