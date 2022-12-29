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
                <span id="bk_sm_name">Ujjwal Sikka</span>{" "}
                <span id="bk_sm_type">booking for myself</span>
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
                      <i className="fa fa-car" /> Car Plate Number
                    </span>
                    <strong id="bk_sm_car_number">35353535</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      <i className="fas fa-car" /> Car Make / Model{" "}
                    </span>
                    <strong id="bk_sm_car_model">assdhj32</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      <i className="fas fa-car" /> Car Type{" "}
                    </span>
                    <strong id="bk_sm_car_type">manual</strong>
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li className="bstitle">Service Details</li>
          <li className="bslisting clearfix">
            <div className="bsimage_wrapper">
              <img
                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                alt=""
              />
            </div>
            <div className="bsinfo">
              <span className="bssub_title">Pickup Address</span>
              <ul className="bssub_info">
                <li>
                  <span>
                    <i className="fa fa-user" />{" "}
                    <span id="bk_sm_pickup_name">Joo</span>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-mobile" />{" "}
                    <span id="bk_sm_pickup_mobile">+971-4353453453</span>
                  </span>
                </li>
              </ul>
              <ul className="bssub_info">
                <li>
                  <span>
                    <i className="fa fa-map-marker" />{" "}
                    <span id="bk_sm_pickup_address">ccsdcsf</span>{" "}
                    <span id="bk_sm_pickup_landmark" />{" "}
                    <span id="bk_sm_pickup_state">Abu Dhabi</span>{" "}
                    <span id="bk_sm_pickup_pincode" />
                  </span>
                </li>
              </ul>
              <ul className="bssub_info">
                <li>
                  <span>
                    <span>
                      <i className="fa fa-calendar" /> Car Pickup Date
                    </span>
                    <strong id="bk_sm_pickup_date">18 October 2022</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      <i className="fa fa-clock-o" /> Car Pickup Time
                    </span>
                    <strong id="bk_sm_pickup_time">03:05 PM</strong>
                  </span>
                </li>
              </ul>
            </div>
            <span className="bs_status_type bsguest">Pickup</span>
          </li>
          <li className="bslisting  clearfix">
            <div className="bsimage_wrapper">
              <img
                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                alt=""
              />
            </div>
            <div className="bsinfo">
              <span className="bssub_title">Delivery Address</span>
              <ul className="bssub_info">
                <li>
                  <span>
                    <i className="fa fa-user" />{" "}
                    <span id="bk_sm_drop_name">cszxcasdaFSDGSDFSR</span>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa fa-mobile" />{" "}
                    <span id="bk_sm_drop_mobile">+971-242424214</span>
                  </span>
                </li>
              </ul>
              <ul className="bssub_info">
                <li>
                  <span>
                    <i className="fa fa-map-marker" />{" "}
                    <span id="bk_sm_drop_address">WEWRTWRWRWRW33RTWRF</span>{" "}
                    <span id="bk_sm_drop_landmark" />{" "}
                    <span id="bk_sm_drop_state">Abu Dhabi</span>{" "}
                    <span id="bk_sm_drop_pincode" />
                  </span>
                </li>
              </ul>
              <p id="show_pickup_my_car">
                Pickup my car after the service is complete
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
              <span className="bssub_title">Booking Remarks</span>
              <p id="bk_sm_bk_summary" />
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
                    <i className="fa fa-clock-o" /> 03:05 PM
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li className="bstitle">Payment summary</li>
          <li className="bslisting payment_details clearfix">
            <label className="hide_this light-gray standard_fee">
              Standard Price
            </label>
            <label className="hide_this standard_fee light-gray">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_standard_fee">187.5</span>
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
              <span className="cls_discounted_fee">187.50</span>
            </label>
            <label className="hide_this booking_fee">Booking Fee</label>
            <label className="hide_this booking_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_fee">0</span>
            </label>
            <label className="hide_this hidden process_fee">
              Processing Fee
            </label>
            <label className="hide_this hidden process_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_process_fee" />
            </label>
            <label className="hide_this hidden tax_fee">VAT &amp; Taxes</label>
            <label className="hide_this hidden tax_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_tax" />
            </label>
            <label className="hide_this total_pay">Total Payable</label>
            <label className="hide_this total_pay">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_payable" saved_amount="187.50">
                1
              </span>
              <span
                style={{ flex: "100%" }}
                className="text-right w-100 hide_this refund_txt"
              >
                <small className="refund_text">(Refundable)</small>
              </span>
            </label>
            <p
              style={{ flex: "100%" }}
              className="text-right w-100 hide_this saving_txt"
            >
              <small className="saving_text">
                <i>
                  You will save <font color="green">AED 187.50</font> on this
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
