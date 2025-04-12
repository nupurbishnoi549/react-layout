import React from "react";
import { LAYOUT_DATA } from "../utils/helper";
import { DollorIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "../utils/icons";

const Hero = () => {
    return (
        <section className="min-vh-100 d-flex align-items-center justify-content-center flex-column">
            <div className="container">
                <div className="row">
                    {LAYOUT_DATA.map((item, index) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-24 mb-lg-0" key={index}>
                            <div className="card">
                                <div className="position-relative">
                                    <img src={item.image} alt={item.name} className="w-100" />
                                    <div className="iconbox-container">
                                        <a href="https://www.facebook.com/" target="_blank" className="iconbox">
                                            <FacebookIcon />
                                        </a>
                                        <div className="iconbox">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <InstagramIcon />
                                            </a>
                                        </div>
                                        <div className="iconbox">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <TwitterIcon />
                                            </a>
                                        </div>
                                        <div className="iconbox">
                                            <a href="https://www.shopsy.in/" target="_blank">
                                                <DollorIcon />
                                            </a>
                                        </div>
                                    </div>
                                    <p className="name">{item.name}</p>
                                    <p className="ux">{item.occupation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
