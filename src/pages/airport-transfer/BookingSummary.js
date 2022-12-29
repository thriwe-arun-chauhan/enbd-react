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
            <span>Passenger Details</span>
          </li>
          <li className="bslisting clearfix">
            <div className="bsimage_wrapper">
              <img
                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/traveller.png"
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
                <li>
                  <span>
                    <i className="fa fa-user" /> Passenger(s) -{" "}
                    <span id="bk_sm_passenger">2</span>
                  </span>
                  <span>
                    <i className="fas fa-baby" /> Baby Seat(s) -{" "}
                    <span id="bk_sm_babyseat">1</span>
                  </span>
                  <span>
                    <i className="fa fa-briefcase" /> Luggage(s) -{" "}
                    <span id="bk_sm_luggage">1</span>
                  </span>
                </li>
              </ul>
            </div>
            <span className="bs_status_type bsdiscounted" id="bk_sm_bk_type">
              complimentary
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
              <p id="bk_sm_from">sjfbsjkfbsjk Al Awir Dubai </p>
              <ul className="hidden" id="bk_sm_from_terminal_detail">
                <li>
                  <span>
                    <span>
                      <i className="fa fa-map-marker" /> Terminal Name -{" "}
                    </span>
                    <strong id="bk_sm_from_terminal_name" />
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      <i className="fa fa-plane" /> Terminal Number -{" "}
                    </span>
                    <strong id="bk_sm_from_terminal_number" />
                  </span>
                </li>
              </ul>
              <ul className="bssub_info">
                <li>
                  <span>
                    <i className="fa fa-calendar" />{" "}
                    <span id="bk_sm_date">21 October 2022</span>
                  </span>
                  <span>
                    <i className="fa fa-clock-o" />{" "}
                    <span id="bk_sm_time">02:19 PM</span>
                  </span>
                </li>
              </ul>
            </div>
            <span className="bs_status_type bsguest" id="bk_sm_from_name">
              sfhjwfwjkd
            </span>
          </li>
          <li className="bslisting flex-50 clearfix">
            <div className="bsimage_wrapper">
              <img
                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/to.png"
                alt=""
              />
            </div>
            <div className="bsinfo">
              <span className="bssub_title">To</span>
              <p id="bk_sm_to">
                Dubai World Central - Al Maktoum International Airport (DWC)
              </p>
              <ul className="" id="bk_sm_to_terminal_detail">
                <li>
                  <span>
                    <span>
                      <i className="fa fa-map-marker" /> Terminal Name -{" "}
                    </span>
                    <strong id="bk_sm_to_terminal_name">HShjs</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      <i className="fa fa-plane" /> Terminal Number -{" "}
                    </span>
                    <strong id="bk_sm_to_terminal_number">1</strong>
                  </span>
                </li>
              </ul>
            </div>
            <span className="bs_status_type bsguest" id="bk_sm_to_name">
              Airport
            </span>
          </li>
          <li className="bstitle">Flight Details</li>
          <li className="bslisting clearfix">
            <div className="bsimage_wrapper">
              <img
                src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/ticket_details.png"
                alt=""
              />
            </div>
            <div className="bsinfo column">
              <ul className="bssub_info">
                <li>
                  <span>
                    <span>
                      <i className="fa fa-gbp" /> Travel Purchase Amount -{" "}
                    </span>
                    <strong>
                      <span className="bk_sm_currency">AED</span>{" "}
                      <span id="bk_sm_purchase_amt">200</span>
                    </strong>
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      <i className="fas fa-calendar" /> Ticket Purchase date -{" "}
                    </span>
                    <strong id="bk_sm_purchase_date">13 October 2022</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <span>
                      <i className="fa fa-plane" /> Flight Number -{" "}
                    </span>
                    <strong id="bk_sm_flight">11111</strong>
                  </span>
                </li>
              </ul>
              <ul className="bssub_info">
                <li>
                  <a
                    href="blob:https://latesttestemiratesnbdbenefits.thriwe.com/8405e931-547e-490a-917d-855dee40e30c"
                    id="bk_sm_preview_ticket"
                    target="_blank"
                  >
                    <img
                      src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/ticket.png"
                      alt=""
                    />
                    <span>click here to view ticket</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="bslisting clearfix hide_zip_vik">
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
                    <i className="fa fa-clock-o" /> 02:19 PM
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
              <span className="cls_standard_fee">250</span>
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
              <span className="cls_discounted_fee">250.00</span>
            </label>
            <label className="hide_this hidden baby_fee baby_title" />
            <label className="hide_this hidden baby_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_baby_seat_fee" />
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
            <label className="hide_this hidden tax_name tax_fee">
              VAT &amp; Taxes
            </label>
            <label className="hide_this hidden tax_fee">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_tax" />
            </label>
            <label className="hide_this total_pay">Total Payable</label>
            <label className="hide_this total_pay">
              <span className="bk_sm_currency">AED</span>{" "}
              <span className="cls_booking_payable" saved_amount={250.0}>
                1
              </span>
              <span
                style={{ flex: "100%" }}
                className="hide_this text-right w-100 refund_txt"
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
                  You will save <font color="green">AED 250.00</font> on this
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
