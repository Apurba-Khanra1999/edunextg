"use client"
import React from 'react'
import HeaderTwo from "@/components/header/HeaderTwo";
import BackToTop from "@/components/common/BackToTop";
import FooterOne from "@/components/footer/FooterOne";
import CtaOne from "@/components/cta/CtaOne";
import Accordion from "react-bootstrap/Accordion";
function page() {
    return (
        <>

            <HeaderTwo />
            {/* why choose us banner area  */}
            <div className="banner-why-choose-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-inner-why-choose-us">
                                <h1 className="title">Experience the Difference with Luminos</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="thumbnail-banner-choose-us jarallax" data-speed=".8">
                                <img
                                    src="assets/images/banner/banner-image-1.avif"
                                    className="jarallax-img"
                                    alt="banner"
                                />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="thumbnail-banner-choose-us jarallax" data-speed=".8">
                                <img
                                    src="assets/images/banner/banner-image-2.avif"
                                    className="jarallax-img"
                                    alt="banner"
                                />
                            </div>
                        </div>
                        <div className="col-lg-9 mt--50">
                            <div className="why-choose-intro-disc">
                                <p>
                                    we’re more than just an IT service provider – we’re your dedicated
                                    partner in growth. Our team brings years of experience and
                                    in-depth knowledge to every project, ensuring customized solutions
                                    that align perfectly with your business goals. We prioritize
                                    transparency, efficiency, and innovation, working closely with you
                                    to deliver measurable results.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us banner area end */}
            {/* luminos solution key */}
            <div className="luminos-solution-key-feature mt--50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="luminos-main-solutioin-key">
                                <h3 className="title">Choose Luminos IT Solutions for:</h3>
                                <div className="check-wrapper">
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Expertise You Can Trust</p>
                                    </div>
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Revolutionizing Customer Service</p>
                                    </div>
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Transforming a Healthcare Provider</p>
                                    </div>
                                    <div className="single-check">
                                        <img src="assets/images/service/01.svg" alt="service" />
                                        <p>Enhancing Data-Driven Decisions</p>
                                    </div>
                                </div>
                                <div className="tag-wrapper">
                                    <div className="single-tag">
                                        <span>Risk Assessment</span>
                                    </div>
                                    <div className="single-tag">
                                        <span>IT Solutions</span>
                                    </div>
                                    <div className="single-tag">
                                        <span>Consulting Services</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="thumbnail-main-wrapper-choose-us">
                                <img src="assets/images/service/whychooseus1.jpg" alt="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* luminos solution key end */}
            {/* working process area why choose us */}
            <div className="why-choose-us-working-process rts-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 pr--50">
                            <div className="why-choose-process-left pb--50">
                                <div className="text-left-title-bg-white">
                                    <h2 className="title">
                                        Strategic IT Consulting to Drive Innovation and Growth
                                    </h2>
                                    <p>
                                        We assess your current IT environment and create a customized
                                        roadmap that aligns technology with your business objectives.
                                    </p>
                                </div>
                            </div>
                            <div className="thumbnail-working-process">
                                <img src="assets/images/service/whychooseus2.avif" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="single-working-process-choose-us wow fadeInUp">
                                <h5 className="title">
                                    Initial Consultation &amp; Needs Assessment
                                </h5>
                                <p>
                                    We assess your current IT environment and create a customized
                                    roadmap that aligns technology with your business objectives.
                                </p>
                                <div className="tag-wrapper">
                                    <div className="single">
                                        <span>IT Consulting</span>
                                    </div>
                                    <div className="single">
                                        <span>IT Solutions</span>
                                    </div>
                                    <div className="single">
                                        <span>Consulting Services</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="single-working-process-choose-us wow fadeInUp"
                                data-wow-delay=".2s"
                            >
                                <h5 className="title">
                                    Initial Consultation &amp; Needs Assessment
                                </h5>
                                <p>
                                    We assess your current IT environment and create a customized
                                    roadmap that aligns technology with your business objectives.
                                </p>
                                <div className="tag-wrapper">
                                    <div className="single">
                                        <span>IT Consulting</span>
                                    </div>
                                    <div className="single">
                                        <span>IT Solutions</span>
                                    </div>
                                    <div className="single">
                                        <span>Consulting Services</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="single-working-process-choose-us wow fadeInUp"
                                data-wow-delay=".4s"
                            >
                                <h5 className="title">
                                    Initial Consultation &amp; Needs Assessment
                                </h5>
                                <p>
                                    We assess your current IT environment and create a customized
                                    roadmap that aligns technology with your business objectives.
                                </p>
                                <div className="tag-wrapper">
                                    <div className="single">
                                        <span>IT Consulting</span>
                                    </div>
                                    <div className="single">
                                        <span>IT Solutions</span>
                                    </div>
                                    <div className="single">
                                        <span>Consulting Services</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* working process area why choose us end */}
            {/* why choose us faq area start */}
            <div className="why-choose-us-faq-area rts-section-gap">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-why-choose-left-accordion">
                                <h2 className="title">
                                    Our Service Process Frequently Asked Questions
                                </h2>
                                <p>
                                    We understand that every business is unique, which is why we offer
                                    flexible pricing options to meet your specific needs.
                                </p>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                        What types of IT consulting services do you offer?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        Each pricing plan offers a unique combination of services such as web
                                        design, SEO, social media management, content marketing, &amp; more.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                        What types of accounts can I open online?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                        Each pricing plan offers a unique combination of services such as web
                                        design, SEO, social media management, content marketing, &amp; more.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Do I need to make an initial deposit?</Accordion.Header>
                                        <Accordion.Body>
                                        Each pricing plan offers a unique combination of services such as web
                                        design, SEO, social media management, content marketing, &amp; more.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="why-choose-faq-thumbnail">
                                <img src="assets/images/service/whychooseus3.jpg" alt="why" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* why choose us faq area end */}
{/* key benefits area start */}
            <div className="keybenefits-area rts-section-gapTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="benefits-area-title-wrapper">
                                <h3 className="title">Key offer we deliver on this project</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 mt--15">
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="100">
                            <div className="single-benefits-area-wrapper bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/01.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Accelerate Growth</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="200">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/02.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Boost Efficiency</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="300">
                            <div className="single-benefits-area-wrapper bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/03.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Collaboration</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="400">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/04.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Reduce Costs</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="100">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/05.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Netwroking</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="200">
                            <div className="single-benefits-area-wrapper  bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/06.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Global Translations</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="300">
                            <div className="single-benefits-area-wrapper">
                                <div className="icon">
                                    <img src="assets/images/about/icons/07.svg" alt="benefits" />
                                </div>
                                <h5 className="title">Enhance Security</h5>
                            </div>
                        </div>
                        <div className="col-lg-3" data-aos-duration="1000" data-aos-delay="400">
                            <div className="single-benefits-area-wrapper  bg-light">
                                <div className="icon">
                                    <img src="assets/images/about/icons/08.svg" alt="benefits" />
                                </div>
                                <h5 className="title">In-house techs</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* key benefits area end */}
            <CtaOne />
            <FooterOne />
            <BackToTop />
        </>

    )
}

export default page