"use client";
import Link from 'next/link';
import React, { useEffect } from 'react';

export default function Hero() {
    useEffect(() => {
        // Force Webflow to re-calculate layout and specific triggers
        const triggerEvents = () => {
            window.dispatchEvent(new Event('resize'));
            window.dispatchEvent(new Event('scroll'));
        };

        // Immediate trigger
        triggerEvents();

        // Delayed trigger for safety
        const timer = setTimeout(triggerEvents, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="section home-2-banner">
            <div className="w-layout-blockcontainer base-container w-container">
                <div className="home-2-banner-wrapper">
                    <div className="home-2-banner-content-wrapper">
                        <div data-w-id="840c6250-2090-e03d-0df8-cb882921525e" style={{ opacity: 0 }} className="top-banner-block">
                            <div className="banner-text-block">The best job seekers</div>
                            <Link data-w-id="840c6250-2090-e03d-0df8-cb8829215261" href="/jobs-listing" className="link-with-icon">
                                explore <span style={{ transform: 'translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)' }} className="text-button-icon"></span>
                            </Link>
                        </div>
                        <h1 data-w-id="840c6250-2090-e03d-0df8-cb8829215265" style={{ opacity: 0 }} className="banner-title aling-left">
                            We find top talent <span className="grey-text">for your business</span>
                        </h1>
                        <p data-w-id="840c6250-2090-e03d-0df8-cb882921526a" style={{ opacity: 0 }} className="banner-paragraph width">
                            We fill positions quickly and accurately — from mass hiring to executive search.
                        </p>
                        <form action="/search" className="home-2-banner-search width w-form">
                            <input className="banner-search-input w-input" maxLength={256} name="query" style={{ opacity: 0 }} placeholder="Job title" data-w-id="840c6250-2090-e03d-0df8-cb882921526d" type="search" id="search" required="" />
                            <p data-w-id="840c6250-2090-e03d-0df8-cb882921526e" style={{ opacity: 0 }} className="search-icon"></p>
                            <div data-w-id="840c6250-2090-e03d-0df8-cb8829215270" style={{ opacity: 0 }} className="primary-white-button absolute-copy">
                                <input type="submit" className="white-button-text height w-button" value="Find jobs" />
                                <p className="text-icon">
                                    <span className="text-button-icon"></span>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="right-elements-wrapper">
                        <img src="/images/subtract.svg" loading="lazy" style={{ opacity: 0 }} data-w-id="2e66a02a-4e4a-37b3-79c1-81eb79fca035" alt="background image" className="bg-image" />

                        <div data-w-id="f06df3c2-59e4-6b20-51d3-3eb5e0d98e39" style={{ opacity: 0 }} className="banner-blured-block left">
                            <div className="banner-number-text">5,000+</div>
                            <p className="small-paragraph">Candidates in the database</p>
                        </div>
                        <div data-w-id="caffce8b-ca9c-c9e4-cca8-29c6abcb36d7" style={{ opacity: 0 }} className="banner-blured-block">
                            <div className="banner-number-text">2,500+</div>
                            <p className="small-paragraph">Closed vacancies</p>
                        </div>
                        <div data-w-id="ef1fab17-cdb9-0b7b-64c5-bb41750c21cc" style={{ opacity: 0 }} className="circle-wrap">
                            <div className="circle-image-wrapper">
                                <img src="/images/circlehero.svg" loading="lazy" alt="background circle" className="circle-bg-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
