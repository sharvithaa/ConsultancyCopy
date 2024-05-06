import React from "react";
import Header from "./Header";
import Content from './Content';
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";
import Footer from "./Footer";
const Home=()=>{
    return(
        <div>
            <Header/>
            <Content/>
            <section id="about"><About/></section>
            <section id="products"><Product/></section>
            <section id="contact"><Contact/></section>
            <Footer/>
        </div>
    )
}
export default Home;