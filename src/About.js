import React from 'react';
import "./index.css";
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom'
import waseem from '../src/images/wasim.png';

const About = () => {
    return (
        <>
        <div className="about-tag">
            <h1>About Me</h1>
            </div>


            <main class="main-about">
                <article>
                    <div className="profile-image">
                        <img src={waseem} alt="Sample photo" />
                    </div>
                    <div class="about-content">
                <hr></hr><h2>My Name is</h2>
                        <h3>Muhammad Waseem Khan</h3>
                        <p>And i am a Web Developer and Data Entry Operator well, its now been my profession for more than a decade.I've the privilege to work on some amazing projects in the past several years, and now i am excited what i'm developing now, and i am sharing what i am learning.</p>

                        <button className="btn-about">  <NavLink exact to='/Contact'>Contact</NavLink></button>
                    </div>
                </article>
            </main>

        </>
    );
}

export default About;