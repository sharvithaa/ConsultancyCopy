import React from "react";
import Header from "./Header";
import Content from './Content';
import About from "./About";
import Product from "./Product";
import Login from "./Login";
import Contact from "./Contact";
import {Link} from 'react-router-dom'
import Footer from "./Footer";

const Home=()=>{
    return(
        <div>
            <Header/>
            <Content/>
            <About/>
            <Product/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default Home;