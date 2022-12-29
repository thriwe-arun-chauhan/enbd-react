import React from "react";
function PlayerDetails() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <div className="form-title">
          <h4 className="d-flex justify-content-between align-items-center">
            <span>Booking for Myself</span>
          </h4>
          <p>Please fill in the details below.</p>
        </div>
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
          className="form airport-transfer-form"
          id="golf_form_one"
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
            <div className="col-12">
              <div
                className="row booking-my-self-form booking_me"
                booking_type={1}
              >
                <div className="col-12 col-sm-6 col-md-6 form-inti">
                  <div className="form-group form-inti">
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
                <div className="col-12 col-sm-6 col-md-6 form-inti">
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
                <div className="col-12 col-sm-6 col-md-6 form-inti">
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
                <div className="col-12 col-sm-6 col-md-6 form-inti">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-star" />
                    </div>
                    <input
                      type="text"
                      name="customer_handicap"
                      id="customer_handicap"
                      defaultValue=""
                      disabled=""
                      placeholder="Handicap"
                      autoComplete="off"
                    />
                    <small>
                      <a
                        className="leave_site"
                        href="javascript:void(0);"
                        link="https://latesttestemiratesnbdbenefits.thriwe.com/profile"
                      >
                        <u>Click here to update handicap via your profile</u>
                      </a>
                    </small>
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
                <div className="checkbox checkbox-wrapper">
                  <label className="checkbox-wrapper">
                    <input
                      name="selected_card"
                      type="radio"
                      onchange="get_card_info();"
                      card_name="Mastercard Platinum"
                      card_number="552191******1111"
                      defaultValue="AjpRaiUvbkENNrt9Hm3Gaw=="
                      card_uid="AjpRaiUvbkENNrt9Hm3Gaw=="
                      benefit_type="R3wlgF8MqwbIENKBA/1F0Q=="
                      defaultChecked=""
                      className="checkbox-input select_card"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                      </span>
                      <span className="checkbox-label">
                        <strong>Mastercard Platinum</strong>
                        <small>552191******1111</small>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="checkbox checkbox-wrapper">
                  <label className="checkbox-wrapper">
                    <input
                      name="selected_card"
                      type="radio"
                      onchange="get_card_info();"
                      card_name="Diners Duo Credit Card"
                      card_number="362800******9999"
                      defaultValue="447OwTqxES4exkuWaRGc0Q=="
                      card_uid="447OwTqxES4exkuWaRGc0Q=="
                      benefit_type="R3wlgF8MqwbIENKBA/1F0Q=="
                      className="checkbox-input select_card"
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
                <div className="checkbox checkbox-wrapper">
                  <label className="checkbox-wrapper">
                    <input
                      name="selected_card"
                      type="radio"
                      onchange="get_card_info();"
                      card_name="Diners Duo Credit Card"
                      card_number="362800******4546"
                      defaultValue="YVMGQDOCOHuiiMl5G10Qvw=="
                      card_uid="YVMGQDOCOHuiiMl5G10Qvw=="
                      benefit_type="R3wlgF8MqwbIENKBA/1F0Q=="
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
            <div className="col-12 custom_radio mb-5" id="booking_type_div">
              <fieldset className="checkbox-group">
                <legend className="checkbox-group-legend">Booking Type</legend>
              </fieldset>
              <label
                className="form-check-label text-nowrap pl-0 checkbox-wrapper"
                htmlFor="golf-booking-complimentary"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  onclick="get_country_list();"
                  defaultValue="complimentary"
                  id="golf-booking-complimentary"
                  benefit_type="B55rZxxYvczWJ8E9uzf41Q=="
                  disabled=""
                />
                <span>Complimentary</span>
              </label>
              <label
                className="form-check-label text-nowrap checkbox-wrapper"
                htmlFor="golf-booking-discounted"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  onclick="get_country_list();"
                  defaultValue="discount"
                  id="golf-booking-discounted"
                  benefit_type="ejpVZs364c/ARQ0orFb+Ag=="
                  defaultChecked=""
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

export default PlayerDetails;
