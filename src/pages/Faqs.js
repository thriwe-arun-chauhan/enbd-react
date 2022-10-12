import React from 'react';

function Faqs() {
    return (
        <>
            <section id="services" className="ct-services section-space">
                <div className="container aos-init aos-animate" data-aos="fade-up">
                    <div className="row">
                        <div
                            target={1}
                            className="showSingle col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate "
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <a href="#scroll-ct" className="w-100">
                                <div className="icon-box">
                                    <h5>Golf </h5>
                                    <p>Click here to view FAQs related to Golf Booking.</p>
                                </div>
                            </a>
                        </div>
                        <div
                            target={2}
                            className="showSingle col-lg-4 col-md-6 d-flex align-items-stretch mt-4  aos-init aos-animate "
                            data-aos="zoom-in"
                            data-aos-delay={500}
                        >
                            <a href="#scroll-ct" className="w-100">
                                <div className="icon-box">
                                    <h5>Airport Transfers </h5>
                                    <p>
                                        Click here to view FAQs for booking of Airport Transfer requests.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div
                            target={3}
                            className="showSingle col-lg-4 col-md-6 d-flex align-items-stretch mt-4  aos-init aos-animate "
                            data-aos="zoom-in"
                            data-aos-delay={900}
                        >
                            <a href="#scroll-ct" className="w-100">
                                <div className="icon-box">
                                    <h5>Local Courier Service </h5>
                                    <p>Click here to view FAQs for Local Courier Booking Requests.</p>
                                </div>
                            </a>
                        </div>
                        <div
                            target={4}
                            className="showSingle col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate "
                            data-aos="zoom-in"
                            data-aos-delay={100}
                        >
                            <a href="#scroll-ct" className="w-100">
                                <div className="icon-box">
                                    <h5>Car Service Assistance </h5>
                                    <p>Click here to view FAQs for Car Servicing Bookings.</p>
                                </div>
                            </a>
                        </div>
                        <div
                            target={5}
                            className="showSingle col-lg-4 col-md-6 d-flex align-items-stretch mt-4 aos-init aos-animate "
                            data-aos="zoom-in"
                            data-aos-delay={300}
                        >
                            <a href="#scroll-ct" className="w-100">
                                <div className="icon-box">
                                    <h5>Car Registration Assistance</h5>
                                    <p>Click here to view FAQs for Car Registration Bookings.</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Faqs;