import React from "react";
function BookingSummary() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <div className="form-title mb-4">
          <h4>Booking Summary</h4>
          <p>
            Please Re-verify all the booking details mentioned below before
            generating the booking request.
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
              <span className="bssub_title" id="bk_sm_name">
                Ujjwal Sikka
              </span>
              <ul className="bssub_info">
                <li>
                  <span>
                    <i className="fa fa-envelope" />{" "}
                    <span id="bk_sm_email">ujjwal.sikka@thriwe.com</span>
                  </span>
                  <span>
                    <i className="fa fa-mobile" />{" "}
                    <span id="bk_sm_mobile">+91-8750195499</span>
                  </span>
                  <span>
                    <i className="fa fa-star" /> <span id="bk_sm_handicap" />
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-credit-card" />{" "}
                    <span id="bk_sm_card_name">Diners Duo Credit Card</span>
                  </span>
                  <span>
                    <i className="fa fa-credit-card" />{" "}
                    <span id="bk_sm_card_number">362800******9999</span>
                  </span>
                </li>
              </ul>
            </div>
            <span className="bs_status_type bsdiscounted" id="bk_sm_bk_type">
              complimentary
            </span>
          </li>
          <li className="bstitle">Date &amp; Time of Play and Guest Details</li>
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
                    <i className="fa fa-calendar" />{" "}
                    <span id="bk_sm_date">22 October 2022</span>
                  </span>
                  <span>
                    <i className="fa fa-clock-o" />{" "}
                    <span id="bk_sm_time">02:03 PM</span>
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <fieldset id="bk_sm_guest_list_div">
            <li className="bslisting clearfix text-center">
              <h5 className="w-100 text-center">
                {" "}
                <small> No Guest </small>
              </h5>
            </li>
          </fieldset>
          <li className="bstitle">Golf Course</li>
          <li className="bslisting clearfix">
            <div className="bsimage_wrapper">
              <img
                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golf.png"
                alt="Golf course"
              />
            </div>
            <div className="bsinfo">
              <span className="bssub_title" id="bk_sm_golf_course_name">
                Yas Links Golf Club
              </span>
              <p>
                <i className="fa fa-map-marker" />
                <span className="" id="bk_sm_golf_course_address">
                  {" "}
                  Yas Island, Abu Dhabi, United Arab Emirates
                </span>
              </p>
              <p id="bk_sm_golf_course_description">
                A course that will test professionals, enthrall amateurs and
                excite beginners. A course that honours the traditions of the
                game, demands respect, yet offers so much. A course that
                celebrates the best in Links design, utilizes the unique weather
                conditions and complements its natural surroundings. A course
                that blends the latest in techniques and technology with the
                timeless traditions of the game. A course that is ready to be
                played, enjoyed and discovered by you
              </p>
            </div>
            <span
              className="bs_status_type bscountry"
              id="bk_sm_golf_course_location"
            >
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
              <span className="bssub_title">Booking Remarks</span>
              <p id="bk_sm_bk_summary">--</p>
            </div>
          </li>
          <li className="bstitle">Booking Request Date &amp; Time</li>
          <li className="bslisting clearfix">
            <div className="bsimage_wrapper">
              <img
                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfing.png"
                alt="Twitter"
              />
            </div>
            <div className="bsinfo">
              <span className="bssub_title">Booking Created On</span>
              <ul className="bssub_info">
                <li>
                  <span>
                    <i className="fa fa-calendar" /> 13 Oct 2022
                  </span>
                  <span>
                    <i className="fa fa-clock-o" /> 02:02 PM
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li className="bstitle">Payment summary</li>
          <li
            className="bslisting payment_details clearfix"
            id="payment_details"
          >
            <label className="hide_this light-gray standard_fee">
              Green Fee
            </label>
            <label className="hide_this standard_fee light-gray">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_standard_fee">888.04</span>
            </label>
            <label className="hide_this light-gray discount_fee">
              <span className="discount_percentage">Discount(100%)</span>
            </label>
            <label className="hide_this discount_fee text-success">
              <i
                className=" text-success"
                style={{ fontSize: 18, fontWeight: "bold" }}
              >
                -
              </i>
              &nbsp;&nbsp;<span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_discounted_fee">888.04</span>
            </label>
            <label className="hide_this booking_fee">Booking Fee</label>
            <label className="hide_this booking_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_fee">0.00</span>
            </label>
            <label className="hide_this process_fee">Processing Fee</label>
            <label className="hide_this process_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_process_fee">30.00</span>
            </label>
            <label className="hide_this tax_name tax_fee">VAT(5%)</label>
            <label className="hide_this tax_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_tax">1.50</span>
            </label>
            <label className="hide_this total_pay">Total Payable</label>
            <label className="hide_this total_pay">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_payable" saved_amount="888.04">
                31.50
              </span>
              <span
                style={{ flex: "100%" }}
                className="hide_this hidden text-right w-100 refund_txt"
              >
                <small>(Refundable)</small>
              </span>
            </label>
            <p
              style={{ flex: "100%" }}
              className="hide_this text-right w-100 saving_txt"
            >
              <small className="saving_text">
                <i>
                  You will save <font color="green">AED 888.04</font> on this
                  Booking
                </i>
              </small>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BookingSummary;
