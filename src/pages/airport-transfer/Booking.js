import React, { useEffect, useState } from "react";
import PassengerDetails from "./PassengerDetails";
import LocationDetails from "./LocationDetails";
import FlightDetails from "./FlightDetails";
import BookingSummary from "./BookingSummary";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { setUserData } from "../../services/reducer/actions/Actions";

import { AlertPopup } from "../../services/Shared";

function AirBooking() {
  useEffect(() => {
    AlertPopup({ text: "Arun" });
  }, []);
  const [showAirJourney, setshowAirJourney] = useState(1);

  return (
    <>
      <div
        className="breadcrumbs overlay"
        style={{
          backgroundImage:
            'url("https://emiratesnbdbenefits.thriwe.com/public/web/img/breadcrumb.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-inner">
                {/* Bread Menu */}
                <div className="bread-menu">
                  <ul>
                    <li>
                      <a
                        className="leave_site"
                        href="javascript:void(0);"
                        link="https://emiratesnbdbenefits.thriwe.com/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="leave_site"
                        href="javascript:void(0);"
                        link="https://emiratesnbdbenefits.thriwe.com/dashboard"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Airport Transfer</a>
                    </li>
                  </ul>
                </div>
                {/* Bread Title */}
                <div className="bread-title">
                  <h2>Airport Transfer</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="common-section airport-transfer sw sw-theme-dots sw-justified"
        id="smartwizard"
      >
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showAirJourney == 1 ? "active" : ""
                }`}
                href="#step-1"
              >
                <strong>Passenger Details</strong> <br />
                <span>
                  Give passenger info &amp; select <br /> card
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showAirJourney == 2 ? "active" : ""
                }`}
                href="#step-2"
              >
                <strong>Location Details</strong> <br />
                <span>
                  Specify Pickup &amp; Drop <br />
                  Location
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showAirJourney == 3 ? "active" : ""
                }`}
                href="#step-3"
              >
                <strong>Flight Details</strong> <br />
                <span>
                  Give your travel <br />
                  details
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showAirJourney == 4 ? "active" : ""
                }`}
                href="#step-4"
              >
                <strong>Booking Summary</strong> <br />
                <span>
                  Reconfirm your booking <br />
                  details
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {showAirJourney == 1 && <PassengerDetails />}
            {showAirJourney == 2 && <LocationDetails />}
            {showAirJourney == 3 && <FlightDetails />}
            {showAirJourney == 4 && <BookingSummary />}
          </div>
          <div
            className="toolbar toolbar-bottom"
            role="toolbar"
            style={{ textAlign: "right" }}
          >
            <button
              className={
                showAirJourney === 1
                  ? "btn sw-btn-prev disabled"
                  : "sw-btn-prev custom-btn theme-2"
              }
              type="button"
              onClick={() => {
                if (showAirJourney > 1) {
                  setshowAirJourney(showAirJourney - 1);
                } else {
                  return;
                }
              }}
            >
              Previous
            </button>
            {showAirJourney <= 3 && (
              <button
                onClick={() => {
                  if (showAirJourney <= 3) {
                    setshowAirJourney(showAirJourney + 1);
                  } else {
                    return;
                  }
                }}
                className="btn sw-btn-next"
                type="button"
              >
                Next
              </button>
            )}
            {showAirJourney == 4 && (
              <button>
                <Link
                  to="/PayNow"
                  className="btn-info custom-btn theme-2  airport_submit_btn"
                >
                  Proceed to Payment
                </Link>
              </button>
            )}
          </div>
          {/* Modal Airport From*/}
          <div
            className="modal fade"
            id="from_address"
            tabIndex={-1}
            data-backdrop="static"
            role="dialog"
            aria-labelledby="from_addressLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable modal-md">
              <div className="modal-content">
                <div className="modal-header justify-content-start">
                  <a href="#" data-dismiss="modal" aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                  </a>
                  <h5 className="modal-title mb-0 ml-2" id="from_address_label">
                    Airport Pickup
                  </h5>
                </div>
                <div className="modal-body gray-extra-light-bg">
                  <h5
                    className="fs-5 text-center mb-3 text-purple"
                    id="from_address_title"
                  >
                    Select Pickup Address
                  </h5>
                  <div className="horizontal_listing location">
                    <div className="col-12">
                      <fieldset
                        className="checkbox-group d-flex flex-row justify-content-between align-items-start align-content-start"
                        id="address_list_div"
                      >
                        <div className="checkbox from_address" city_status={1}>
                          <label className="checkbox-wrapper">
                            <input
                              name="select_address"
                              type="radio"
                              state_id={1}
                              address_nick_name="manish"
                              address="delho Al Bateen Abu Dhabi "
                              defaultValue="2QHbTx3GnTI039cpGvMD7w=="
                              className="checkbox-input select_address"
                              autoComplete="off"
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-icon">
                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/office-building.png" />
                              </span>
                              <span className="checkbox-label">
                                <strong className="address_name">manish</strong>
                                <small>delho Al Bateen Abu Dhabi </small>
                              </span>
                              <a
                                href="javascript:void(0);"
                                className="edit d-block "
                                onclick="get_address_info('2QHbTx3GnTI039cpGvMD7w==')"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={26}
                                  height={26}
                                  fill="var(--gray-light)"
                                  className="bi bi-pencil  ms-0"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                              </a>
                            </span>
                          </label>
                        </div>
                        <div className="checkbox from_address" city_status={1}>
                          <label className="checkbox-wrapper">
                            <input
                              name="select_address"
                              type="radio"
                              state_id={2}
                              address_nick_name="manish Outskrit"
                              address="Test Address Abu Hail Dubai "
                              defaultValue="SlJ5mFep9se29s5wfL7oqw=="
                              className="checkbox-input select_address"
                              autoComplete="off"
                            />
                            <span className="checkbox-tile">
                              <span className="checkbox-icon">
                                <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/office-building.png" />
                              </span>
                              <span className="checkbox-label">
                                <strong className="address_name">
                                  manish Outskrit
                                </strong>
                                <small>Test Address Abu Hail Dubai </small>
                              </span>
                              <a
                                href="javascript:void(0);"
                                className="edit d-block "
                                onclick="get_address_info('SlJ5mFep9se29s5wfL7oqw==')"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={26}
                                  height={26}
                                  fill="var(--gray-light)"
                                  className="bi bi-pencil  ms-0"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                </svg>
                              </a>
                            </span>
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="modal-footer d-flex flex-row justify-content-between align-items-center align-content-center">
                  <a
                    className=""
                    href="javascript:void(0);"
                    id="add_new_address_btn"
                  >
                    Add New Address
                  </a>
                  <button className="custom-btn theme-2" data-dismiss="modal">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-12 p-0 "
            id="all_below_btn_error_div"
            style={{ display: "none" }}
          >
            <label
              htmlFor="all_below_btn_error"
              id="all_below_btn_error"
              className="p-1 w-100 text-right error"
              style={{ fontSize: 14 }}
            >
              Some information is missing / invalid. Scroll up to see the
              errors.
            </label>
          </div>
          {/* Modal Airport To*/}
          <div
            className="modal fade"
            id="to_address"
            data-backdrop="static"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="to_addressLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header justify-content-start">
                  <a href="#" data-dismiss="modal" aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      n=""
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                  </a>
                  <h5 className="modal-title mb-0 ms-2" id="to_address_label">
                    Airport Drop
                  </h5>
                </div>
                <div className="modal-body gray-extra-light-bg">
                  <h5
                    className="fs-5 text-center mb-3 text-purple"
                    id="to_address_title"
                  >
                    Select Drop Location
                  </h5>
                  <div className="horizontal_listing airport_list location">
                    <div className="row">
                      <div className="col-12">
                        <fieldset className="checkbox-group d-flex flex-row justify-content-between align-items-start align-content-start">
                          <div className="checkbox to_address">
                            <label className="checkbox-wrapper">
                              <input
                                name="airport_address"
                                type="radio"
                                airport_name="Airport"
                                state_id={2}
                                airport_address="Dubai International Airport (DXB)"
                                defaultValue="B55rZxxYvczWJ8E9uzf41Q=="
                                onclick="get_payment_info('2', '', 'B55rZxxYvczWJ8E9uzf41Q==', '', '', '');"
                                className="checkbox-input select_airport"
                                autoComplete="off"
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/airport.png" />
                                </span>
                                <span className="checkbox-label">
                                  <strong className="airport_name">
                                    Dubai International Airport (DXB)
                                  </strong>
                                  <small />
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="checkbox to_address">
                            <label className="checkbox-wrapper">
                              <input
                                name="airport_address"
                                type="radio"
                                airport_name="Airport"
                                state_id={2}
                                airport_address="Dubai World Central - Al Maktoum International Airport (DWC)"
                                defaultValue="ejpVZs364c/ARQ0orFb+Ag=="
                                onclick="get_payment_info('2', '', 'ejpVZs364c/ARQ0orFb+Ag==', '', '', '');"
                                className="checkbox-input select_airport"
                                autoComplete="off"
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/airport.png" />
                                </span>
                                <span className="checkbox-label">
                                  <strong className="airport_name">
                                    Dubai World Central - Al Maktoum
                                    International Airport (DWC)
                                  </strong>
                                  <small />
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="checkbox to_address">
                            <label className="checkbox-wrapper">
                              <input
                                name="airport_address"
                                type="radio"
                                airport_name="Airport"
                                state_id={1}
                                airport_address="Abu Dhabi International Airport (AUH)"
                                defaultValue="PnRE7/Lx3czgtgstvi5ttw=="
                                onclick="get_payment_info('2', '', 'PnRE7/Lx3czgtgstvi5ttw==', '', '', '');"
                                className="checkbox-input select_airport"
                                autoComplete="off"
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/airport.png" />
                                </span>
                                <span className="checkbox-label">
                                  <strong className="airport_name">
                                    Abu Dhabi International Airport (AUH)
                                  </strong>
                                  <small />
                                </span>
                              </span>
                            </label>
                          </div>
                          <div className="checkbox to_address">
                            <label className="checkbox-wrapper">
                              <input
                                name="airport_address"
                                type="radio"
                                airport_name="Airport"
                                state_id={3}
                                airport_address="Sharjah Airport (SHJ)"
                                defaultValue="xo/fMcaDVdDuanxa45vA3Q=="
                                onclick="get_payment_info('2', '', 'xo/fMcaDVdDuanxa45vA3Q==', '', '', '');"
                                className="checkbox-input select_airport"
                                autoComplete="off"
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/airport.png" />
                                </span>
                                <span className="checkbox-label">
                                  <strong className="airport_name">
                                    Sharjah Airport (SHJ)
                                  </strong>
                                  <small />
                                </span>
                              </span>
                            </label>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Nick Name */}
          <div
            className="modal fade"
            id="add_new_address"
            tabIndex={-1}
            data-backdrop="static"
            role="dialog"
            aria-labelledby="add_new_addressLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header justify-content-start">
                  <a href="#" data-dismiss="modal" aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                  </a>
                  <h5
                    className="modal-title mb-0 ml-2"
                    id="add_new_addressLabel"
                  >
                    Address
                  </h5>
                  <button
                    className="btn-close"
                    data-bs-target="#from_address"
                    data-bs-toggle="modal"
                    data-dismiss="modal"
                  />
                </div>
                <div className="modal-body">
                  <form
                    action="https://emiratesnbdbenefits.thriwe.com/airport-transfer"
                    id="add_address_form"
                    className="form"
                    method="post"
                    acceptCharset="utf-8"
                    noValidate="novalidate"
                  >
                    <input
                      type="hidden"
                      name="csrf_form_name"
                      defaultValue="ed43dec8df7045ec8783d923bf626b4e"
                      autoComplete="off"
                    />
                    <div className="common-form p-0 border-0">
                      <div className="row g-3">
                        <div className="col-12 form-inti">
                          <div className="form-group ">
                            <div className="icon">
                              <i className="fa fa-user" />
                            </div>
                            <input
                              type="text"
                              name="nick_name"
                              id="nick_name"
                              maxLength={20}
                              placeholder="Nick Name"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-12 form-inti">
                          <div className="form-group form-inti">
                            <div className="icon">
                              <i className="fa fa-map-marker" />
                            </div>
                            <input
                              type="text"
                              name="address"
                              id="address"
                              maxLength={150}
                              placeholder="Address"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-12 form-inti">
                          <div className="form-group form-inti">
                            <div className="icon">
                              <i className="fa fa-building" />
                            </div>
                            <select
                              className="form-select"
                              id="state_id"
                              name="state_id"
                            >
                              <option selected="" disabled="">
                                Select Emirates
                              </option>
                              <option value={1}>Abu Dhabi</option>
                              <option value={2}>Dubai</option>
                              <option value={3}>Sharjah</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 form-inti">
                          <div className="form-group form-inti">
                            <div className="icon">
                              <i className="fas fa-landmark" />
                            </div>
                            <select
                              className="form-select"
                              id="city_id"
                              name="city_id"
                            >
                              <option value="">Select Region</option>
                              <option value={1} state-id={1}>
                                Abu Al Abyad
                              </option>
                              <option value={54} state-id={2}>
                                Abu Dabhi Marina
                              </option>
                              <option value={55} state-id={2}>
                                Abu Hail
                              </option>
                              <option value={56} state-id={2}>
                                Abu Saghara
                              </option>
                              <option value={272} state-id={3}>
                                Abu Shagara
                              </option>
                              <option value={57} state-id={2}>
                                Academic City
                              </option>
                              <option value={58} state-id={2}>
                                Ain Al-Faida
                              </option>
                              <option value={59} state-id={2}>
                                Airport Free Zone
                              </option>
                              <option value={60} state-id={2}>
                                Airport Road
                              </option>
                              <option value={61} state-id={2}>
                                Ajman Industrial Area
                              </option>
                              <option value={63} state-id={2}>
                                Al Ain Mall
                              </option>
                              <option value={64} state-id={2}>
                                Al Aman
                              </option>
                              <option value={65} state-id={2}>
                                Al Awir
                              </option>
                              <option value={66} state-id={2}>
                                Al badaa
                              </option>
                              <option value={62} state-id={2}>
                                Al Barari
                              </option>
                              <option value={67} state-id={2}>
                                Al Barsha
                              </option>
                              <option value={68} state-id={2}>
                                Al Bateen
                              </option>
                              <option value={2} state-id={1}>
                                Al Bateen
                              </option>
                              <option value={3} state-id={1}>
                                Al Danah
                              </option>
                              <option value={4} state-id={1}>
                                Al Dar HQ Building
                              </option>
                              <option value={69} state-id={2}>
                                Al Dhafra
                              </option>
                              <option value={70} state-id={2}>
                                Al Fahidi
                              </option>
                              <option value={71} state-id={2}>
                                Al Falah
                              </option>
                              <option value={72} state-id={2}>
                                Al Furjan
                              </option>
                              <option value={73} state-id={2}>
                                Al Garhoud
                              </option>
                              <option value={74} state-id={2}>
                                Al Ghurair
                              </option>
                              <option value={75} state-id={2}>
                                Al Ghurair Center
                              </option>
                              <option value={273} state-id={3}>
                                Al Ghuwair
                              </option>
                              <option value={76} state-id={2}>
                                Al Ghuwair
                              </option>
                              <option value={77} state-id={2}>
                                Al Hamra
                              </option>
                              <option value={78} state-id={2}>
                                Al Hili
                              </option>
                              <option value={79} state-id={2}>
                                Al Humrah
                              </option>
                              <option value={80} state-id={2}>
                                Al Jaddaf
                              </option>
                              <option value={274} state-id={3}>
                                Al Jawazat
                              </option>
                              <option value={81} state-id={2}>
                                Al Karama
                              </option>
                              <option value={6} state-id={1}>
                                Al Karamah
                              </option>
                              <option value={82} state-id={2}>
                                Al Karamah
                              </option>
                              <option value={83} state-id={2}>
                                Al Khabaisi
                              </option>
                              <option value={84} state-id={2}>
                                Al Khabisi
                              </option>
                              <option value={85} state-id={2}>
                                Al Khaleej Al Arabi St
                              </option>
                              <option value={7} state-id={1}>
                                Al Khalidiya
                              </option>
                              <option value={86} state-id={2}>
                                Al Khalidiya
                              </option>
                              <option value={275} state-id={3}>
                                Al Khan
                              </option>
                              <option value={87} state-id={2}>
                                Al Khan Road
                              </option>
                              <option value={8} state-id={1}>
                                Al Khatam
                              </option>
                              <option value={88} state-id={2}>
                                Al Khour
                              </option>
                              <option value={9} state-id={1}>
                                Al Khubeirah
                              </option>
                              <option value={89} state-id={2}>
                                Al Maarid
                              </option>
                              <option value={90} state-id={2}>
                                Al Madina Al Riyadiya
                              </option>
                              <option value={10} state-id={1}>
                                Al Madinat Al Riyadiya
                              </option>
                              <option value={11} state-id={1}>
                                Al Mafraq
                              </option>
                              <option value={91} state-id={2}>
                                Al Mahatah
                              </option>
                              <option value={276} state-id={3}>
                                Al Majaz
                              </option>
                              <option value={92} state-id={2}>
                                Al MajazÂ
                              </option>
                              <option value={93} state-id={2}>
                                Al Mamzar
                              </option>
                              <option value={94} state-id={2}>
                                Al Maqam
                              </option>
                              <option value={95} state-id={2}>
                                Al Maqtaa
                              </option>
                              <option value={12} state-id={1}>
                                Al Maqtaa
                              </option>
                              <option value={277} state-id={3}>
                                Al Mareija
                              </option>
                              <option value={96} state-id={2}>
                                Al Markaziya
                              </option>
                              <option value={13} state-id={1}>
                                Al Markaziya
                              </option>
                              <option value={14} state-id={1}>
                                Al Markaziyah
                              </option>
                              <option value={97} state-id={2}>
                                Al Maryah Island
                              </option>
                              <option value={15} state-id={1}>
                                Al Mina
                              </option>
                              <option value={16} state-id={1}>
                                Al Mirfa
                              </option>
                              <option value={278} state-id={3}>
                                Al Mirgab
                              </option>
                              <option value={98} state-id={2}>
                                Al Mizhar
                              </option>
                              <option value={17} state-id={1}>
                                Al Muhairy
                              </option>
                              <option value={279} state-id={3}>
                                Al Mujarrah
                              </option>
                              <option value={99} state-id={2}>
                                Al Muraqqabat
                              </option>
                              <option value={18} state-id={1}>
                                Al Mushrif
                              </option>
                              <option value={100} state-id={2}>
                                Al Mushrif
                              </option>
                              <option value={280} state-id={3}>
                                Al Nabba
                              </option>
                              <option value={281} state-id={3}>
                                Al Nahda
                              </option>
                              <option value={101} state-id={2}>
                                Al Nahda
                              </option>
                              <option value={19} state-id={1}>
                                Al Nahyan
                              </option>
                              <option value={102} state-id={2}>
                                Al Nahyan
                              </option>
                              <option value={103} state-id={2}>
                                Al Nakheel
                              </option>
                              <option value={104} state-id={2}>
                                Al Nasseriya
                              </option>
                              <option value={105} state-id={2}>
                                Al Nuaimiyah
                              </option>
                              <option value={282} state-id={3}>
                                Al Nud
                              </option>
                              <option value={106} state-id={2}>
                                Al Qouz
                              </option>
                              <option value={283} state-id={3}>
                                Al Qulayaa
                              </option>
                              <option value={107} state-id={2}>
                                Al Qurm
                              </option>
                              <option value={108} state-id={2}>
                                Al Qusais
                              </option>
                              <option value={20} state-id={1}>
                                Al Raha
                              </option>
                              <option value={109} state-id={2}>
                                Al Raha
                              </option>
                              <option value={21} state-id={1}>
                                Al Rahba
                              </option>
                              <option value={110} state-id={2}>
                                Al Ras Al Khadar
                              </option>
                              <option value={111} state-id={2}>
                                Al Rashidiya
                              </option>
                              <option value={22} state-id={1}>
                                Al Rawdha Area
                              </option>
                              <option value={23} state-id={1}>
                                Al Reef
                              </option>
                              <option value={24} state-id={1}>
                                Al Reem Island
                              </option>
                              <option value={25} state-id={1}>
                                Al Remah
                              </option>
                              <option value={284} state-id={3}>
                                Al Rifah
                              </option>
                              <option value={112} state-id={2}>
                                Al Rigga
                              </option>
                              <option value={113} state-id={2}>
                                Al Rolla
                              </option>
                              <option value={114} state-id={2}>
                                Al Rumailah
                              </option>
                              <option value={116} state-id={2}>
                                Al Safa
                              </option>
                              <option value={26} state-id={1}>
                                Al samha
                              </option>
                              <option value={117} state-id={2}>
                                Al Sanaiya
                              </option>
                              <option value={118} state-id={2}>
                                Al Sarooj
                              </option>
                              <option value={119} state-id={2}>
                                Al Satwa
                              </option>
                              <option value={285} state-id={3}>
                                Al Seef
                              </option>
                              <option value={120} state-id={2}>
                                Al Shahama
                              </option>
                              <option value={27} state-id={1}>
                                Al Shahama
                              </option>
                              <option value={121} state-id={2}>
                                Al Shamkha
                              </option>
                              <option value={122} state-id={2}>
                                Al Sufouh
                              </option>
                              <option value={286} state-id={3}>
                                Al Taawun
                              </option>
                              <option value={28} state-id={1}>
                                Al Wahda
                              </option>
                              <option value={123} state-id={2}>
                                Al Warqa
                              </option>
                              <option value={124} state-id={2}>
                                Al Wathba
                              </option>
                              <option value={287} state-id={3}>
                                Al Yarmook
                              </option>
                              <option value={125} state-id={2}>
                                Al Zaab
                              </option>
                              <option value={29} state-id={1}>
                                Al Zahiyah
                              </option>
                              <option value={126} state-id={2}>
                                Arabian Ranches
                              </option>
                              <option value={30} state-id={1}>
                                Baniyas
                              </option>
                              <option value={127} state-id={2}>
                                Baniyas Tower
                              </option>
                              <option value={128} state-id={2}>
                                Barsha
                              </option>
                              <option value={129} state-id={2}>
                                Bawadi Mall
                              </option>
                              <option value={130} state-id={2}>
                                Buhaira Corniche
                              </option>
                              <option value={131} state-id={2}>
                                Buheirah Corniche
                              </option>
                              <option value={132} state-id={2}>
                                Bur Dubai
                              </option>
                              <option value={133} state-id={2}>
                                Business Bay
                              </option>
                              <option value={134} state-id={2}>
                                Bussiness Bay
                              </option>
                              <option value={32} state-id={1}>
                                Central Market
                              </option>
                              <option value={135} state-id={2}>
                                Dafan Al Khor
                              </option>
                              <option value={136} state-id={2}>
                                Deira
                              </option>
                              <option value={137} state-id={2}>
                                Deira City Centre
                              </option>
                              <option value={138} state-id={2}>
                                Deira City Centre Area
                              </option>
                              <option value={139} state-id={2}>
                                DIFC
                              </option>
                              <option value={140} state-id={2}>
                                DIP
                              </option>
                              <option value={141} state-id={2}>
                                Discovery gardens
                              </option>
                              <option value={142} state-id={2}>
                                Downtown
                              </option>
                              <option value={143} state-id={2}>
                                Downtown Dubai
                              </option>
                              <option value={144} state-id={2}>
                                Dubai - Al Ain Road
                              </option>
                              <option value={145} state-id={2}>
                                Dubai Al-Ain Road
                              </option>
                              <option value={146} state-id={2}>
                                Dubai Festival City
                              </option>
                              <option value={147} state-id={2}>
                                Dubai Hills
                              </option>
                              <option value={148} state-id={2}>
                                Dubai International Airport
                              </option>
                              <option value={149} state-id={2}>
                                Dubai International Airport Area
                              </option>
                              <option value={150} state-id={2}>
                                Dubai Internet City
                              </option>
                              <option value={152} state-id={2}>
                                Dubai Knowledge Village
                              </option>
                              <option value={153} state-id={2}>
                                Dubai land
                              </option>
                              <option value={154} state-id={2}>
                                Dubai Logistics City
                              </option>
                              <option value={155} state-id={2}>
                                Dubai Mall
                              </option>
                              <option value={156} state-id={2}>
                                Dubai Marina
                              </option>
                              <option value={157} state-id={2}>
                                Dubai Media City
                              </option>
                              <option value={158} state-id={2}>
                                Dubai Motor City
                              </option>
                              <option value={159} state-id={2}>
                                Dubai Silicon Oasis
                              </option>
                              <option value={160} state-id={2}>
                                Dubai South
                              </option>
                              <option value={161} state-id={2}>
                                Dubai Sports City
                              </option>
                              <option value={162} state-id={2}>
                                Dubai Studio City
                              </option>
                              <option value={163} state-id={2}>
                                Dubai World Central
                              </option>
                              <option value={164} state-id={2}>
                                Dubai-Al Ain Road
                              </option>
                              <option value={165} state-id={2}>
                                Eastern Mangroves
                              </option>
                              <option value={166} state-id={2}>
                                Embassies District
                              </option>
                              <option value={33} state-id={1}>
                                Embassies District
                              </option>
                              <option value={167} state-id={2}>
                                Emirates Hill
                              </option>
                              <option value={168} state-id={2}>
                                Emirates Hills
                              </option>
                              <option value={169} state-id={2}>
                                Emirates Road
                              </option>
                              <option value={170} state-id={2}>
                                Festival City
                              </option>
                              <option value={171} state-id={2}>
                                Fishing Harbor
                              </option>
                              <option value={172} state-id={2}>
                                Fujairah City
                              </option>
                              <option value={173} state-id={2}>
                                Fujairha City
                              </option>
                              <option value={174} state-id={2}>
                                Garhoud
                              </option>
                              <option value={175} state-id={2}>
                                Gayathi
                              </option>
                              <option value={34} state-id={1}>
                                Gharbia Region
                              </option>
                              <option value={176} state-id={2}>
                                Haleefat
                              </option>
                              <option value={177} state-id={2}>
                                Halwan
                              </option>
                              <option value={288} state-id={3}>
                                Halwan Suburb
                              </option>
                              <option value={35} state-id={1}>
                                Hamdan Street
                              </option>
                              <option value={179} state-id={2}>
                                Hazza Bin Zayed Street
                              </option>
                              <option value={180} state-id={2}>
                                Ibn Battuta
                              </option>
                              <option value={181} state-id={2}>
                                IMPZ
                              </option>
                              <option value={289} state-id={3}>
                                Industrial Area
                              </option>
                              <option value={182} state-id={2}>
                                Industrial Area
                              </option>
                              <option value={183} state-id={2}>
                                International City
                              </option>
                              <option value={184} state-id={2}>
                                Jafza
                              </option>
                              <option value={185} state-id={2}>
                                Jazira Al Hamra
                              </option>
                              <option value={186} state-id={2}>
                                JBR
                              </option>
                              <option value={187} state-id={2}>
                                Jebel Ali
                              </option>
                              <option value={188} state-id={2}>
                                Jebel Ali Village
                              </option>
                              <option value={189} state-id={2}>
                                JLT
                              </option>
                              <option value={190} state-id={2}>
                                Jumeirah
                              </option>
                              <option value={191} state-id={2}>
                                Jumeirah 3
                              </option>
                              <option value={192} state-id={2}>
                                Jumeirah Beach Residence
                              </option>
                              <option value={193} state-id={2}>
                                Jumeirah Beach Road
                              </option>
                              <option value={194} state-id={2}>
                                Jumeirah Gold Estates
                              </option>
                              <option value={195} state-id={2}>
                                Jumeirah heights
                              </option>
                              <option value={196} state-id={2}>
                                Jumeirah Islands
                              </option>
                              <option value={197} state-id={2}>
                                Jumeirah Lake Towers
                              </option>
                              <option value={198} state-id={2}>
                                Jumeirah Lake Towers(JLT)
                              </option>
                              <option value={199} state-id={2}>
                                Jumeirah Lakes Towers
                              </option>
                              <option value={200} state-id={2}>
                                Jumeirah Park
                              </option>
                              <option value={201} state-id={2}>
                                Jumeirah Village Circle
                              </option>
                              <option value={202} state-id={2}>
                                Jumeirah Village Triangle
                              </option>
                              <option value={203} state-id={2}>
                                Kahlifa Park
                              </option>
                              <option value={204} state-id={2}>
                                Kalifa City
                              </option>
                              <option value={205} state-id={2}>
                                Karama
                              </option>
                              <option value={206} state-id={2}>
                                Khalid Bin Al Waleed Road
                              </option>
                              <option value={207} state-id={2}>
                                Khalidiya
                              </option>
                              <option value={208} state-id={2}>
                                Khalifa city
                              </option>
                              <option value={36} state-id={1}>
                                Khalifa City
                              </option>
                              <option value={209} state-id={2}>
                                Khalifa Park
                              </option>
                              <option value={210} state-id={2}>
                                Khalifa Park Area
                              </option>
                              <option value={211} state-id={2}>
                                Madina Mall
                              </option>
                              <option value={212} state-id={2}>
                                Madinat Jumeirah
                              </option>
                              <option value={37} state-id={1}>
                                Madinat Zayed
                              </option>
                              <option value={213} state-id={2}>
                                Mall of the Emirates
                              </option>
                              <option value={214} state-id={2}>
                                Mankhool
                              </option>
                              <option value={215} state-id={2}>
                                Marina Mall
                              </option>
                              <option value={216} state-id={2}>
                                Marina Village
                              </option>
                              <option value={38} state-id={1}>
                                Marina Village
                              </option>
                              <option value={39} state-id={1}>
                                Masdar City
                              </option>
                              <option value={217} state-id={2}>
                                Masdar City
                              </option>
                              <option value={218} state-id={2}>
                                Mazyad Mall
                              </option>
                              <option value={219} state-id={2}>
                                Meadows
                              </option>
                              <option value={220} state-id={2}>
                                Meena Bazar
                              </option>
                              <option value={40} state-id={1}>
                                Mezairaa
                              </option>
                              <option value={221} state-id={2}>
                                Mira Oasis
                              </option>
                              <option value={222} state-id={2}>
                                Mirdif
                              </option>
                              <option value={223} state-id={2}>
                                Mizhar
                              </option>
                              <option value={224} state-id={2}>
                                Motor City
                              </option>
                              <option value={225} state-id={2}>
                                Mudon
                              </option>
                              <option value={226} state-id={2}>
                                Muhaisnah
                              </option>
                              <option value={41} state-id={1}>
                                Muroor
                              </option>
                              <option value={227} state-id={2}>
                                Muroor Road
                              </option>
                              <option value={42} state-id={1}>
                                Musaffah
                              </option>
                              <option value={228} state-id={2}>
                                Mushairif Commercial
                              </option>
                              <option value={43} state-id={1}>
                                Mushrif
                              </option>
                              <option value={44} state-id={1}>
                                Mushrif Mall
                              </option>
                              <option value={45} state-id={1}>
                                Mussafah
                              </option>
                              <option value={229} state-id={2}>
                                Mussaffah
                              </option>
                              <option value={230} state-id={2}>
                                Nad AL Sheba
                              </option>
                              <option value={231} state-id={2}>
                                Nadd Al Hamar
                              </option>
                              <option value={46} state-id={1}>
                                Najda
                              </option>
                              <option value={232} state-id={2}>
                                Najda Area
                              </option>
                              <option value={233} state-id={2}>
                                Officer City
                              </option>
                              <option value={47} state-id={1}>
                                Old airport road
                              </option>
                              <option value={234} state-id={2}>
                                Oud Mehta
                              </option>
                              <option value={235} state-id={2}>
                                Oud Metha
                              </option>
                              <option value={236} state-id={2}>
                                Palm Jumeirah
                              </option>
                              <option value={237} state-id={2}>
                                Qusais
                              </option>
                              <option value={238} state-id={2}>
                                Ras Al Khor
                              </option>
                              <option value={239} state-id={2}>
                                Rashidiya
                              </option>
                              <option value={240} state-id={2}>
                                Remraam
                              </option>
                              <option value={290} state-id={3}>
                                Rolla square
                              </option>
                              <option value={48} state-id={1}>
                                Saadiyat Island
                              </option>
                              <option value={291} state-id={3}>
                                Saif Zone
                              </option>
                              <option value={241} state-id={2}>
                                Samha 1
                              </option>
                              <option value={242} state-id={2}>
                                Samha 2
                              </option>
                              <option value={49} state-id={1}>
                                Samha1
                              </option>
                              <option value={50} state-id={1}>
                                Samha2
                              </option>
                              <option value={243} state-id={2}>
                                Satwa
                              </option>
                              <option value={244} state-id={2}>
                                Shahaba
                              </option>
                              <option value={245} state-id={2}>
                                Shaikh Zayed Road
                              </option>
                              <option value={246} state-id={2}>
                                Sharjah City
                              </option>
                              <option value={247} state-id={2}>
                                Sharjah City Centre
                              </option>
                              <option value={248} state-id={2}>
                                Sheikh Rashid Bin Saeed St
                              </option>
                              <option value={249} state-id={2}>
                                Sheikh Zayed Road
                              </option>
                              <option value={250} state-id={2}>
                                Silicon Oasis
                              </option>
                              <option value={251} state-id={2}>
                                Springs
                              </option>
                              <option value={252} state-id={2}>
                                Sustainable City
                              </option>
                              <option value={253} state-id={2}>
                                Technopark
                              </option>
                              <option value={254} state-id={2}>
                                TECOM
                              </option>
                              <option value={255} state-id={2}>
                                The Greens
                              </option>
                              <option value={256} state-id={2}>
                                The Palm Jumeirah
                              </option>
                              <option value={257} state-id={2}>
                                Tourist Club Area
                              </option>
                              <option value={51} state-id={1}>
                                Tourist Club Area
                              </option>
                              <option value={258} state-id={2}>
                                Tourist Club Area (Al Zahiyah)
                              </option>
                              <option value={52} state-id={1}>
                                Tourist Club Area(Al Zahiyah)
                              </option>
                              <option value={259} state-id={2}>
                                Town Square
                              </option>
                              <option value={260} state-id={2}>
                                Town Square, Al Qudra Road
                              </option>
                              <option value={261} state-id={2}>
                                Trade Centre Area
                              </option>
                              <option value={262} state-id={2}>
                                Umm Al Nar
                              </option>
                              <option value={263} state-id={2}>
                                Umm Hurair
                              </option>
                              <option value={264} state-id={2}>
                                Umm huriar
                              </option>
                              <option value={265} state-id={2}>
                                Umm Suqeim
                              </option>
                              <option value={266} state-id={2}>
                                Umm Suqueim
                              </option>
                              <option value={292} state-id={3}>
                                Universary City
                              </option>
                              <option value={293} state-id={3}>
                                University City
                              </option>
                              <option value={267} state-id={2}>
                                University City
                              </option>
                              <option value={268} state-id={2}>
                                Wafi Mall
                              </option>
                              <option value={294} state-id={3}>
                                Wasit Suburb
                              </option>
                              <option value={269} state-id={2}>
                                Yarmouk
                              </option>
                              <option value={270} state-id={2}>
                                Yas Island
                              </option>
                              <option value={53} state-id={1}>
                                YasIsland
                              </option>
                              <option value={271} state-id={2}>
                                Zabeel
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 form-inti hide_zip_vik">
                          <div className="form-group form-inti">
                            <div className="icon">
                              <i className="fas fa-flag" />
                            </div>
                            <input
                              type="text"
                              defaultValue={111111}
                              name="pincode"
                              id="pincode"
                              minLength={6}
                              maxLength={6}
                              placeholder="Zipcode"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer ">
                      <div className="col-md-12 text-center p-0">
                        <button
                          type="button"
                          className="custom-btn theme-2"
                          id="add_address_btn"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <label
                        htmlFor="add_address_form-error"
                        id="add_address_form_error"
                        className="p-1 w-100 text-center"
                      />
                    </div>
                  </form>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="edit_address_modal"
            tabIndex={-1}
            data-backdrop="static"
            role="dialog"
            aria-labelledby="edit_address_modalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header justify-content-start">
                  <a href="#" data-dismiss="modal" aria-label="Close">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={30}
                      height={30}
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                  </a>
                  <h5
                    className="modal-title mb-0 ml-2"
                    id="edit_address_modalLabel"
                  >
                    Address
                  </h5>
                  <button
                    className="btn-close"
                    data-bs-target="#from_address"
                    data-bs-toggle="modal"
                    data-dismiss="modal"
                  />
                </div>
                <div className="modal-body">
                  <form
                    action="https://emiratesnbdbenefits.thriwe.com/airport-transfer"
                    id="edit_address_form"
                    className="form"
                    method="post"
                    acceptCharset="utf-8"
                    noValidate="novalidate"
                  >
                    <input
                      type="hidden"
                      name="csrf_form_name"
                      defaultValue="ed43dec8df7045ec8783d923bf626b4e"
                      autoComplete="off"
                    />
                    <div className="common-form p-0 border-0">
                      <div className="row g-3">
                        <div className="col-12 form-inti">
                          <div className="form-group">
                            <div className="icon">
                              <i className="fa fa-user" />
                            </div>
                            <input
                              type="text"
                              name="edit_nick_name"
                              id="edit_nick_name"
                              maxLength={20}
                              placeholder="Nick Name"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-12 form-inti">
                          <div className="form-group">
                            <div className="icon">
                              <i className="fa fa-building" />
                            </div>
                            <input
                              type="text"
                              name="edit_address"
                              id="edit_address"
                              maxLength={150}
                              placeholder="Address"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                        <div className="col-12 form-inti">
                          <div className="form-group">
                            <div className="icon">
                              <i className="fa fa-building" />
                            </div>
                            <select
                              className="form-select"
                              id="edit_state_id"
                              name="edit_state_id"
                            >
                              <option selected="" disabled="">
                                Select Emirates
                              </option>
                              <option value={1}>Abu Dhabi</option>
                              <option value={2}>Dubai</option>
                              <option value={3}>Sharjah</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 form-inti">
                          <div className="form-group">
                            <div className="icon">
                              <i className="fa fa-building" />
                            </div>
                            <select
                              className="form-select"
                              id="edit_city_id"
                              name="edit_city_id"
                            >
                              <option value="">Select Region</option>
                              <option value={1} state-id={1}>
                                Abu Al Abyad
                              </option>
                              <option value={54} state-id={2}>
                                Abu Dabhi Marina
                              </option>
                              <option value={55} state-id={2}>
                                Abu Hail
                              </option>
                              <option value={56} state-id={2}>
                                Abu Saghara
                              </option>
                              <option value={272} state-id={3}>
                                Abu Shagara
                              </option>
                              <option value={57} state-id={2}>
                                Academic City
                              </option>
                              <option value={58} state-id={2}>
                                Ain Al-Faida
                              </option>
                              <option value={59} state-id={2}>
                                Airport Free Zone
                              </option>
                              <option value={60} state-id={2}>
                                Airport Road
                              </option>
                              <option value={61} state-id={2}>
                                Ajman Industrial Area
                              </option>
                              <option value={63} state-id={2}>
                                Al Ain Mall
                              </option>
                              <option value={64} state-id={2}>
                                Al Aman
                              </option>
                              <option value={65} state-id={2}>
                                Al Awir
                              </option>
                              <option value={66} state-id={2}>
                                Al badaa
                              </option>
                              <option value={62} state-id={2}>
                                Al Barari
                              </option>
                              <option value={67} state-id={2}>
                                Al Barsha
                              </option>
                              <option value={68} state-id={2}>
                                Al Bateen
                              </option>
                              <option value={2} state-id={1}>
                                Al Bateen
                              </option>
                              <option value={3} state-id={1}>
                                Al Danah
                              </option>
                              <option value={4} state-id={1}>
                                Al Dar HQ Building
                              </option>
                              <option value={69} state-id={2}>
                                Al Dhafra
                              </option>
                              <option value={70} state-id={2}>
                                Al Fahidi
                              </option>
                              <option value={71} state-id={2}>
                                Al Falah
                              </option>
                              <option value={72} state-id={2}>
                                Al Furjan
                              </option>
                              <option value={73} state-id={2}>
                                Al Garhoud
                              </option>
                              <option value={74} state-id={2}>
                                Al Ghurair
                              </option>
                              <option value={75} state-id={2}>
                                Al Ghurair Center
                              </option>
                              <option value={273} state-id={3}>
                                Al Ghuwair
                              </option>
                              <option value={76} state-id={2}>
                                Al Ghuwair
                              </option>
                              <option value={77} state-id={2}>
                                Al Hamra
                              </option>
                              <option value={78} state-id={2}>
                                Al Hili
                              </option>
                              <option value={79} state-id={2}>
                                Al Humrah
                              </option>
                              <option value={80} state-id={2}>
                                Al Jaddaf
                              </option>
                              <option value={274} state-id={3}>
                                Al Jawazat
                              </option>
                              <option value={81} state-id={2}>
                                Al Karama
                              </option>
                              <option value={6} state-id={1}>
                                Al Karamah
                              </option>
                              <option value={82} state-id={2}>
                                Al Karamah
                              </option>
                              <option value={83} state-id={2}>
                                Al Khabaisi
                              </option>
                              <option value={84} state-id={2}>
                                Al Khabisi
                              </option>
                              <option value={85} state-id={2}>
                                Al Khaleej Al Arabi St
                              </option>
                              <option value={7} state-id={1}>
                                Al Khalidiya
                              </option>
                              <option value={86} state-id={2}>
                                Al Khalidiya
                              </option>
                              <option value={275} state-id={3}>
                                Al Khan
                              </option>
                              <option value={87} state-id={2}>
                                Al Khan Road
                              </option>
                              <option value={8} state-id={1}>
                                Al Khatam
                              </option>
                              <option value={88} state-id={2}>
                                Al Khour
                              </option>
                              <option value={9} state-id={1}>
                                Al Khubeirah
                              </option>
                              <option value={89} state-id={2}>
                                Al Maarid
                              </option>
                              <option value={90} state-id={2}>
                                Al Madina Al Riyadiya
                              </option>
                              <option value={10} state-id={1}>
                                Al Madinat Al Riyadiya
                              </option>
                              <option value={11} state-id={1}>
                                Al Mafraq
                              </option>
                              <option value={91} state-id={2}>
                                Al Mahatah
                              </option>
                              <option value={276} state-id={3}>
                                Al Majaz
                              </option>
                              <option value={92} state-id={2}>
                                Al MajazÂ
                              </option>
                              <option value={93} state-id={2}>
                                Al Mamzar
                              </option>
                              <option value={94} state-id={2}>
                                Al Maqam
                              </option>
                              <option value={95} state-id={2}>
                                Al Maqtaa
                              </option>
                              <option value={12} state-id={1}>
                                Al Maqtaa
                              </option>
                              <option value={277} state-id={3}>
                                Al Mareija
                              </option>
                              <option value={96} state-id={2}>
                                Al Markaziya
                              </option>
                              <option value={13} state-id={1}>
                                Al Markaziya
                              </option>
                              <option value={14} state-id={1}>
                                Al Markaziyah
                              </option>
                              <option value={97} state-id={2}>
                                Al Maryah Island
                              </option>
                              <option value={15} state-id={1}>
                                Al Mina
                              </option>
                              <option value={16} state-id={1}>
                                Al Mirfa
                              </option>
                              <option value={278} state-id={3}>
                                Al Mirgab
                              </option>
                              <option value={98} state-id={2}>
                                Al Mizhar
                              </option>
                              <option value={17} state-id={1}>
                                Al Muhairy
                              </option>
                              <option value={279} state-id={3}>
                                Al Mujarrah
                              </option>
                              <option value={99} state-id={2}>
                                Al Muraqqabat
                              </option>
                              <option value={18} state-id={1}>
                                Al Mushrif
                              </option>
                              <option value={100} state-id={2}>
                                Al Mushrif
                              </option>
                              <option value={280} state-id={3}>
                                Al Nabba
                              </option>
                              <option value={281} state-id={3}>
                                Al Nahda
                              </option>
                              <option value={101} state-id={2}>
                                Al Nahda
                              </option>
                              <option value={19} state-id={1}>
                                Al Nahyan
                              </option>
                              <option value={102} state-id={2}>
                                Al Nahyan
                              </option>
                              <option value={103} state-id={2}>
                                Al Nakheel
                              </option>
                              <option value={104} state-id={2}>
                                Al Nasseriya
                              </option>
                              <option value={105} state-id={2}>
                                Al Nuaimiyah
                              </option>
                              <option value={282} state-id={3}>
                                Al Nud
                              </option>
                              <option value={106} state-id={2}>
                                Al Qouz
                              </option>
                              <option value={283} state-id={3}>
                                Al Qulayaa
                              </option>
                              <option value={107} state-id={2}>
                                Al Qurm
                              </option>
                              <option value={108} state-id={2}>
                                Al Qusais
                              </option>
                              <option value={20} state-id={1}>
                                Al Raha
                              </option>
                              <option value={109} state-id={2}>
                                Al Raha
                              </option>
                              <option value={21} state-id={1}>
                                Al Rahba
                              </option>
                              <option value={110} state-id={2}>
                                Al Ras Al Khadar
                              </option>
                              <option value={111} state-id={2}>
                                Al Rashidiya
                              </option>
                              <option value={22} state-id={1}>
                                Al Rawdha Area
                              </option>
                              <option value={23} state-id={1}>
                                Al Reef
                              </option>
                              <option value={24} state-id={1}>
                                Al Reem Island
                              </option>
                              <option value={25} state-id={1}>
                                Al Remah
                              </option>
                              <option value={284} state-id={3}>
                                Al Rifah
                              </option>
                              <option value={112} state-id={2}>
                                Al Rigga
                              </option>
                              <option value={113} state-id={2}>
                                Al Rolla
                              </option>
                              <option value={114} state-id={2}>
                                Al Rumailah
                              </option>
                              <option value={116} state-id={2}>
                                Al Safa
                              </option>
                              <option value={26} state-id={1}>
                                Al samha
                              </option>
                              <option value={117} state-id={2}>
                                Al Sanaiya
                              </option>
                              <option value={118} state-id={2}>
                                Al Sarooj
                              </option>
                              <option value={119} state-id={2}>
                                Al Satwa
                              </option>
                              <option value={285} state-id={3}>
                                Al Seef
                              </option>
                              <option value={120} state-id={2}>
                                Al Shahama
                              </option>
                              <option value={27} state-id={1}>
                                Al Shahama
                              </option>
                              <option value={121} state-id={2}>
                                Al Shamkha
                              </option>
                              <option value={122} state-id={2}>
                                Al Sufouh
                              </option>
                              <option value={286} state-id={3}>
                                Al Taawun
                              </option>
                              <option value={28} state-id={1}>
                                Al Wahda
                              </option>
                              <option value={123} state-id={2}>
                                Al Warqa
                              </option>
                              <option value={124} state-id={2}>
                                Al Wathba
                              </option>
                              <option value={287} state-id={3}>
                                Al Yarmook
                              </option>
                              <option value={125} state-id={2}>
                                Al Zaab
                              </option>
                              <option value={29} state-id={1}>
                                Al Zahiyah
                              </option>
                              <option value={126} state-id={2}>
                                Arabian Ranches
                              </option>
                              <option value={30} state-id={1}>
                                Baniyas
                              </option>
                              <option value={127} state-id={2}>
                                Baniyas Tower
                              </option>
                              <option value={128} state-id={2}>
                                Barsha
                              </option>
                              <option value={129} state-id={2}>
                                Bawadi Mall
                              </option>
                              <option value={130} state-id={2}>
                                Buhaira Corniche
                              </option>
                              <option value={131} state-id={2}>
                                Buheirah Corniche
                              </option>
                              <option value={132} state-id={2}>
                                Bur Dubai
                              </option>
                              <option value={133} state-id={2}>
                                Business Bay
                              </option>
                              <option value={134} state-id={2}>
                                Bussiness Bay
                              </option>
                              <option value={32} state-id={1}>
                                Central Market
                              </option>
                              <option value={135} state-id={2}>
                                Dafan Al Khor
                              </option>
                              <option value={136} state-id={2}>
                                Deira
                              </option>
                              <option value={137} state-id={2}>
                                Deira City Centre
                              </option>
                              <option value={138} state-id={2}>
                                Deira City Centre Area
                              </option>
                              <option value={139} state-id={2}>
                                DIFC
                              </option>
                              <option value={140} state-id={2}>
                                DIP
                              </option>
                              <option value={141} state-id={2}>
                                Discovery gardens
                              </option>
                              <option value={142} state-id={2}>
                                Downtown
                              </option>
                              <option value={143} state-id={2}>
                                Downtown Dubai
                              </option>
                              <option value={144} state-id={2}>
                                Dubai - Al Ain Road
                              </option>
                              <option value={145} state-id={2}>
                                Dubai Al-Ain Road
                              </option>
                              <option value={146} state-id={2}>
                                Dubai Festival City
                              </option>
                              <option value={147} state-id={2}>
                                Dubai Hills
                              </option>
                              <option value={148} state-id={2}>
                                Dubai International Airport
                              </option>
                              <option value={149} state-id={2}>
                                Dubai International Airport Area
                              </option>
                              <option value={150} state-id={2}>
                                Dubai Internet City
                              </option>
                              <option value={152} state-id={2}>
                                Dubai Knowledge Village
                              </option>
                              <option value={153} state-id={2}>
                                Dubai land
                              </option>
                              <option value={154} state-id={2}>
                                Dubai Logistics City
                              </option>
                              <option value={155} state-id={2}>
                                Dubai Mall
                              </option>
                              <option value={156} state-id={2}>
                                Dubai Marina
                              </option>
                              <option value={157} state-id={2}>
                                Dubai Media City
                              </option>
                              <option value={158} state-id={2}>
                                Dubai Motor City
                              </option>
                              <option value={159} state-id={2}>
                                Dubai Silicon Oasis
                              </option>
                              <option value={160} state-id={2}>
                                Dubai South
                              </option>
                              <option value={161} state-id={2}>
                                Dubai Sports City
                              </option>
                              <option value={162} state-id={2}>
                                Dubai Studio City
                              </option>
                              <option value={163} state-id={2}>
                                Dubai World Central
                              </option>
                              <option value={164} state-id={2}>
                                Dubai-Al Ain Road
                              </option>
                              <option value={165} state-id={2}>
                                Eastern Mangroves
                              </option>
                              <option value={166} state-id={2}>
                                Embassies District
                              </option>
                              <option value={33} state-id={1}>
                                Embassies District
                              </option>
                              <option value={167} state-id={2}>
                                Emirates Hill
                              </option>
                              <option value={168} state-id={2}>
                                Emirates Hills
                              </option>
                              <option value={169} state-id={2}>
                                Emirates Road
                              </option>
                              <option value={170} state-id={2}>
                                Festival City
                              </option>
                              <option value={171} state-id={2}>
                                Fishing Harbor
                              </option>
                              <option value={172} state-id={2}>
                                Fujairah City
                              </option>
                              <option value={173} state-id={2}>
                                Fujairha City
                              </option>
                              <option value={174} state-id={2}>
                                Garhoud
                              </option>
                              <option value={175} state-id={2}>
                                Gayathi
                              </option>
                              <option value={34} state-id={1}>
                                Gharbia Region
                              </option>
                              <option value={176} state-id={2}>
                                Haleefat
                              </option>
                              <option value={177} state-id={2}>
                                Halwan
                              </option>
                              <option value={288} state-id={3}>
                                Halwan Suburb
                              </option>
                              <option value={35} state-id={1}>
                                Hamdan Street
                              </option>
                              <option value={179} state-id={2}>
                                Hazza Bin Zayed Street
                              </option>
                              <option value={180} state-id={2}>
                                Ibn Battuta
                              </option>
                              <option value={181} state-id={2}>
                                IMPZ
                              </option>
                              <option value={289} state-id={3}>
                                Industrial Area
                              </option>
                              <option value={182} state-id={2}>
                                Industrial Area
                              </option>
                              <option value={183} state-id={2}>
                                International City
                              </option>
                              <option value={184} state-id={2}>
                                Jafza
                              </option>
                              <option value={185} state-id={2}>
                                Jazira Al Hamra
                              </option>
                              <option value={186} state-id={2}>
                                JBR
                              </option>
                              <option value={187} state-id={2}>
                                Jebel Ali
                              </option>
                              <option value={188} state-id={2}>
                                Jebel Ali Village
                              </option>
                              <option value={189} state-id={2}>
                                JLT
                              </option>
                              <option value={190} state-id={2}>
                                Jumeirah
                              </option>
                              <option value={191} state-id={2}>
                                Jumeirah 3
                              </option>
                              <option value={192} state-id={2}>
                                Jumeirah Beach Residence
                              </option>
                              <option value={193} state-id={2}>
                                Jumeirah Beach Road
                              </option>
                              <option value={194} state-id={2}>
                                Jumeirah Gold Estates
                              </option>
                              <option value={195} state-id={2}>
                                Jumeirah heights
                              </option>
                              <option value={196} state-id={2}>
                                Jumeirah Islands
                              </option>
                              <option value={197} state-id={2}>
                                Jumeirah Lake Towers
                              </option>
                              <option value={198} state-id={2}>
                                Jumeirah Lake Towers(JLT)
                              </option>
                              <option value={199} state-id={2}>
                                Jumeirah Lakes Towers
                              </option>
                              <option value={200} state-id={2}>
                                Jumeirah Park
                              </option>
                              <option value={201} state-id={2}>
                                Jumeirah Village Circle
                              </option>
                              <option value={202} state-id={2}>
                                Jumeirah Village Triangle
                              </option>
                              <option value={203} state-id={2}>
                                Kahlifa Park
                              </option>
                              <option value={204} state-id={2}>
                                Kalifa City
                              </option>
                              <option value={205} state-id={2}>
                                Karama
                              </option>
                              <option value={206} state-id={2}>
                                Khalid Bin Al Waleed Road
                              </option>
                              <option value={207} state-id={2}>
                                Khalidiya
                              </option>
                              <option value={208} state-id={2}>
                                Khalifa city
                              </option>
                              <option value={36} state-id={1}>
                                Khalifa City
                              </option>
                              <option value={209} state-id={2}>
                                Khalifa Park
                              </option>
                              <option value={210} state-id={2}>
                                Khalifa Park Area
                              </option>
                              <option value={211} state-id={2}>
                                Madina Mall
                              </option>
                              <option value={212} state-id={2}>
                                Madinat Jumeirah
                              </option>
                              <option value={37} state-id={1}>
                                Madinat Zayed
                              </option>
                              <option value={213} state-id={2}>
                                Mall of the Emirates
                              </option>
                              <option value={214} state-id={2}>
                                Mankhool
                              </option>
                              <option value={215} state-id={2}>
                                Marina Mall
                              </option>
                              <option value={216} state-id={2}>
                                Marina Village
                              </option>
                              <option value={38} state-id={1}>
                                Marina Village
                              </option>
                              <option value={39} state-id={1}>
                                Masdar City
                              </option>
                              <option value={217} state-id={2}>
                                Masdar City
                              </option>
                              <option value={218} state-id={2}>
                                Mazyad Mall
                              </option>
                              <option value={219} state-id={2}>
                                Meadows
                              </option>
                              <option value={220} state-id={2}>
                                Meena Bazar
                              </option>
                              <option value={40} state-id={1}>
                                Mezairaa
                              </option>
                              <option value={221} state-id={2}>
                                Mira Oasis
                              </option>
                              <option value={222} state-id={2}>
                                Mirdif
                              </option>
                              <option value={223} state-id={2}>
                                Mizhar
                              </option>
                              <option value={224} state-id={2}>
                                Motor City
                              </option>
                              <option value={225} state-id={2}>
                                Mudon
                              </option>
                              <option value={226} state-id={2}>
                                Muhaisnah
                              </option>
                              <option value={41} state-id={1}>
                                Muroor
                              </option>
                              <option value={227} state-id={2}>
                                Muroor Road
                              </option>
                              <option value={42} state-id={1}>
                                Musaffah
                              </option>
                              <option value={228} state-id={2}>
                                Mushairif Commercial
                              </option>
                              <option value={43} state-id={1}>
                                Mushrif
                              </option>
                              <option value={44} state-id={1}>
                                Mushrif Mall
                              </option>
                              <option value={45} state-id={1}>
                                Mussafah
                              </option>
                              <option value={229} state-id={2}>
                                Mussaffah
                              </option>
                              <option value={230} state-id={2}>
                                Nad AL Sheba
                              </option>
                              <option value={231} state-id={2}>
                                Nadd Al Hamar
                              </option>
                              <option value={46} state-id={1}>
                                Najda
                              </option>
                              <option value={232} state-id={2}>
                                Najda Area
                              </option>
                              <option value={233} state-id={2}>
                                Officer City
                              </option>
                              <option value={47} state-id={1}>
                                Old airport road
                              </option>
                              <option value={234} state-id={2}>
                                Oud Mehta
                              </option>
                              <option value={235} state-id={2}>
                                Oud Metha
                              </option>
                              <option value={236} state-id={2}>
                                Palm Jumeirah
                              </option>
                              <option value={237} state-id={2}>
                                Qusais
                              </option>
                              <option value={238} state-id={2}>
                                Ras Al Khor
                              </option>
                              <option value={239} state-id={2}>
                                Rashidiya
                              </option>
                              <option value={240} state-id={2}>
                                Remraam
                              </option>
                              <option value={290} state-id={3}>
                                Rolla square
                              </option>
                              <option value={48} state-id={1}>
                                Saadiyat Island
                              </option>
                              <option value={291} state-id={3}>
                                Saif Zone
                              </option>
                              <option value={241} state-id={2}>
                                Samha 1
                              </option>
                              <option value={242} state-id={2}>
                                Samha 2
                              </option>
                              <option value={49} state-id={1}>
                                Samha1
                              </option>
                              <option value={50} state-id={1}>
                                Samha2
                              </option>
                              <option value={243} state-id={2}>
                                Satwa
                              </option>
                              <option value={244} state-id={2}>
                                Shahaba
                              </option>
                              <option value={245} state-id={2}>
                                Shaikh Zayed Road
                              </option>
                              <option value={246} state-id={2}>
                                Sharjah City
                              </option>
                              <option value={247} state-id={2}>
                                Sharjah City Centre
                              </option>
                              <option value={248} state-id={2}>
                                Sheikh Rashid Bin Saeed St
                              </option>
                              <option value={249} state-id={2}>
                                Sheikh Zayed Road
                              </option>
                              <option value={250} state-id={2}>
                                Silicon Oasis
                              </option>
                              <option value={251} state-id={2}>
                                Springs
                              </option>
                              <option value={252} state-id={2}>
                                Sustainable City
                              </option>
                              <option value={253} state-id={2}>
                                Technopark
                              </option>
                              <option value={254} state-id={2}>
                                TECOM
                              </option>
                              <option value={255} state-id={2}>
                                The Greens
                              </option>
                              <option value={256} state-id={2}>
                                The Palm Jumeirah
                              </option>
                              <option value={257} state-id={2}>
                                Tourist Club Area
                              </option>
                              <option value={51} state-id={1}>
                                Tourist Club Area
                              </option>
                              <option value={258} state-id={2}>
                                Tourist Club Area (Al Zahiyah)
                              </option>
                              <option value={52} state-id={1}>
                                Tourist Club Area(Al Zahiyah)
                              </option>
                              <option value={259} state-id={2}>
                                Town Square
                              </option>
                              <option value={260} state-id={2}>
                                Town Square, Al Qudra Road
                              </option>
                              <option value={261} state-id={2}>
                                Trade Centre Area
                              </option>
                              <option value={262} state-id={2}>
                                Umm Al Nar
                              </option>
                              <option value={263} state-id={2}>
                                Umm Hurair
                              </option>
                              <option value={264} state-id={2}>
                                Umm huriar
                              </option>
                              <option value={265} state-id={2}>
                                Umm Suqeim
                              </option>
                              <option value={266} state-id={2}>
                                Umm Suqueim
                              </option>
                              <option value={292} state-id={3}>
                                Universary City
                              </option>
                              <option value={293} state-id={3}>
                                University City
                              </option>
                              <option value={267} state-id={2}>
                                University City
                              </option>
                              <option value={268} state-id={2}>
                                Wafi Mall
                              </option>
                              <option value={294} state-id={3}>
                                Wasit Suburb
                              </option>
                              <option value={269} state-id={2}>
                                Yarmouk
                              </option>
                              <option value={270} state-id={2}>
                                Yas Island
                              </option>
                              <option value={53} state-id={1}>
                                YasIsland
                              </option>
                              <option value={271} state-id={2}>
                                Zabeel
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-12 form-inti hide_zip_vik">
                          <div className="form-group form-inti">
                            <div className="icon">
                              <i className="fa fa-building" />
                            </div>
                            <input
                              type="text"
                              defaultValue={111111}
                              name="edit_pincode"
                              id="edit_pincode"
                              minLength={6}
                              maxLength={6}
                              placeholder="Zipcode"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer d-flex flex-row justify-content-between align-items-center align-content-center">
                      <button
                        type="button"
                        className="custom-btn theme-2"
                        id="edit_address_btn"
                      >
                        Save
                      </button>
                    </div>
                    <div className="col-12 mt-2">
                      <label
                        htmlFor="edit_address_form-error"
                        id="edit_address_form_error"
                        className="p-1 w-100 text-center"
                      />
                    </div>
                  </form>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({});
const mapDistchToProps = (dispatch) => ({
  setConfigHandler: (data) => dispatch(setUserData(data)),
});
export default connect(mapStateToProps, mapDistchToProps)(AirBooking);
