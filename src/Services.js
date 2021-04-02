import React from 'react';
import "./index.css";

import Reactjs from "../src/images/React.jpg";
import Django from '../src/images/Django.png';
import Data from '../src/images/Data.jpg';
import { NavLink } from 'react-router-dom';


const Services = () => {
    return (
        <>
            <div className="service">
                <h1>services</h1>
            </div>
            <main class="grid">
                <article>
                    <img src={Reactjs} alt="Sample photo" />
                    <div class="text">
                        <h3>React Js</h3>
                        <p>I will build your Front-End website with on React Js.React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies </p>

                        <button>  <NavLink exact to='/Contact'>Contact Me</NavLink></button>
                    </div>
                </article>
                <article>
                    <img src={Django} alt="Sample photo" />
                    <div class="text">
                        <h3>Django</h3>
                        <p>I will build Your Back-End for your website with Django Python.Django is a Python-based free and open-source web framework that follows the model-template-views architectural pattern. Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel</p>
                        <button> <NavLink exact to='/Contact'>Contact Me</NavLink></button>

                    </div>
                </article>
                <article>
                    <img src={Data} alt="Sample photo" />
                    <div class="text">
                        <h3>Data Entry</h3>
                        <p>I will convert your PDF in CSV file and enter the data whatever you want ,i have an experience of 2 Years in data entry on Different Platform
                        Proficient typing and transcription.
                        Computer and technical skills (including software knowledge)
                        Organisational and time management abilities.
                            Administrative skills.</p>
                        <button><NavLink exact to='/Contact'>Contact Me</NavLink></button>

                    </div>
                </article>

            </main>

        </>
    );
}

export default Services;