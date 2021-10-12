import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Body from "./Templates/Body";
import Footer from "./Templates/Footer";
import Header from "./Templates/Header";
import Login from "./Templates/Login/Login";


function Routers(){
    return(
        <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Body}></Route> 
               <Route path="/Footer" component={Footer}></Route> 
               <Route path="/Header" component={Header}></Route>
               <Route path="/Login" exact component={Login}></Route>  
            </Switch>
        </BrowserRouter>
    )
}
export default Routers;