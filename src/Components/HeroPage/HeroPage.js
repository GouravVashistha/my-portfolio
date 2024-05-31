import React from 'react'
import './HeroPage.css'
export const HeroPage = () => {
    return (
        <>
            <section className="hero-container">
                <div className="Container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero-content">
                                <h1 className="myName">Gourav Vashistha</h1>
                                <h2 className="head">Building Digital Expernces That Inspire</h2>
                                <p>Passionate Developer | Transforming Ideas into Seamless and visuality Stunning  Web Solution</p>
                                <button className="contact-btn" onClick={() => { }}>Contect Me</button>
                                <button className="contact-btn" onClick={() => { }}>Download CV</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero-img ">
                                <img className="hero" src="./assets/image/hero.png" alt="Hero" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
