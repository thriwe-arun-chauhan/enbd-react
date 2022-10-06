import React, { useState, useEffect } from 'react';
import BenefitAndCardModal from '../components/modals/BenefitAndCardModal';

// import Golf from '../services/GolfService/GolfService';
import Common from '../services/CommonService/CommonService';

import { connect } from 'react-redux';
import { setUserData } from '../services/reducer/actions/Actions';

function Home() {

    const [benefitAndCardModel, setBenefitAndCardModel] = useState(false);
    const [benefitType, setbenefitType] = useState(0);

    useEffect(()=>{
        Common.abc();
    }, []);
    return (
        <>
            <div className="body-overlay" />

            <div className="container-fluid p-0" style={{ position: 'relative' }}>
                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/topbg.jpg" className="img-fluid w-100" />
                <div className="topcured-ft"><img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/top-curved.png" className="img-fluid w-100" /></div>
            </div>


            <section id="services" className="services section-space pt-0 pb-2 ">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Enjoy Complimentary Benefits</h2>
                        <p>Exclusive offers on your ENBD Card</p>
                    </div>
                    <div className="row">
                        <ul>
                            <li onClick={() => { setBenefitAndCardModel(true); setbenefitType(1); }}>
                                <span className="animate__animated animate__bounceIn delay1 enabled">
                                    <div className="icon"><img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/golf.png" /></div>
                                    <h4>Golf <br />Booking</h4>
                                </span>

                            </li>
                            <li onClick={() => { setBenefitAndCardModel(true); setbenefitType(2); }}>
                                <span className="animate__animated animate__bounceIn delay2 enabled">
                                    <div className="icon"><img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/transfer.png" className="img-fluid" width="80px" /></div>
                                    <h4>Airport <br /> Transfer</h4>
                                </span>

                            </li>
                            <li onClick={() => { setBenefitAndCardModel(true); setbenefitType(3); }}>
                                <span className="animate__animated animate__bounceIn delay3 enabled">
                                    <div className="icon"><img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/courier.png" /></div>
                                    <h4>Local <br />Courier</h4>
                                </span>

                            </li>
                            <li onClick={() => { setBenefitAndCardModel(true); setbenefitType(4); }}>
                                <span className="animate__animated animate__bounceIn delay4 enabled">
                                    <div className="icon"><img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/car-service.png" /></div>
                                    <h4>Car <br />Servicing</h4>
                                </span>

                            </li>
                            <li onClick={() => { setBenefitAndCardModel(true); setbenefitType(5); }}>
                                <span className="animate__animated animate__bounceIn delay5 enabled">
                                    <div className="icon"><img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/services/car-registration.png" /></div>
                                    <h4>Car<br /> Registration</h4>
                                </span>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="light-blue section-space pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-11 col-xl-7 col-lg-8 m-auto text-center">
                            <h4>Don't Miss Out, You can save on each Booking !!</h4>
                            <p className="mt-2">EmiratesNBD Benefit program curated specially for its cardholders<br /> assures exclusive savings on every booking. Save big with each <br />booking you place through our platform.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center" />
                        <div className="col-md-12 col-lg-4 text-center">
                            <div className="chart easyPieChart" data-percent={100} style={{ width: '250px', height: '250px', lineHeight: '250px' }}>
                                <span className="textspan"><small>You Saved</small> <br />
                                    <span className="text-success">AED 0 </span> <br />
                                    <small>in 2022</small>
                                </span>
                                <canvas width={250} height={250} />
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-8  mt-3  mb-5">
                            <div className="row">
                                <div className="col-md-12  profile-index">
                                    <div className="profile-list">
                                        <p className="light-gray">
                                            <i><small> Once you start Booking - your savings logs will show here.</small></i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BenefitAndCardModal show={benefitAndCardModel} benefitType={benefitType} onClose={() => setBenefitAndCardModel(false)} />
        </>
    )
}

const mapStateToProps = state => ({

});
const mapDistchToProps = dispatch => ({
  setConfigHandler: data => dispatch(setUserData(data))
});
export default connect(mapStateToProps, mapDistchToProps)(Home);