import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import "./index.css";
import About from "./About";
import Contact from "./Contact";
import Services from './Services';

import { Route, Switch, } from "react-router";

const Body=()=>{
    return(
        <>
        
        <Navbar />
        
        
        <Switch>
        <Route  exact path="/"  component={Main} />
        <Route  exact path="/Services"  component={Services} />
        <Route  exact path="/About"  component={About} />
        <Route  exact path="/Contact"  component={Contact} />
        </Switch>
        </>
    );

    
   
}

export default Body;