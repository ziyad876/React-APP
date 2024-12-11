import React, { useState } from "react";
import Navbar from "./Topbar";
import Slide from "./SlideImage";
import Form from "./form";
import Footer from "./Footer";

function MainBody(){

    const [isBlick, setBlick] = useState(true)
    setTimeout(()=>{
        setBlick(false);
    },5000)


    return <div>
        {isBlick ? <img className="blinking RenderLogo" srcSet="/asssets/img.png" alt="Real Estate Logo" /> : <div>
            <Navbar/>
            <div id="home" className="HomePage col-lg-12 col-12 col-md-12 col-sm-12">
            </div>
            <div id="about" className="AboutPage col-lg-12 col-12 col-md-12 col-sm-12">
                <div className="col-lg-6 col-12 col-md-5 col-sm-12">
                    <img alt="" src="https://ziyad876.github.io/React-APP/asssets/realestate.jpeg"  className= "moving-logo col-lg-12 col-12 col-md-12 col-sm-12 moving-image"/>
                </div>
                <div className="AboutTwo col-lg-6 col-12 col-md-6 col-sm-12">
                    <h3>The calm waters<br/> beckon you to<br/>  discover luxury living <br/> in Chennai</h3>
                    <p>In the heart of Kolkata lies an address synonymous <br/> with luxury and affluence. South Kolkata stands as the epitome<br/>  of grandeur, ​where timeless elegance meets modern sophistication. <br/> Discover a haven that greets you with serenity, where you <br/> come home to ​calm waters.​</p>
                </div>
            </div>
            <div id="contact" className="ContactPage col-lg-12 col-12 col-md-12 col-sm-12">
                <div className="insprasion col-lg-12 col-12 col-md-12 col-sm-12"><h1>Presenting Club by the Calm Waters</h1></div>
                <div><Slide/></div>
            </div>
            <div className="former col-lg-12 col-12 col-md-12 col-sm-12">
                <div>
                    <Form/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
            </div>}
    </div>
}

export default MainBody;
