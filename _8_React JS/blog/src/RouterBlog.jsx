import React from 'react'
import HeaderFunction from './compontents/HeaderFunction'
import FooterFunction from './compontents/FooterFunction'
import MainFunction from "./compontents/MainFunction";

// Router
import { Navigate, Route, Routes } from "react-router-dom";

 function RouterBlog() {
  return (
    <React.Fragment>

<HeaderFunction name="Hamit Mızrak" />
<div className="container">
  <Routes>
    <Route path={"/"} elementName={<MainFunction />} />
    <Route path={"/index"} elementName={<MainFunction />} />
    <Route path={"*"} elementName={<Navigate to={"/"} />} />
  </Routes>
</div>

<MainFunction/>

<FooterFunction/>
        
    </React.Fragment>
  )
}

export default RouterBlog