import React from "react";

const GolfBookingModalContent = () => {
    return (
         <div className="row">
                    <div className="col-md-12">
                        <h5 className="modal-title" id="benefit_heading_name">
                            Golf Booking
                        </h5>
                    </div>
                    <div className="col-md-12 col-lg-6  pt-2">
                        <div id="text_description">
                            <p>
                                Emirates NBD Card holders can enjoy complimentary golf benefit at the
                                following golf clubs.
                            </p>
                            <div className="content">
                                <ol>
                                    <li>Trump International Golf Course, Dubai</li>
                                    <li>Abu Dhabi Golf Course, Abu Dhabi</li>
                                    <li>Arabian Ranches Golf Club, Dubai</li>
                                    <li>Sharjah golf &amp; Shooting Club, Sharjah</li>
                                    <li>The Track Meydan Golf Club, Dubai</li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-12 p-0 mt-3 horizontal_listing  card-list float-left">
                            <fieldset
                                className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start"
                                id="card_detail_div"
                            >
                                <legend className="checkbox-group-legend">
                                    Your Eligible Card(s) &amp; Available Booking Quota
                                </legend>
                                <div className="mb-0 checkbox ">
                                    <label className="checkbox-wrapper">
                                        <span className="checkbox-tile">
                                            <span className="checkbox-icon ml-0">
                                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                                            </span>
                                            <span className="checkbox-label">
                                                <strong>Visa Flexi Credit Card</strong>
                                                <small>418887****1231</small>
                                            </span>
                                            <div className="status active_inactive">
                                                <div className="text-secondary ">
                                                    <strong className="light-green">
                                                        Quota available for Sep 2022 - 2
                                                    </strong>
                                                    <strong className="text-warning">
                                                        Quota used for Sep 2022 - 0
                                                    </strong>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                                <div className="mb-0 checkbox ">
                                    <label className="checkbox-wrapper">
                                        <span className="checkbox-tile">
                                            <span className="checkbox-icon ml-0">
                                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                                            </span>
                                            <span className="checkbox-label">
                                                <strong>Diners Duo Credit Card</strong>
                                                <small>362800****1234</small>
                                            </span>
                                            <div className="status active_inactive">
                                                <div className="text-secondary ">
                                                    <strong className="light-green">
                                                        Quota available for Sep 2022 - 1
                                                    </strong>
                                                    <strong className="text-warning">
                                                        Quota used for Sep 2022 - 0
                                                    </strong>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                                <div className="mb-0 checkbox ">
                                    <label className="checkbox-wrapper">
                                        <span className="checkbox-tile">
                                            <span className="checkbox-icon ml-0">
                                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                                            </span>
                                            <span className="checkbox-label">
                                                <strong>Invalid - 420049</strong>
                                                <small>420049****9986</small>
                                            </span>
                                            <div className="status active_inactive">
                                                <div className="text-secondary ">
                                                    <strong className="light-green">
                                                        Quota available for Sep 2022 - 2
                                                    </strong>
                                                    <strong className="text-warning">
                                                        Quota used for Sep 2022 - 0
                                                    </strong>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                                <div className="mb-0 checkbox ">
                                    <label className="checkbox-wrapper">
                                        <span className="checkbox-tile">
                                            <span className="checkbox-icon ml-0">
                                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                                            </span>
                                            <span className="checkbox-label">
                                                <strong>Diners Duo Credit Card</strong>
                                                <small>362800****8976</small>
                                            </span>
                                            <div className="status active_inactive">
                                                <div className="text-secondary ">
                                                    <strong className="light-green">
                                                        Quota available for Sep 2022 - 1
                                                    </strong>
                                                    <strong className="text-warning">
                                                        Quota used for Sep 2022 - 0
                                                    </strong>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                                <div className="mb-0 checkbox ">
                                    <label className="checkbox-wrapper">
                                        <span className="checkbox-tile">
                                            <span className="checkbox-icon ml-0">
                                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                                            </span>
                                            <span className="checkbox-label">
                                                <strong>Etihad Guest Visa Inspire</strong>
                                                <small>403344****2154</small>
                                            </span>
                                            <div className="status active_inactive">
                                                <div className="text-secondary ">
                                                    <strong className="light-green">
                                                        Quota available for Sep 2022 - 2
                                                    </strong>
                                                    <strong className="text-warning">
                                                        Quota used for Sep 2022 - 0
                                                    </strong>
                                                </div>
                                            </div>
                                        </span>
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 pt-2 service-img" id="benefit_image">
                        <img
                            src="https://emiratesnbdbenefits.thriwe.com/public/web/img/video-section/1.jpg"
                            className="img-fluid border-round"
                        />
                    </div>
                </div> 
    )
}

export default GolfBookingModalContent;