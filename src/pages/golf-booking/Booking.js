import React, { useEffect, useState } from "react";
import PlayerDetails from "./PlayerDetails";
import GolfCourse from "./GolfCourse";
import PlayDateAndGuest from "./PlayDateAndGuest";
import BookingSummary from "./BookingSummary";
import { Link } from "react-router-dom";

function GolfBooking() {
  const [showGolfJourney, setShowGolfJourney] = useState(1);

  // const [formPageIndex, setFormPageIndex] = useState(0);
  // const [isError, setIsError] = useState(false);

  // const incrementFormPageIndex = () => {
  //   setFormPageIndex(formPageIndex + 1);
  //   return;
  // };

  // const handlePlayerDetailsFormSubmit = () => {
  //   const endpoint = "";
  //   function("endpoint",{data}).then(incrementFormPageIndex).catch("error");
  //   //post request
  //   // -- success -> then(incrementFormPageIndex);
  //   // --- error -> alert("error");
  //   return "Golf";
  // };

  // const handleGolfDetailsFormSubmit = () => {
  //     //post request
  //   // -- success -> then(incrementFormPageIndex);
  //   // --- error -> alert("error");
  //   return "hello";
  // };

  // const handleSubmit = (formPageIndex) => {
  //   if (formPageIndex === 0) {
  //     handlePlayerDetailsFormSubmit();
  //   } else if (formPageIndex === 1) {
  //     handleGolfDetailsFormSubmit();
  //   }
  // };

  return (
    <>
      <div
        className="breadcrumbs overlay"
        style={{
          backgroundImage:
            'url("https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/breadcrumb.jpg")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bread-inner">
                <div className="bread-menu">
                  <ul>
                    <li>
                      <a
                        className="leave_site"
                        href="javascript:void(0);"
                        link="https://latesttestemiratesnbdbenefits.thriwe.com/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="leave_site"
                        href="javascript:void(0);"
                        link="https://latesttestemiratesnbdbenefits.thriwe.com/dashboard"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Golf Booking</a>
                    </li>
                  </ul>
                </div>
                <div className="bread-title">
                  <h2>Golf Booking</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="common-section golf-booking sw sw-theme-dots sw-justified"
        id="smartwizard"
      >
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showGolfJourney == 1 ? "active" : ""
                }`}
                href="#step-1"
              >
                <strong>Player Details</strong> <br />
                <span>Select Your Eligible Card</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showGolfJourney == 2 ? "active" : ""
                }`}
                href="#step-2"
              >
                <strong>Golf Course </strong> <br />
                <span>Choose Preferred Golf Course</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showGolfJourney == 3 ? "active" : ""
                }`}
                href="#step-3"
              >
                <strong>Play Date &amp; Guest(s)</strong> <br />
                <span>Check availability for the play</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showGolfJourney == 4 ? "active" : ""
                }`}
                href="#step-4"
              >
                <strong>Booking Summary</strong> <br />
                <span>
                  Reconfirm your booking
                  <br />
                  details
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {showGolfJourney == 1 && <PlayerDetails />}
            {showGolfJourney == 2 && <GolfCourse />}
            {showGolfJourney == 3 && <PlayDateAndGuest />}
            {showGolfJourney == 4 && <BookingSummary />}

            {/* {formPageIndex == 0 && <PlayerDetails />}
            {formPageIndex == 1 && <GolfCourse />}
            {formPageIndex == 2 && <PlayDateAndGuest />}
            {formPageIndex == 3 && <BookingSummary />} */}
          </div>
          <div
            className="toolbar toolbar-bottom"
            role="toolbar"
            style={{ textAlign: "right" }}
          >
            <button
              className={
                showGolfJourney === 1
                  ? "btn sw-btn-prev disabled"
                  : "sw-btn-prev custom-btn theme-2"
              }
              type="button"
              onClick={() => {
                if (showGolfJourney > 1) {
                  setShowGolfJourney(showGolfJourney - 1);
                } else {
                  return;
                }
              }}
            >
              Previous
            </button>
            {showGolfJourney <= 3 && (
              <button
                onClick={() => {
                  if (showGolfJourney <= 3) {
                    setShowGolfJourney(showGolfJourney + 1);
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
            {showGolfJourney == 4 && (
              <button>
                <Link
                  to="/PayNow"
                  className="btn-info custom-btn theme-2  golf_submit_btn"
                >
                  Submit
                </Link>
              </button>
            )}
          </div>
          {/* <button className="sw-btn-prev custom-btn theme-2" type="button">
            Previous
          </button> */}
          <div
            className="common-form-oth suggestion-fixed"
            style={{ display: "none" }}
          >
            <div className="suggestion">
              <div className="" id="suggestion_div">
                <form
                  action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
                  className="hidden"
                  id="available_date_form"
                  method="post"
                  acceptCharset="utf-8"
                  noValidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="csrf_form_name"
                    defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
                    autoComplete="off"
                  />
                  <div className="col-12">
                    <h4>Suggestion(s) </h4>
                    <h6 className="text-danger" id="suggestion_heading" />
                    <div
                      className="custom_radio border-0 checkbox-error-div"
                      id="available_date_div"
                    />
                    <div className="col-md-12  mt-2 p-0 ">
                      <div className="col-md-12 col-lg-8 p-0 form-inlabel h-100">
                        <div className="w-100">
                          <label>Time of Play</label>
                          <div className="form-group  h-100">
                            <div className="w-100 ">
                              <div className="col-6 col-sm-4 form-inlabel suggestion-time p-1">
                                <select
                                  name="suggestion_time_hours"
                                  onchange="check_time(2);"
                                  id="suggestion_time_hours"
                                  className="select-time pl-2"
                                >
                                  <option value="">Hour</option>
                                </select>
                              </div>
                              <div className="col-6 col-sm-4 form-inlabel suggestion-time p-1">
                                <select
                                  name="suggestion_time_minutes"
                                  onchange="check_time(2);"
                                  id="suggestion_time_minutes"
                                  className="select-time pl-2"
                                >
                                  <option value="">Minute</option>
                                </select>
                              </div>
                              <div className="col-12 col-sm-4 form-inlabel suggestion-time p-1">
                                <select
                                  name="suggestion_time_format"
                                  onchange="check_time(2);"
                                  id="suggestion_time_format"
                                  className="select-time pl-2"
                                >
                                  <option value="">AM/PM</option>
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 m-0">
                    <div className="col-md-12 col-12 text-center">
                      <button
                        type="button"
                        className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1 "
                        id="available_date_btn"
                      >
                        Confirm with Another Date
                      </button>
                      <div className="clearfix" />
                    </div>
                  </div>
                </form>{" "}
                <form
                  action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
                  className=""
                  id="available_golf_form"
                  method="post"
                  acceptCharset="utf-8"
                  noValidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="csrf_form_name"
                    defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
                    autoComplete="off"
                  />
                  <div className="w-100 p-3" id="available_golf_form_div">
                    <h4>Suggestion(s) For Golf Courses</h4>
                    <div className="col-12 horizontal_listing golf_list sugg-div">
                      <fieldset
                        className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start"
                        id="golf_course_data_div"
                      />
                    </div>
                    <div className="col-md-12  mt-4 p-0">
                      <div className="col-md-12 col-lg-8 mt-4 p-0 ">
                        <label>Time of Play</label>
                        <div className="form-group">
                          <div className="w-100">
                            <div className="col-6 col-sm-4 p-1 form-inlabel suggestion-time">
                              <select
                                name="golf_time_hours"
                                onchange="check_time(3);"
                                id="golf_time_hours"
                                className="select-time pl-2"
                              >
                                <option value="">Hour</option>
                              </select>
                            </div>
                            <div className="col-6 col-sm-4 p-1 form-inlabel suggestion-time">
                              <select
                                name="golf_time_minutes"
                                onchange="check_time(3);"
                                id="golf_time_minutes"
                                className="select-time pl-2"
                              >
                                <option value="">Minute</option>
                              </select>
                            </div>
                            <div className="col-12 col-sm-4 p-1 form-inlabel suggestion-time">
                              <select
                                name="golf_time_format"
                                onchange="check_time(3);"
                                id="golf_time_format"
                                className="select-time pl-2"
                              >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row w-100 m-0"
                    id="available_golf_form_div_btn"
                  >
                    <div className="col-12 mt-3 text-center">
                      <button
                        type="button"
                        className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1 "
                        id="available_golf_btn"
                      >
                        Confirm with Another Golf Course
                      </button>
                    </div>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
          {/* Modal Remove Guest from Golf Booking Confirmation Popup */}
          <div
            className="modal fade"
            id="remove_guest_modal"
            tabIndex={-1}
            role="dialog"
            data-backdrop="static"
            aria-labelledby="remove_guest_modalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="remove_guest_modalLabel">
                    Confirmation
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p id="guest_remove_alert" />
                </div>
                <div className="modal-footer d-flex flex-row justify-content-end align-items-center align-content-center">
                  <button className="custom-btn theme-1" id="remove_guest_yes">
                    Yes
                  </button>
                  <button
                    className="custom-btn theme-2 ml-3"
                    id="remove_guest_no"
                  >
                    No
                  </button>
                </div>
                <div className="col-12 mt-2">
                  <label
                    htmlFor="guest_remove-error"
                    id="guest_remove_error"
                    className="p-1 w-100 text-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="timepicker_popup"
            tabIndex={-1}
            role="dialog"
            data-backdrop="static"
            aria-hidden="true"
          >
            <div className="modal-dialog timepicker_popup  modal-dialog-centered">
              <form
                action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
                id="play_time_form"
                method="post"
                acceptCharset="utf-8"
              >
                <input
                  type="hidden"
                  name="csrf_form_name"
                  defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
                  autoComplete="off"
                />
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Select Time</h5>
                    <a
                      type="button"
                      className="golf_close"
                      data-dismiss="modal"
                    >
                      ×
                    </a>
                  </div>
                  <div className="modal-body text-center">
                    <div className="col-12 col-md-12 col-lg-12 form-inlabel p-0">
                      <div className="form-group mt-0">
                        <div className="row">
                          <div className="col-4 pr-1 pl-1 ">
                            <select
                              name="time_hours"
                              onchange="check_time(1);"
                              id="time_hours"
                              className="select-time-popup pl-1"
                            >
                              <option value="">Hour</option>
                            </select>
                          </div>
                          <div className="col-4 pr-1 pl-1">
                            <select
                              name="time_minutes"
                              onchange="check_time(1);"
                              id="time_minutes"
                              className="select-time-popup pl-1"
                            >
                              <option value="">Minute</option>
                            </select>
                          </div>
                          <div className="col-4 pr-1 pl-1">
                            <select
                              name="time_format"
                              onchange="check_time(1);"
                              id="time_format"
                              className="select-time-popup pl-1"
                            >
                              <option value="">AM/PM</option>
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="custom-btn theme-2 w-100 mb-3 mb-sm-0 order-0  m-1"
                      id="apply_time"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="col-12 mt-3">
                    <label
                      htmlFor="play_time_form-error"
                      id="play_time_form_error"
                      className="p-1 w-100 text-center"
                    />
                  </div>
                </div>
              </form>{" "}
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
        </div>
      </div>
    </>
  );
}

export default GolfBooking;
