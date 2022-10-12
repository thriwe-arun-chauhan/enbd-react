import React from 'react';

    function BookingHistory()
{
 return(
<>

<div
  className="breadcrumbs overlay"
  style={{
    backgroundImage:
      'url("https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/breadcrumb.jpg")'
  }}
>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="bread-inner">
          <div className="bread-menu">
            <ul>
              <li>
                <a href="https://latesttestemiratesnbdbenefits.thriwe.com/">
                  Home
                </a>
              </li>
              <li>
                <a href="https://latesttestemiratesnbdbenefits.thriwe.com/dashboard">
                  Services
                </a>
              </li>
              <li>
                <a href="https://latesttestemiratesnbdbenefits.thriwe.com/booking-history">
                  Booking History
                </a>
              </li>
            </ul>
          </div>
          <div className="bread-title">
            <h2> Booking history</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="common-section my-booking">
  <div className="container">
    <div className="common-form">
      <div className="form-inner">
        <div className="form golf-booking-form">
          <div className="row">
            <div className="col-12 filters ">
              <a
                href="https://latesttestemiratesnbdbenefits.thriwe.com/booking-history"
                className="filter all"
              >
                <div className="filter-icon active">
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/services/all.png"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="filter-name">All</div>
              </a>
              <a
                href="https://latesttestemiratesnbdbenefits.thriwe.com/booking-history?service=MQ=="
                className=" ott filter enabled"
              >
                <div className="filter-icon ">
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/services/golf.png"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="filter-name">Golf Booking</div>
              </a>
              <a
                href="https://latesttestemiratesnbdbenefits.thriwe.com/booking-history?service=Mg=="
                className=" ott filter enabled"
              >
                <div className="filter-icon ">
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/services/transfer.png"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="filter-name">Airport Transfer</div>
              </a>
              <a
                href="https://latesttestemiratesnbdbenefits.thriwe.com/booking-history?service=Mw=="
                className=" ott filter enabled"
              >
                <div className="filter-icon ">
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/services/courier.png"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="filter-name">Local Courier</div>
              </a>
              <a
                href="https://latesttestemiratesnbdbenefits.thriwe.com/booking-history?service=NA=="
                className=" ott filter enabled"
              >
                <div className="filter-icon ">
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/services/car-service.png"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="filter-name">Car Service</div>
              </a>
              <a
                href="https://latesttestemiratesnbdbenefits.thriwe.com/booking-history?service=NQ=="
                className=" ott filter enabled"
              >
                <div className="filter-icon ">
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/services/car-registration.png"
                    width={70}
                    height={70}
                  />
                </div>
                <div className="filter-name">Car Registration</div>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mx-ato d-flex flex-row justify-content-center align-items-center align-content-center">
              <div className="form-group d-flex flex-row flex-wrap justify-content-center align-item-center mb-5">
                <h4>
                  <label htmlFor=""> Booking Period</label>
                </h4>
                <input
                  type="text"
                  name="search_dates"
                  search_date={0}
                  service=""
                  defaultValue=""
                  id="search_dates"
                  placeholder="Select Start and End Date"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="col-12 horizontal_listing my_bookings">
              <fieldset
                className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start"
                id="booking_history_div"
              >
                <input
                  type="hidden"
                  name="csrf_form_name"
                  defaultValue="b92575253609cfe7b5cd83f6a0350c87"
                  autoComplete="off"
                />
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no-of-golf"
                      type="radio"
                      className="checkbox-input"
                      defaultChecked=""
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golf/banner-cs.jpg" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Car Servicing Station</strong>
                        <small>Dubai</small>
                      </span>
                      <div className="status booking-type">
                        <div className="alert alert-info cs" role="alert">
                          <strong>Car Servicing</strong>
                        </div>
                      </div>
                      <div className="status">
                        <div className="alert alert-info" role="alert">
                          <strong id="634019e18f99e">
                            Cancelled By Thriwe
                          </strong>
                        </div>
                      </div>
                      <div className="status booking-top">
                        <span className="bs_status_type bscomplimentary">
                          Complimentary
                        </span>{" "}
                      </div>
                    </span>
                    <a href="javascript:void('0')" className="readmore" />
                  </label>
                  <div className="accordian_body">
                    <div className="common-form">
                      <div className="form-inner">
                        <div className="row mt-4">
                          <div className="col-md-12">
                            <ul className="progressbar">
                              <li className="">
                                <span>Placed</span>
                              </li>
                              <li className="">
                                <span>Processed</span>
                              </li>
                              <li className="active">
                                <span>Canceled</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="form-title mb-4">
                          <h4>Booking Summary</h4>
                          <p>
                            <strong>Booking ID - 299</strong>
                          </p>
                        </div>
                        <ul className="booking_summary">
                          <li className="bstitle">
                            <span>Personal Details</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/vehicle-sender.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                <span> manish sharma</span>{" "}
                                <span>Booking for myself</span>
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-envelope" />{" "}
                                    manish.sharma@thriwe.com
                                  </span>
                                  <span>
                                    <i className="fa fa-mobile" />{" "}
                                    +971-565464654
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-credit-card" /> Diners
                                    Duo Credit Card
                                  </span>
                                  <span>
                                    <i className="fa fa-credit-card" />{" "}
                                    362800******8977
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bscomplimentary">
                              Complimentary
                            </span>
                          </li>
                          <li className="bstitle">Vehicle Details</li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/vehicle.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo column">
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-car" /> Car Plate
                                      Number
                                    </span>
                                    <strong>SFSD</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fas fa-car" /> Car Make /
                                      Model{" "}
                                    </span>
                                    <strong>sdfdsf</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fas fa-car" /> Car Type{" "}
                                    </span>
                                    <strong>manual</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Service Details</li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Pickup Address
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> sgfdfs
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" /> +971-3123123
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" /> Testvdghs
                                    Ain Al-Faida Dubai, Dubai , United Arab
                                    Emirates{" "}
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-calendar" /> Car
                                      Pickup Date
                                    </span>
                                    <strong>27 Oct 2022</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-clock-o" /> Car Pickup
                                      Time
                                    </span>
                                    <strong>03:09 PM</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bsguest">
                              Pickup
                            </span>
                          </li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Delivery Address
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> sdfds
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" /> +971-2342343
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" /> Testvdghs
                                    Ain Al-Faida Dubai, Dubai , United Arab
                                    Emirates{" "}
                                  </span>
                                </li>
                              </ul>
                              <p></p>
                            </div>
                            <span className="bs_status_type bsguest">Drop</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/remark.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Remarks
                              </span>
                              <p> </p>
                            </div>
                          </li>
                          <li className="bstitle">
                            Booking Request Date &amp; Time
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfing.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Created On
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-calendar" /> 30 Sep 2022
                                  </span>
                                  <span>
                                    <i className="fa fa-clock-o" /> 03:11 PM
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Payment summary</li>
                          <li className="bslisting payment_details clearfix">
                            <label className="light-gray">Standard Price</label>
                            <label className="light-gray">AED 93.75</label>
                            <label className="light-gray">
                              Discount Fee (100%)
                            </label>
                            <label className="text-success">
                              <i
                                className=" text-success"
                                style={{ fontSize: 18, fontWeight: "bold" }}
                              >
                                -
                              </i>
                              &nbsp;&nbsp;AED 93.75
                            </label>
                            <label>Booking Fee</label>
                            <label>AED 0</label>
                            <label>VAT &amp; Taxes</label>
                            <label>AED 0</label>
                            <label>Total Payable</label>
                            <label>
                              You Paid AED 1{" "}
                              <span
                                style={{ flex: "100%" }}
                                className="text-right w-100"
                              >
                                <small>(Refundable) </small>
                              </span>
                            </label>
                            <p
                              style={{ flex: "100%" }}
                              className="text-right w-100"
                            >
                              <small>
                                <i>
                                  You will save{" "}
                                  <font color="green">AED 93.75</font> on this
                                  Booking
                                </i>
                              </small>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no-of-golf"
                      type="radio"
                      className="checkbox-input"
                      defaultChecked=""
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golf/banner-cs.jpg" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Car Servicing Station</strong>
                        <small>Dubai</small>
                      </span>
                      <div className="status booking-type">
                        <div className="alert alert-info cs" role="alert">
                          <strong>Car Servicing</strong>
                        </div>
                      </div>
                      <div className="status">
                        <div className="alert alert-info" role="alert">
                          <strong id="634019e1a4f6a">Cancelled By User</strong>
                        </div>
                      </div>
                      <div className="status booking-top">
                        <span className="bs_status_type bscomplimentary">
                          Complimentary
                        </span>{" "}
                      </div>
                    </span>
                    <a href="javascript:void('0')" className="readmore" />
                  </label>
                  <div className="accordian_body">
                    <div className="common-form">
                      <div className="form-inner">
                        <div className="row mt-4">
                          <div className="col-md-12">
                            <ul className="progressbar">
                              <li className="">
                                <span>Placed</span>
                              </li>
                              <li className="">
                                <span>Processed</span>
                              </li>
                              <li className="active">
                                <span>Canceled</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="form-title mb-4">
                          <h4>Booking Summary</h4>
                          <p>
                            <strong>Booking ID - 298</strong>
                          </p>
                        </div>
                        <ul className="booking_summary">
                          <li className="bstitle">
                            <span>Personal Details</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/vehicle-sender.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                <span> manish sharma</span>{" "}
                                <span>Booking for myself</span>
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-envelope" />{" "}
                                    manish.sharma@thriwe.com
                                  </span>
                                  <span>
                                    <i className="fa fa-mobile" />{" "}
                                    +971-565464654
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-credit-card" /> Diners
                                    Duo Credit Card
                                  </span>
                                  <span>
                                    <i className="fa fa-credit-card" />{" "}
                                    362800******8977
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bscomplimentary">
                              Complimentary
                            </span>
                          </li>
                          <li className="bstitle">Vehicle Details</li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/vehicle.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo column">
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-car" /> Car Plate
                                      Number
                                    </span>
                                    <strong>FDSSDF</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fas fa-car" /> Car Make /
                                      Model{" "}
                                    </span>
                                    <strong>ssfsdf</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fas fa-car" /> Car Type{" "}
                                    </span>
                                    <strong>manual</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Service Details</li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Pickup Address
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> sdfsd
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" /> +971-24234234
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" /> Testvdghs
                                    Ain Al-Faida Dubai, Dubai , United Arab
                                    Emirates{" "}
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-calendar" /> Car
                                      Pickup Date
                                    </span>
                                    <strong>14 Oct 2022</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-clock-o" /> Car Pickup
                                      Time
                                    </span>
                                    <strong>03:04 PM</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bsguest">
                              Pickup
                            </span>
                          </li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Delivery Address
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> sdfgdfg
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" />{" "}
                                    +971-423423423
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" /> Testvdghs
                                    Ain Al-Faida Dubai, Dubai , United Arab
                                    Emirates{" "}
                                  </span>
                                </li>
                              </ul>
                              <p></p>
                            </div>
                            <span className="bs_status_type bsguest">Drop</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/remark.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Remarks
                              </span>
                              <p> </p>
                            </div>
                          </li>
                          <li className="bstitle">
                            Booking Request Date &amp; Time
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfing.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Created On
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-calendar" /> 30 Sep 2022
                                  </span>
                                  <span>
                                    <i className="fa fa-clock-o" /> 03:06 PM
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Payment summary</li>
                          <li className="bslisting payment_details clearfix">
                            <label className="light-gray">Standard Price</label>
                            <label className="light-gray">AED 93.75</label>
                            <label className="light-gray">
                              Discount Fee (100%)
                            </label>
                            <label className="text-success">
                              <i
                                className=" text-success"
                                style={{ fontSize: 18, fontWeight: "bold" }}
                              >
                                -
                              </i>
                              &nbsp;&nbsp;AED 93.75
                            </label>
                            <label>Booking Fee</label>
                            <label>AED 0</label>
                            <label>VAT &amp; Taxes</label>
                            <label>AED 0</label>
                            <label>Total Payable</label>
                            <label>
                              You Paid AED 1{" "}
                              <span
                                style={{ flex: "100%" }}
                                className="text-right w-100"
                              >
                                <small>(Refundable) </small>
                              </span>
                            </label>
                            <p
                              style={{ flex: "100%" }}
                              className="text-right w-100"
                            >
                              <small>
                                <i>
                                  You will save{" "}
                                  <font color="green">AED 93.75</font> on this
                                  Booking
                                </i>
                              </small>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no-of-golf"
                      type="radio"
                      className="checkbox-input"
                      defaultChecked=""
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golf/banner-cs.jpg" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Car Servicing Station</strong>
                        <small>Dubai</small>
                      </span>
                      <div className="status booking-type">
                        <div className="alert alert-info cs" role="alert">
                          <strong>Car Servicing</strong>
                        </div>
                      </div>
                      <div className="status">
                        <div className="alert alert-info" role="alert">
                          <strong id="634019e1ba5cd">Cancelled By User</strong>
                        </div>
                      </div>
                      <div className="status booking-top">
                        <span className="bs_status_type bscomplimentary">
                          Complimentary
                        </span>{" "}
                      </div>
                    </span>
                    <a href="javascript:void('0')" className="readmore" />
                  </label>
                  <div className="accordian_body">
                    <div className="common-form">
                      <div className="form-inner">
                        <div className="row mt-4">
                          <div className="col-md-12">
                            <ul className="progressbar">
                              <li className="">
                                <span>Placed</span>
                              </li>
                              <li className="">
                                <span>Processed</span>
                              </li>
                              <li className="active">
                                <span>Canceled</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="form-title mb-4">
                          <h4>Booking Summary</h4>
                          <p>
                            <strong>Booking ID - 297</strong>
                          </p>
                        </div>
                        <ul className="booking_summary">
                          <li className="bstitle">
                            <span>Personal Details</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/vehicle-sender.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                <span> manish sharma</span>{" "}
                                <span>Booking for myself</span>
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-envelope" />{" "}
                                    manish.sharma@thriwe.com
                                  </span>
                                  <span>
                                    <i className="fa fa-mobile" />{" "}
                                    +971-565464654
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-credit-card" /> Diners
                                    Duo Credit Card
                                  </span>
                                  <span>
                                    <i className="fa fa-credit-card" />{" "}
                                    362800******8976
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bscomplimentary">
                              Complimentary
                            </span>
                          </li>
                          <li className="bstitle">Vehicle Details</li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/vehicle.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo column">
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-car" /> Car Plate
                                      Number
                                    </span>
                                    <strong>SADFSD</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fas fa-car" /> Car Make /
                                      Model{" "}
                                    </span>
                                    <strong>dfgdsfds</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fas fa-car" /> Car Type{" "}
                                    </span>
                                    <strong>manual</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Service Details</li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Pickup Address
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> sdfsdf
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" /> +971-534535
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" /> Testvdghs
                                    Ain Al-Faida Dubai, Dubai , United Arab
                                    Emirates{" "}
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-calendar" /> Car
                                      Pickup Date
                                    </span>
                                    <strong>01 Oct 2022</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-clock-o" /> Car Pickup
                                      Time
                                    </span>
                                    <strong>02:40 PM</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bsguest">
                              Pickup
                            </span>
                          </li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Delivery Address
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> ggdfgd
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" />{" "}
                                    +971-54345345345
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" /> Testvdghs
                                    Ain Al-Faida Dubai, Dubai , United Arab
                                    Emirates{" "}
                                  </span>
                                </li>
                              </ul>
                              <p>
                                Pickup my car after the service is complete{" "}
                              </p>
                            </div>
                            <span className="bs_status_type bsguest">Drop</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/remark.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Remarks
                              </span>
                              <p> </p>
                            </div>
                          </li>
                          <li className="bstitle">
                            Booking Request Date &amp; Time
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfing.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Created On
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-calendar" /> 30 Sep 2022
                                  </span>
                                  <span>
                                    <i className="fa fa-clock-o" /> 02:42 PM
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Payment summary</li>
                          <li className="bslisting payment_details clearfix">
                            <label className="light-gray">Standard Price</label>
                            <label className="light-gray">AED 187.5</label>
                            <label className="light-gray">
                              Discount Fee (100%)
                            </label>
                            <label className="text-success">
                              <i
                                className=" text-success"
                                style={{ fontSize: 18, fontWeight: "bold" }}
                              >
                                -
                              </i>
                              &nbsp;&nbsp;AED 187.5
                            </label>
                            <label>Booking Fee</label>
                            <label>AED 0</label>
                            <label>VAT &amp; Taxes</label>
                            <label>AED 0</label>
                            <label>Total Payable</label>
                            <label>
                              You Paid AED 1{" "}
                              <span
                                style={{ flex: "100%" }}
                                className="text-right w-100"
                              >
                                <small>(Refundable) </small>
                              </span>
                            </label>
                            <p
                              style={{ flex: "100%" }}
                              className="text-right w-100"
                            >
                              <small>
                                <i>
                                  You will save{" "}
                                  <font color="green">AED 187.5</font> on this
                                  Booking
                                </i>
                              </small>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no-of-golf"
                      type="radio"
                      className="checkbox-input"
                      defaultChecked=""
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golf/banner-lc.jpg" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Local Courier</strong>
                        <small>Abu Dhabi</small>
                      </span>
                      <div className="status booking-type">
                        <div className="alert alert-info lc" role="alert">
                          <strong>Local Courier</strong>
                        </div>
                      </div>
                      <div className="status">
                        <div className="alert alert-info" role="alert">
                          <strong id="634019e1d07cb">Cancelled By User</strong>
                        </div>
                      </div>
                      <div className="status booking-top">
                        <span className="bs_status_type bscomplimentary">
                          Complimentary
                        </span>
                      </div>
                    </span>
                    <a href="javascript:void('0')" className="readmore" />
                  </label>
                  <div className="accordian_body">
                    <div className="common-form">
                      <div className="form-inner">
                        <div className="row mt-4">
                          <div className="col-md-12">
                            <ul className="progressbar">
                              <li className="">
                                <span>Placed</span>
                              </li>
                              <li className="">
                                <span>Processed</span>
                              </li>
                              <li className="active">
                                <span>Canceled</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="form-title mb-4">
                          <h4>Booking Summary</h4>
                          <p>
                            <strong>Booking ID - 290</strong>
                          </p>
                        </div>
                        <ul className="booking_summary">
                          <li className="bstitle">
                            <span>Sender Details</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/sender.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                <span>manish sharma</span>{" "}
                                <span>Booking for myself</span>
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-envelope" />{" "}
                                    manish.sharma@thriwe.com
                                  </span>
                                  <span>
                                    <i className="fa fa-mobile" />{" "}
                                    +971-565464654
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-credit-card" /> Diners
                                    Duo Credit Card
                                  </span>
                                  <span>
                                    <i className="fa fa-credit-card" />{" "}
                                    362800******4546
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bscomplimentary">
                              Complimentary
                            </span>
                          </li>
                          <li className="bstitle">Location Details</li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">From</span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> sdfgh
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" /> +971-2345678
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" />{" "}
                                    wertfghku, Abu Dhabi , United Arab Emirates
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-calendar" /> Courier
                                      Pickup Date
                                    </span>
                                    <strong>01 Oct 2022</strong>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <span>
                                      <i className="fa fa-clock-o" /> Courier
                                      Pickup Time
                                    </span>
                                    <strong>09:58 AM</strong>
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bsguest">
                              Pickup
                            </span>
                          </li>
                          <li className="bslisting flex-50 clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">To</span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-user" /> sdfgh
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-mobile" /> +971-3245678
                                  </span>
                                </li>
                              </ul>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-map-marker" /> sdfghk,
                                    Abu Dhabi , United Arab Emirates
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bsguest">Drop</span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/remark.png"
                                alt=""
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Remarks
                              </span>
                              <p />
                            </div>
                          </li>
                          <li className="bstitle">
                            Booking Request Date &amp; Time
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfing.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Created On
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-calendar" /> 30 Sep 2022
                                  </span>
                                  <span>
                                    <i className="fa fa-clock-o" /> 10:59 AM
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Payment summary</li>
                          <li className="bslisting payment_details clearfix">
                            <label className="light-gray">Standard Price</label>
                            <label className="light-gray">AED 31.25</label>
                            <label className="light-gray">
                              Discount Fee (100%)
                            </label>
                            <label className="text-success">
                              <i
                                className=" text-success"
                                style={{ fontSize: 18, fontWeight: "bold" }}
                              >
                                -
                              </i>
                              &nbsp;&nbsp;AED 31.25
                            </label>
                            <label>Booking Fee</label>
                            <label>AED 0</label>
                            <label>VAT &amp; Taxes</label>
                            <label>AED 0</label>
                            <label>Total Payable</label>
                            <label>
                              You Paid AED 1{" "}
                              <span
                                style={{ flex: "100%" }}
                                className="text-right w-100"
                              >
                                <small>(Refundable) </small>
                              </span>
                            </label>
                            <p
                              style={{ flex: "100%" }}
                              className="text-right w-100"
                            >
                              <small>
                                <i>
                                  You will save{" "}
                                  <font color="green">AED 31.25</font> on this
                                  Booking
                                </i>
                              </small>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no-of-golf"
                      type="radio"
                      className="checkbox-input"
                      defaultChecked=""
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://daclkx5lzs4xm.cloudfront.net/GCImages/33.jpg?v=634019e1f15e2" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Yas Links Golf Club</strong>
                        <small>Abu Dhabi</small>
                      </span>
                      <div className="status booking-type">
                        <div className="alert alert-warning golf" role="alert">
                          <strong>Golf</strong>
                        </div>
                      </div>
                      <div className="status">
                        <div className="alert alert-warning" role="alert">
                          <strong id="634019e1e5f75">Pending</strong>
                        </div>
                      </div>
                      <div className="status booking-top">
                        <span className="bs_status_type bscomplimentary">
                          Complimentary
                        </span>
                      </div>
                    </span>
                    <button
                      className="btn btn-danger cancel-booking"
                      role="alert"
                      data-benefit_type_id="B55rZxxYvczWJ8E9uzf41Q=="
                      data-booking_id="6g40hEFViEphpi09j+WFsA=="
                      data-golf_course_id="1TV38a9HGZjTi8CJi/BkgQ=="
                      data-booking_status_id="MQ=="
                      data-unique_id="634019e1e5f75"
                      short-notice="B55rZxxYvczWJ8E9uzf41Q=="
                      booking-type="B55rZxxYvczWJ8E9uzf41Q=="
                      id="634019e1e5f75-btn"
                    >
                      Cancel Booking
                    </button>
                    <a href="javascript:void('0')" className="readmore" />
                  </label>
                  <div className="accordian_body">
                    <div className="common-form">
                      <div className="form-inner">
                        <div className="row mt-4">
                          <div className="col-md-12">
                            <ul className="progressbar">
                              <li className="active">
                                <span>Placed</span>
                              </li>
                              <li className="">
                                <span>Processed</span>
                              </li>
                              <li className="">
                                <span>Confirmed</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="form-title mb-4">
                          <h4>Booking Summary</h4>
                          <p>
                            <strong>Booking ID - 289</strong>
                          </p>
                        </div>
                        <ul className="booking_summary">
                          <li className="bstitle">Player Details</li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfer.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                {" "}
                                manish sharma
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-envelope" />{" "}
                                    manish.sharma@thriwe.com
                                  </span>
                                  <span>
                                    <i className="fa fa-mobile" />{" "}
                                    +971-565464654
                                  </span>
                                  <span>
                                    <i className="fa fa-star" /> 1
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <i className="fa fa-credit-card" /> Diners
                                    Duo Credit Card
                                  </span>
                                  <span>
                                    <i className="fa fa-credit-card" />{" "}
                                    362800******4546
                                  </span>
                                </li>
                              </ul>
                            </div>
                            <span className="bs_status_type bscomplimentary">
                              Complimentary
                            </span>
                          </li>
                          <li className="bstitle">
                            Date &amp; Time of Play and Guest Details
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfing.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Preferred Date and Time of Play
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-calendar" /> 08 Oct 2022
                                  </span>
                                  <span>
                                    <i className="fa fa-clock-o" /> 03:04 PM
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bslisting clearfix text-center">
                            <h5 className="w-100 text-center">
                              <small> No Guest </small>
                            </h5>
                          </li>
                          <li className="bstitle">Golf Course</li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golf.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Yas Links Golf Club
                              </span>
                              <p>
                                <i className="fa fa-map-marker" /> &nbsp;Yas
                                Island, Abu Dhabi, United Arab Emirates
                              </p>{" "}
                              <p>
                                A course that will test professionals, enthrall
                                amateurs and excite beginners. A course that
                                honours the traditions of the game, demands
                                respect, yet offers so much. A course that
                                celebrates the best in Links design, utilizes
                                the unique weather conditions and complements
                                its natural surroundings. A course that blends
                                the latest in techniques and technology with the
                                timeless traditions of the game. A course that
                                is ready to be played, enjoyed and discovered by
                                you
                              </p>
                            </div>
                            <span className="bs_status_type bscountry">
                              Abu Dhabi
                            </span>
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/remark.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Remarks
                              </span>
                              <p />
                            </div>
                          </li>
                          <li className="bstitle">
                            Booking Request Date &amp; Time
                          </li>
                          <li className="bslisting clearfix">
                            <div className="bsimage_wrapper">
                              <img
                                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfing.png"
                                alt="Twitter"
                              />
                            </div>
                            <div className="bsinfo">
                              <span className="bssub_title">
                                Booking Created On
                              </span>
                              <ul className="bssub_info">
                                <li>
                                  <span>
                                    <i className="fa fa-calendar" /> 30 Sep 2022
                                  </span>
                                  <span>
                                    <i className="fa fa-clock-o" /> 10:36 AM
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="bstitle">Payment summary</li>
                          <li className="bslisting payment_details clearfix">
                            <label className="light-gray">Green Fee</label>
                            <label className="light-gray">AED 888.04</label>
                            <label className="light-gray">
                              Discount Fee (100%)
                            </label>
                            <label className="text-success">
                              <i
                                className=" text-success"
                                style={{ fontSize: 18, fontWeight: "bold" }}
                              >
                                -
                              </i>
                              &nbsp;&nbsp;AED 888.04
                            </label>
                            <label>Booking Fee</label>
                            <label>AED 0</label>
                            <label>Processing Fee</label>
                            <label>AED 30</label>
                            <label>VAT &amp; Taxes</label>
                            <label>AED 1.5</label>
                            <label>Total Payable</label>
                            <label>You Paid AED 2 </label>
                            <p
                              style={{ flex: "100%" }}
                              className="text-right w-100"
                            >
                              <small>
                                <i>
                                  You will save{" "}
                                  <font color="green">AED 888.04</font> on this
                                  Booking
                                </i>
                              </small>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="col-12 d-flex flex-column justify-content-center align-items-center align-content-center flex-sm-row">
            <button
              type="button"
              id="load_more_btn"
              onclick="load_booking('');"
              data-id={5}
              className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</>

 )
}

export default BookingHistory;


