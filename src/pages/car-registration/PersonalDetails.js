import React from "react";
import { Link } from "react-router-dom";
function PersonalDetails() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/car-registration"
          className="form airport-transfer-form"
          id="registration_form_one"
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
          <input
            type="hidden"
            id="booking_currency"
            name="booking_currency"
            defaultValue="AED"
            autoComplete="off"
          />
          <div className="row">
            <div className="col-12 col-md-5">
              <div className="row">
                <div className="col-12">
                  <div className="form-title">
                    <h4 className="d-flex justify-content-between align-items-center">
                      <span>Booking for Myself</span>
                    </h4>
                    <p>Please fill in the details below.</p>
                  </div>
                </div>
              </div>
              <div
                className="row booking-my-self-form booking_me"
                booking_type={1}
                booking_type_name="booking for myself"
              >
                <div className="col-12 form-inti">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <input
                      type="text"
                      name="customer_name"
                      id="customer_name"
                      defaultValue="Ujjwal Sikka"
                      className="focus"
                      disabled=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-12 form-inti">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <input
                      type="email"
                      name="customer_email"
                      id="customer_email"
                      defaultValue="ujjwal.sikka@thriwe.com"
                      disabled=""
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-12 form-inti">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-mobile" />
                    </div>
                    <input
                      type="tel"
                      name="customer_mobile"
                      id="customer_mobile"
                      defaultValue="+91-8750195499"
                      disabled=""
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2 d-flex flex-row justify-content-center align-items-center align-content-center ">
              <div className="row d-none d-md-block">
                <div className="col-12">
                  <div className="or or-vertical">
                    <span>OR</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="row">
                <div className="col-12">
                  <span
                    className="form-title d-flex flex-row justify-content-center align-items-center align-content-center text-center btn_someone_else"
                    id="someone_form"
                    booking_type_name="booking for someone"
                  >
                    {/* <a href="javascript:void(0);" className="btn-fade">
                      Booking for Someone Else?
                    </a> */}
                  </span>
                </div>
              </div>
              <div
                className="row someone-else-airport-transfer-form"
                style={{ display: "none" }}
              >
                <div className="col-12 form-inti">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <input
                      type="text"
                      name="someone_name"
                      id="someone_name"
                      maxLength={50}
                      placeholder="Enter your name"
                      className="focus"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-12 form-inti">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-envelope" />
                    </div>
                    <input
                      type="email"
                      name="someone_email"
                      id="someone_email"
                      maxLength={80}
                      placeholder="Enter your email address"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-12 form-inti">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-mobile" />
                    </div>
                    <input
                      type="tel"
                      name="someone_mobile"
                      id="someone_mobile"
                      minLength={6}
                      maxLength={20}
                      placeholder="Enter your mobile no."
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 horizontal_listing">
              <fieldset className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start">
                <div className="row w-100">
                  <div className="col-md-6 col-12  p-0">
                    <legend className="checkbox-group-legend">
                      Select Your Card{" "}
                    </legend>
                  </div>
                  <div className="col-md-6 col-12 ">
                    <a
                      className="leave_site float-right"
                      href="javascript:void(0);"
                      link="https://latesttestemiratesnbdbenefits.thriwe.com/profile"
                    >
                      Add More Card
                    </a>
                  </div>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="selected_card"
                      type="radio"
                      onchange="card_info();"
                      is_flexi_card={0}
                      bin_number={362800}
                      card_name="Diners Duo Credit Card"
                      card_number="362800******9999"
                      defaultValue="447OwTqxES4exkuWaRGc0Q=="
                      card_uid="447OwTqxES4exkuWaRGc0Q=="
                      benefit_type="MiFvDjgFiOFg87tiTYKWokOaCjk1T6NAhrrYTP4FsFk="
                      className="checkbox-input select_card"
                      defaultChecked=""
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Diners Duo Credit Card</strong>
                        <small>362800******9999</small>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="selected_card"
                      type="radio"
                      onchange="card_info();"
                      is_flexi_card={0}
                      bin_number={362800}
                      card_name="Diners Duo Credit Card"
                      card_number="362800******4546"
                      defaultValue="YVMGQDOCOHuiiMl5G10Qvw=="
                      card_uid="YVMGQDOCOHuiiMl5G10Qvw=="
                      benefit_type="MiFvDjgFiOFg87tiTYKWokOaCjk1T6NAhrrYTP4FsFk="
                      className="checkbox-input select_card"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Diners Duo Credit Card</strong>
                        <small>362800******4546</small>
                      </span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-12 custom_radio" id="booking_type_div">
              <fieldset className="checkbox-group">
                <legend className="checkbox-group-legend">Booking Type</legend>
              </fieldset>
              <label
                className="form-check-label text-nowrap pl-0 checkbox-wrapper"
                htmlFor="car-registration-complimentary"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  defaultValue="complimentary"
                  id="car-registration-complimentary"
                  benefit_type="B55rZxxYvczWJ8E9uzf41Q=="
                  defaultChecked=""
                />
                <span>Complimentary</span>
              </label>
              <label
                className="form-check-label text-nowrap checkbox-wrapper"
                htmlFor="car-registration-discounted"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  defaultValue="discount"
                  id="car-registration-discounted"
                  benefit_type="ejpVZs364c/ARQ0orFb+Ag=="
                  disabled=""
                />
                <span>Discounted</span>
              </label>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default PersonalDetails;
