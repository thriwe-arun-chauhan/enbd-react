import React, { useEffect, useState } from "react";

import PersonalDetails from "./PersonalDetails";
import VehicleDetails from "./VehicleDetails";
import ContactDetails from "./ContactDetails";
import BookingSummary from "./BookingSummary";
import { Link } from "react-router-dom";

function CarRegistration() {
  const [showCarRegistartionTabs, setshowCarRegistrationTabs] = useState(1);

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
                      <a href="javascript:void(0);">Car Registration</a>
                    </li>
                  </ul>
                </div>
                <div className="bread-title">
                  <h2>Car Registration</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="common-section car-registration sw sw-theme-dots sw-justified"
        id="smartwizard"
      >
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showCarRegistartionTabs == 1 ? "active" : ""
                }`}
                href="#step-1"
              >
                <strong>Personal Details</strong> <br />
                <span>
                  Select Card and Pickup
                  <br /> DateTime
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showCarRegistartionTabs == 2 ? "active" : ""
                }`}
                href="#step-2"
              >
                <strong>Vehicle Details</strong> <br />
                <span>
                  Give car type / make-model <br />
                  no.
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showCarRegistartionTabs == 3 ? "active" : ""
                } `}
                href="#step-3"
              >
                <strong>Contact Details</strong> <br />
                <span>
                  Specify Pickup Location &amp; <br /> Contact Info
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showCarRegistartionTabs == 4 ? "active" : ""
                } `}
                href="#step-4"
              >
                <strong>Booking Summary</strong> <br />
                <span>
                  Reconfirm your booking
                  <br /> details
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {showCarRegistartionTabs == 1 && <PersonalDetails />}
            {showCarRegistartionTabs == 2 && <VehicleDetails />}
            {showCarRegistartionTabs == 3 && <ContactDetails />}
            {showCarRegistartionTabs == 4 && <BookingSummary />}
          </div>
          <div
            className="toolbar toolbar-bottom"
            role="toolbar"
            style={{ textAlign: "right" }}
          >
            <button
              className={
                showCarRegistartionTabs === 1
                  ? "btn sw-btn-prev disabled"
                  : "sw-btn-prev custom-btn theme-2"
              }
              type="button"
              onClick={() => {
                if (showCarRegistartionTabs > 1) {
                  setshowCarRegistrationTabs(showCarRegistartionTabs - 1);
                } else {
                  return;
                }
              }}
            >
              Previous
            </button>
            {showCarRegistartionTabs <= 3 && (
              <button
                onClick={() => {
                  if (showCarRegistartionTabs <= 3) {
                    setshowCarRegistrationTabs(showCarRegistartionTabs + 1);
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
            {showCarRegistartionTabs == 4 && (
              <button>
                <Link
                  to="/PayNow"
                  className="btn-info custom-btn theme-2 regsitration_submit_btn"
                >
                  Proceed to Payment
                </Link>
              </button>
            )}
          </div>
          <div id="service_form_error" />
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

export default CarRegistration;
