import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../pages/Home/Navbar';
import Hero from '../pages/Home/Hero';
import Skills from '../pages/Home/Skills';
import Educational from '../pages/Home/Educational';
import Projects from '../pages/Home/Projects';
import Contactme from '../pages/Home/Contactme';
import Footer from '../pages/Home/Footer';
import About from '../pages/Home/About';

const rootlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Skills></Skills>
            <Educational></Educational>
            <Projects></Projects>
            <About></About>
            <Outlet></Outlet>
            <Contactme></Contactme>
            <Footer></Footer>
        </div>
    );
};

export default rootlayout;