import React from "react";
import { Route, Switch, } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Services from "./Services";
import Navbar from './Navbar';


const Links =()=>{
    return(
        <>
        <Switch>
        <Route  exact path="/"  component={Main} />
        <Route  exact path="/Services"  component={Services} />
        <Route  exact path="/About"  component={About} />
        <Route  exact path="/Contact"  component={Contact} />
        </Switch>
        </>
    );
}

export default Links;