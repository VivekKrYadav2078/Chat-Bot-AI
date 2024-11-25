import Home from "./components/Home"
import Chat from "./components/Chat"
import Bio from "./components/Bio"
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import { useState } from "react";
import "./App.css";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";
import React from 'react'

function App() {
  const router=createBrowserRouter([
    
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/chat",
      element:<Chat/>
    },
    {
      path:"/bio",
      element:<Bio/>
    }
  ])
 return(
  <>
  
  <RouterProvider router={router}/>
  </>
 )
}
export default App