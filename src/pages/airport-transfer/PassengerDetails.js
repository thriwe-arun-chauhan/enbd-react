import React from "react";

function PassengerDetails() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/airport-transfer"
          className="form airport-transfer-form"
          id="airport_form_one"
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
                    <a href="javascript:void(0);" className="btn-fade">
                      Booking for Someone Else?
                    </a>
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
                      maxLength={80}
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
            <div className="col-12">
              <fieldset className="checkbox-group">
                <legend className="checkbox-group-legend">
                  No. of Passenger(s)
                </legend>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_passenger"
                      type="radio"
                      defaultValue={1}
                      className="checkbox-input"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">1</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_passenger"
                      type="radio"
                      defaultValue={2}
                      className="checkbox-input"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">2</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_passenger"
                      type="radio"
                      defaultValue={3}
                      className="checkbox-input"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">3</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_passenger"
                      type="radio"
                      defaultValue={4}
                      className="checkbox-input"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">4</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <fieldset className="checkbox-group" id="baby_seats_div">
                <legend className="checkbox-group-legend">
                  No. of Baby Seat(s)
                </legend>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_babyseat"
                      defaultValue={1}
                      type="checkbox"
                      className="checkbox-input no_of_babyseat"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">1</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_babyseat"
                      defaultValue={2}
                      type="checkbox"
                      className="checkbox-input no_of_babyseat"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">2</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_babyseat"
                      defaultValue={3}
                      type="checkbox"
                      className="checkbox-input no_of_babyseat"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">3</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <fieldset className="checkbox-group" id="luggage_div">
                <legend className="checkbox-group-legend">
                  No. of Luggage(s)
                </legend>
                <div className="checkbox ">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_luggage"
                      defaultValue={1}
                      type="checkbox"
                      className="checkbox-input no_of_luggage"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">1</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox ">
                  <label className="checkbox-wrapper">
                    <input
                      name="no_of_luggage"
                      defaultValue={2}
                      type="checkbox"
                      className="checkbox-input no_of_luggage"
                      autoComplete="off"
                    />
                    <span className="checkbox-tile">
                      <span className="checkbox-icon">
                        <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/passenger.png" />
                      </span>
                      <span className="checkbox-label">2</span>
                    </span>
                  </label>
                </div>
              </fieldset>
              <p>
                Additional luggage baggages will be accomodated at the
                discretion of the chauffeur.
              </p>
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
                      type="hidden"
                      name="useremailid"
                      id="useremailid"
                      defaultValue="ujjwal.sikka@thriwe.com"
                      autoComplete="off"
                    />
                    <input
                      name="selected_card"
                      is_flexi_card={0}
                      bin_number={362800}
                      bn_id="zpY/zVdQ1kPu9jMPPSxdaA=="
                      type="radio"
                      onchange="card_info();"
                      card_name="Diners Duo Credit Card"
                      card_number="362800******9999"
                      defaultValue="447OwTqxES4exkuWaRGc0Q=="
                      card_uid="447OwTqxES4exkuWaRGc0Q=="
                      benefit_type="RYuITh/2iBMiJJ120ZwBu7iOUGXVwS1TGNCpgszeLPw="
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
                      type="hidden"
                      name="useremailid"
                      id="useremailid"
                      defaultValue="ujjwal.sikka@thriwe.com"
                      autoComplete="off"
                    />
                    <input
                      name="selected_card"
                      is_flexi_card={0}
                      bin_number={362800}
                      bn_id="zpY/zVdQ1kPu9jMPPSxdaA=="
                      type="radio"
                      onchange="card_info();"
                      card_name="Diners Duo Credit Card"
                      card_number="362800******4546"
                      defaultValue="YVMGQDOCOHuiiMl5G10Qvw=="
                      card_uid="YVMGQDOCOHuiiMl5G10Qvw=="
                      benefit_type="RYuITh/2iBMiJJ120ZwBu7iOUGXVwS1TGNCpgszeLPw="
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
                htmlFor="airport-transfer-complimentary"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  defaultValue="complimentary"
                  id="airport-transfer-complimentary"
                  benefit_type="B55rZxxYvczWJ8E9uzf41Q=="
                  defaultChecked=""
                />
                <span>Complimentary</span>
              </label>
              <label
                className="form-check-label text-nowrap checkbox-wrapper"
                htmlFor="airport-transfer-discounted"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  defaultValue="discount"
                  id="airport-transfer-discounted"
                  benefit_type="ejpVZs364c/ARQ0orFb+Ag=="
                  disabled=""
                />
                <span>Discounted</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassengerDetails;
