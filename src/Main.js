import React from 'react';
import "./index.css";
import web from '../src/images/deve1.png';
import Contact from './Contact';
import {NavLink} from 'react-router-dom';



// const waseemPic= {waseem};


const Main = () => {
    return (
        <>
            <div className='main'>
                <div className='main-des'>
                    <h2>
                        Grow your business with <span className="mwk">MWK</span>
                    </h2>
                    <h4>we are the team of talented developer making websites   </h4>
                    
                    <button className="btn-1" href="" type="button">
                       <NavLink exact to="/Contact"> <h3>Get Started </h3> </NavLink>
                    </button>
                </div>
                
                <div className="image">
                    <img src={web} alt="Profile-Pic" className="image" />
                </div>
            </div>

        </>
    );
}

export default Main;