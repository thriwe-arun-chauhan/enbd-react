import React, { useEffect, useState } from "react";
import SenderDetails from "./SenderDetails";
import From from "./From";
import To from "./To";
import BookingSummary from "./BookingSummary";
import { Link } from "react-router-dom";

function LocalCourier() {
  const [showLocalCourierTabs, setshowLocalCourierTabs] = useState(1);
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
                {/* Bread Menu */}
                <div className="bread-menu">
                  <ul>
                    <li>
                      <a
                        className="leave_site"
                        href="javascript:void(0);"
                        link="https://latesttestemiratesnbdbenefits.thriwe.com/dashboard"
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
                      <a href="javascript:void(0);">Local Courier</a>
                    </li>
                  </ul>
                </div>
                <div className="bread-title">
                  <h2>Local Courier</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="common-section local-courier sw sw-theme-dots sw-justified"
        id="smartwizard"
      >
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showLocalCourierTabs == 1 ? "active" : ""
                }`}
                href="#step-1"
              >
                <strong>Sender Details</strong> <br />
                <span>
                  Select Card and Pickup <br />
                  DateTime
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showLocalCourierTabs == 2 ? "active" : ""
                }`}
                href="#step-2"
              >
                <strong>From</strong> <br />
                <span>
                  Specify Pickup Location &amp; <br />
                  Timings
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showLocalCourierTabs == 3 ? "active" : ""
                }`}
                href="#step-3"
              >
                <strong>To</strong> <br />
                <span>Enter Courier Drop Details</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link inactive ${
                  showLocalCourierTabs == 4 ? "active" : ""
                }`}
                href="#step-4"
              >
                <strong>Booking Summary</strong> <br />
                <span>
                  Reconfirm your booking <br /> details
                </span>
              </a>
            </li>
          </ul>
          <div className="tab-content">
            {showLocalCourierTabs == 1 && <SenderDetails />}
            {showLocalCourierTabs == 2 && <From />}
            {showLocalCourierTabs == 3 && <To />}
            {showLocalCourierTabs == 4 && <BookingSummary />}
          </div>
          <div
            className="toolbar toolbar-bottom"
            role="toolbar"
            style={{ textAlign: "right" }}
          >
            <button
              className={
                showLocalCourierTabs === 1
                  ? "btn sw-btn-prev disabled"
                  : "sw-btn-prev custom-btn theme-2"
              }
              type="button"
              onClick={() => {
                if (showLocalCourierTabs > 1) {
                  setshowLocalCourierTabs(showLocalCourierTabs - 1);
                } else {
                  return;
                }
              }}
            >
              Previous
            </button>
            {showLocalCourierTabs <= 3 && (
              <button
                onClick={() => {
                  if (showLocalCourierTabs <= 3) {
                    setshowLocalCourierTabs(showLocalCourierTabs + 1);
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
            {showLocalCourierTabs == 4 && (
              <button>
                <Link
                  to="/PayNow"
                  className="btn-info custom-btn theme-2 courier_submit_btn"
                >
                  Submit
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

export default LocalCourier;
