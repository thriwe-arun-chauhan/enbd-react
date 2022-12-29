import React from "react";
function PlayDateAndGuests() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
          className="form airport-transfer-form"
          id="golf_form_three"
          method="post"
          acceptCharset="utf-8"
          noValidate="novalidate"
        >
          <input
            type="hidden"
            name="csrf_form_name"
            defaultValue="cc92357ed6918704a101a7165cd4b237"
            autoComplete="off"
          />
          <div className="form-title">
            <h4 className="d-flex justify-content-between align-items-center">
              <span>Date &amp; Time of Play</span>
            </h4>
            <p>Please fill in the details below.</p>
          </div>
          <div className="row pb-0">
            <div className="col-12 col-md-12 col-lg-6 form-inlabel">
              <div className="form-group mt-0 ">
                <div className="col-12">
                  <div className="row">
                    <label>Date of Play</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-calendar" />
                    </div>
                    <input
                      type="text"
                      className="form-control typedate datepicker hasDatepicker"
                      name="date_of_service"
                      id="date_of_service"
                      style={{ position: "relative" }}
                      placeholder="Select Date of Play"
                      readOnly=""
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div
                id="hidden_legends"
                className="legendlist"
                style={{ display: "none" }}
              >
                <ul>
                  <li>
                    <span className="green-lg" /> Available
                  </li>
                  <li>
                    {" "}
                    <span className="gray-lg" /> Not Available{" "}
                  </li>
                  <li>
                    <span className="red-lg" /> Not Opened Yet
                  </li>
                  <li>
                    <span className="orange-lg" /> Quota Not Available
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel">
              <div className="form-group mt-0">
                <div className="col-12">
                  <div className="row">
                    <label>Time of Play (HH:MM)</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group ">
                    <div className="icon">
                      <i className="fa fa-clock-o" />
                    </div>
                    <input
                      type="text"
                      className="form-control input"
                      name="time_of_service"
                      id="time_of_service"
                      placeholder="Select Time of play"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="javascript:void(0);"
            id="show_suggestion_courses"
            className="show-suggestion hidden"
          >
            Show Suggestions
          </a>
          <div className="row mt-3" id="show_guest_div">
            <div className="col-12 horizontal_listing">
              <fieldset className="checkbox-group add-guest">
                <legend className="checkbox-group-legend">
                  Add Guest(s) to your Booking
                </legend>
                <div className="form-group m-0 btn-search w-100">
                  <input
                    type="text"
                    id="guest_email"
                    name="guest_email"
                    onkeyup="this.value = this.value.toLowerCase();"
                    maxLength={100}
                    placeholder="Enter guest’s email "
                    autoComplete="off"
                  />
                  <div className="icon">
                    <a
                      href="javascript:void(0);"
                      id="search_guest"
                      className="custom-btn theme-2 m-m-t"
                    >
                      Search &amp; Add{" "}
                    </a>
                  </div>
                  <div id="search_guest_error" />
                </div>
              </fieldset>
              <div className="clearfix" />
            </div>
          </div>
          <div className="row hidden" id="guest_list_div">
            <div className="col-12 horizontal_listing guest_list">
              <legend className="checkbox-group-legend">
                Guest's in this Booking
              </legend>
              <fieldset
                className="checkbox-group d-flex flex-row justify-content-between align-items-start align-content-start"
                id="guest_div"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <fieldset className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start">
                <legend className="checkbox-group-legend">
                  Booking Remarks - Any Instructions
                </legend>
              </fieldset>
              <textarea
                type="text"
                id="booking_remark"
                name="booking_remark"
                className="form-control"
                maxLength={200}
                placeholder="Any Instructions"
                rows={5}
                autoComplete="off"
                defaultValue={""}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="payment_details">
                <label className="light-gray hide_this hidden standard_fee">
                  Green Fee
                </label>
                <label className="hide_this hidden standard_fee light-gray">
                  <span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_standard_fee" />
                </label>
                <label className="light-gray hide_this hidden discount_fee">
                  <span className="discount_percentage" />
                </label>
                <label className="discount_fee hide_this hidden text-success">
                  <i
                    className=" text-success"
                    style={{ fontSize: 18, fontWeight: "bold" }}
                  >
                    -
                  </i>
                  &nbsp;&nbsp;<span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_discounted_fee" />
                </label>
                <label className="hide_this hidden booking_fee">
                  Booking Fee
                </label>
                <label className="hide_this hidden booking_fee">
                  <span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_booking_fee" />
                </label>
                <label className="hide_this hidden process_fee">
                  Processing Fee
                </label>
                <label className="hide_this hidden process_fee">
                  <span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_booking_process_fee">0</span>
                </label>
                <label className="hide_this hidden tax_name tax_fee">
                  VAT &amp; Taxes
                </label>
                <label className="hide_this hidden tax_fee">
                  <span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_booking_tax">0</span>
                </label>
                <label className="hide_this hidden total_pay">
                  Total Payable
                </label>
                <label className="hide_this hidden total_pay">
                  <span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_booking_payable">0</span>
                  <span
                    style={{ flex: "100%" }}
                    className="text-right hide_this hidden w-100 refund_txt"
                  >
                    <small className="refund_text" />
                  </span>
                </label>
                <p
                  style={{ flex: "100%" }}
                  className="text-right hide_this hidden w-100 saving_txt"
                >
                  <small className="saving_text" />
                </p>
              </div>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default PlayDateAndGuests;
