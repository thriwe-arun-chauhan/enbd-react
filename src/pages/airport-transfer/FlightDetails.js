import React from "react";
function FlightDetails() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/airport-transfer"
          className="form airport-transfer-form"
          id="airport_form_three"
          method="post"
          acceptCharset="utf-8"
          noValidate="novalidate"
        >
          <input
            type="hidden"
            name="csrf_form_name"
            defaultValue="e1699a6029ed40c4bb04924aaa2b2859"
            autoComplete="off"
          />
          <div className="row">
            <div className="col-12">
              <h4 className="d-flex justify-content-between align-items-center">
                <span>Flight Details</span>
              </h4>
              <p>Please fill in the details below.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 form-inlabel">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Travel Purchase Amount</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon icon-aed">
                      <i className="fa fa-money" />
                    </div>
                    <input
                      type="text"
                      name="trip_amount"
                      id="trip_amount"
                      maxLength={10}
                      className="form-control"
                      placeholder="Travel Purchase Amount"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Ticket Purchase date</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-calendar" />
                    </div>
                    <input
                      type="text"
                      className="form-control datepicker hasDatepicker"
                      id="ticket_purchase_date"
                      name="ticket_purchase_date"
                      placeholder="Ticket Purchase Date"
                      readOnly=""
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Flight Number</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-plane" />
                    </div>
                    <input
                      type="text"
                      onkeyup="this.value = this.value.toUpperCase();"
                      className="form-control"
                      maxLength={20}
                      name="flight_number"
                      id="flight_number"
                      placeholder="Flight Number"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Terminal Number</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-plane" />
                    </div>
                    <input
                      type="text"
                      name="terminal_number"
                      id="terminal_number"
                      maxLength={10}
                      className="form-control"
                      placeholder="Terminal Number"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Terminal Name</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fas fa-map-marker" />
                    </div>
                    <input
                      type="text"
                      name="terminal_name"
                      id="terminal_name"
                      maxLength={50}
                      className="form-control"
                      placeholder="Terminal Name"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel-text">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>
                      Upload Ticket <small> (Pdf format only)</small>
                    </label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div
                    className="form-group mt-0 inputDnD w-100"
                    style={{ height: 110 }}
                  >
                    <input
                      type="file"
                      className="form-control-file"
                      id="upload_ticket"
                      accept="pdf"
                      onchange="readUrl(this);"
                      name="upload_ticket"
                      data-title="Upload your ticket here "
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 form-inlabel-text hide_zip_vik">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Booking Remarks</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="icon textarea">
                      <i className="fa fa-info-circle" />
                    </div>
                    <textarea
                      type="text"
                      id="booking_remark"
                      name="booking_remark"
                      maxLength={200}
                      className="form-control"
                      placeholder="Any Instructions"
                      cols={10}
                      rows={2}
                      autoComplete="off"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <div className="payment_details">
                <label className="light-gray hide_this standard_fee">
                  Standard Price
                </label>
                <label className="light-gray hide_this standard_fee">
                  <span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_standard_fee">250</span>
                </label>
                <label className="light-gray hide_this discount_fee">
                  <span className="discount_percentage">Discount(100%)</span>
                </label>
                <label className="text-success discount_fee hide_this">
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
                  <span className="cls_booking_process_fee">0</span>
                </label>
                <label className="hide_this hidden tax_name tax_fee">
                  VAT &amp; Taxes
                </label>
                <label className="hide_this hidden tax_fee">
                  <span className="bk_sm_currency">AED</span>{" "}
                  <span className="cls_booking_tax">0</span>
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
                    <small className="refund_text">(Refundable)</small>
                  </span>
                </label>
                <p
                  style={{ flex: "100%" }}
                  className="hide_this text-right w-100 saving_txt"
                >
                  <small className="saving_text">
                    <i>
                      You will save <font color="green">AED 250.00</font> on
                      this Booking
                    </i>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default FlightDetails;
