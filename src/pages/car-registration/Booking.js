import React from 'react';
function CarRegistration()
{
    return(

<>


<div
  className="breadcrumbs overlay"
  style={{
    backgroundImage:
      'url("https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/breadcrumb.jpg")'
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
        <a className="nav-link inactive active" href="#step-1">
          <strong>Personal Details</strong> <br />
          <span>
            Select Card and Pickup
            <br /> DateTime
          </span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link inactive" href="#step-2">
          <strong>Vehicle Details</strong> <br />
          <span>
            Give car type / make-model <br />
            no.
          </span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link inactive" href="#step-3">
          <strong>Contact Details</strong> <br />
          <span>
            Specify Pickup Location &amp; <br /> Contact Info
          </span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link inactive" href="#step-4">
          <strong>Booking Summary</strong> <br />
          <span>
            Reconfirm your booking
            <br /> details
          </span>
        </a>
      </li>
    </ul>
    <div className="tab-content">
      <div
        id="step-1"
        className="tab-pane"
        role="tabpanel"
        aria-labelledby="step-1"
        style={{ display: "block" }}
      >
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
                defaultValue="da41d8f827a8e7f9bb10e55fe78d7b11"
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
                    <legend className="checkbox-group-legend">
                      Booking Type
                    </legend>
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
      </div>
      <div
        id="step-2"
        className="tab-pane"
        role="tabpanel"
        aria-labelledby="step-2"
        style={{ display: "none" }}
      >
        <div className="common-form">
          <div className="form-inner ">
            <form
              action="https://latesttestemiratesnbdbenefits.thriwe.com/car-registration"
              className="form airport-transfer-form"
              id="registration_form_two"
              method="post"
              acceptCharset="utf-8"
              noValidate="novalidate"
            >
              <input
                type="hidden"
                name="csrf_form_name"
                defaultValue="da41d8f827a8e7f9bb10e55fe78d7b11"
                autoComplete="off"
              />
              <div className="row">
                <div className="col-12">
                  <h4 className="d-flex justify-content-between align-items-center">
                    <span>Vehicle Details</span>
                  </h4>
                  <p>Please fill in the details below.</p>
                </div>
              </div>
              <div className="row booking-my-self-form">
                <div className="col-12 col-md-6 form-inti registration">
                  <div className="form-group ">
                    <div className="icon">
                      <i className="fas fa-car" />
                    </div>
                    <input
                      type="text"
                      name="car_plate_number"
                      maxLength={40}
                      onkeyup="this.value = this.value.toUpperCase();"
                      id="car_plate_number"
                      placeholder="Car Plate Number"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 form-inti registration">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fas fa-car" />
                    </div>
                    <input
                      type="text"
                      name="car_model"
                      id="car_model"
                      maxLength={50}
                      placeholder="Car Model"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 custom_radio">
                  <fieldset className="checkbox-group">
                    <legend className="checkbox-group-legend">Car Type</legend>
                  </fieldset>
                  <label
                    className="form-check-label text-nowrap pl-0 checkbox-wrapper"
                    htmlFor="car-servicing-manual"
                  >
                    <input
                      className="form-check-input selected_car_type"
                      id="car-servicing-manual"
                      type="radio"
                      name="car_type"
                      defaultValue="manual"
                      autoComplete="off"
                    />
                    <span>Manual</span>
                  </label>
                  <label
                    className="form-check-label text-nowrap checkbox-wrapper"
                    htmlFor="car-servicing-automatic"
                  >
                    <input
                      className="form-check-input selected_car_type"
                      id="car-servicing-automatic"
                      type="radio"
                      name="car_type"
                      defaultValue="automatic"
                      autoComplete="off"
                    />
                    <span>Automatic</span>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-12 custom_radio">
                  <fieldset className="checkbox-group">
                    <legend className="checkbox-group-legend">
                      Registration At
                    </legend>
                  </fieldset>
                  <label
                    className="form-check-label text-nowrap checkbox-wrapper"
                    htmlFor="selected_at_emirates_0"
                  >
                    <input
                      className="form-check-input selected_at_emirates"
                      onchange="get_payment_info('2', 'B55rZxxYvczWJ8E9uzf41Q==', '', '', '');"
                      sr_no={1}
                      type="radio"
                      id="selected_at_emirates_0"
                      defaultValue="Abu Dhabi"
                      name="register_at_city"
                      autoComplete="off"
                    />
                    <span>Abu Dhabi</span>
                  </label>
                  <label
                    className="form-check-label text-nowrap checkbox-wrapper"
                    htmlFor="selected_at_emirates_1"
                  >
                    <input
                      className="form-check-input selected_at_emirates"
                      onchange="get_payment_info('2', 'ejpVZs364c/ARQ0orFb+Ag==', '', '', '');"
                      sr_no={2}
                      type="radio"
                      id="selected_at_emirates_1"
                      defaultValue="Dubai"
                      name="register_at_city"
                      autoComplete="off"
                    />
                    <span>Dubai</span>
                  </label>
                  <label
                    className="form-check-label text-nowrap checkbox-wrapper"
                    htmlFor="selected_at_emirates_2"
                  >
                    <input
                      className="form-check-input selected_at_emirates"
                      onchange="get_payment_info('2', 'PnRE7/Lx3czgtgstvi5ttw==', '', '', '');"
                      sr_no={3}
                      type="radio"
                      id="selected_at_emirates_2"
                      defaultValue="Sharjah"
                      name="register_at_city"
                      autoComplete="off"
                    />
                    <span>Sharjah</span>
                  </label>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <h6 className="d-flex justify-content-between align-items-center">
                    <span>Disclaimer :</span>
                  </h6>
                  <p>
                    Original valid insurance policy, original registration card,
                    passport copy with visa page, and authority letter (for Abu
                    Dhabi registration)
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="step-3"
        className="tab-pane"
        role="tabpanel"
        aria-labelledby="step-3"
        style={{ display: "none" }}
      >
        <div className="common-form golf-booking-form">
          <div className="form-inner">
            <form
              action="https://latesttestemiratesnbdbenefits.thriwe.com/car-registration"
              className="form airport-transfer-form"
              id="registration_form_three"
              method="post"
              acceptCharset="utf-8"
              noValidate="novalidate"
            >
              <input
                type="hidden"
                name="csrf_form_name"
                defaultValue="da41d8f827a8e7f9bb10e55fe78d7b11"
                autoComplete="off"
              />
              <div className="row">
                <div className="col-12">
                  <h4 className="d-flex justify-content-between align-items-center">
                    <span>Contact Details</span>
                  </h4>
                  <p>
                    Please fill in the details below so that we can get in
                    contact with you about our product.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-12">
                  <a
                    href="javascript:void(0);"
                    className="float-right text-success"
                    data-toggle="modal"
                    data-target="#select_from_address"
                  >
                    <i className="fa fa-map-marker" />{" "}
                    <small>
                      <u>Select from Saved Addresses </u>
                    </small>
                  </a>
                </div>
                <div className="col-12 form-inti registration">
                  <div className="form-group ">
                    <div className="icon">
                      <i className="fa fa-location-arrow" />
                    </div>
                    <input
                      type="text"
                      name="pickup_address"
                      id="pickup_address"
                      maxLength={150}
                      placeholder="Complete Address"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 form-inti registration">
                  <div className="form-group ">
                    <div className="icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <input
                      type="text"
                      name="landmark"
                      id="landmark"
                      maxLength={80}
                      placeholder="Landmark"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6 form-inti registration">
                  <div className="form-group ">
                    <div className="icon">
                      <i className="fa fa-calendar" />
                    </div>
                    <input
                      type="text"
                      className="datepicker hasDatepicker"
                      name="date_of_service"
                      id="date_of_service"
                      placeholder="Date of Service"
                      readOnly=""
                      autoComplete="off"
                    />
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
                      {/* <li><span class="orange-lg"></span> Quota Utlized</li> */}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-md-6 h-100 mb-5">
                  <div className="custom_radio mt-2">
                    <fieldset className="checkbox-group">
                      <legend className="checkbox-group-legend">
                        Pickup Emirates
                      </legend>
                    </fieldset>
                    <label
                      className="form-check-label text-nowrap checkbox-wrapper contact_city_radio"
                      htmlFor="selected_contact_emirates_0"
                    >
                      <input
                        className="form-check-input selected_contact_emirates"
                        sr_no={1}
                        type="radio"
                        id="selected_contact_emirates_0"
                        defaultValue="Abu Dhabi"
                        name="contact_city"
                        autoComplete="off"
                      />
                      <span>Abu Dhabi</span>
                    </label>
                    <label
                      className="form-check-label text-nowrap checkbox-wrapper contact_city_radio"
                      htmlFor="selected_contact_emirates_1"
                    >
                      <input
                        className="form-check-input selected_contact_emirates"
                        sr_no={2}
                        type="radio"
                        id="selected_contact_emirates_1"
                        defaultValue="Dubai"
                        name="contact_city"
                        autoComplete="off"
                      />
                      <span>Dubai</span>
                    </label>
                    <label
                      className="form-check-label text-nowrap checkbox-wrapper contact_city_radio"
                      htmlFor="selected_contact_emirates_2"
                    >
                      <input
                        className="form-check-input selected_contact_emirates"
                        sr_no={3}
                        type="radio"
                        id="selected_contact_emirates_2"
                        defaultValue="Sharjah"
                        name="contact_city"
                        autoComplete="off"
                      />
                      <span>Sharjah</span>
                    </label>
                  </div>
                </div>
                <div className="col-12 col-lg-6 form-inlabel courier">
                  <div className="form-group">
                    <div className="col-12">
                      <div className="row">
                        <label>Select Region</label>
                      </div>
                    </div>
                    <div className="col-12 p-0">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fas fa-landmark" />
                        </div>
                        <select
                          className="form-select"
                          id="region_id"
                          name="region_id"
                        >
                          <option value="">Select Region</option>
                          <option value={1} state-id={1}>
                            Abu Al Abyad
                          </option>
                          <option value={54} state-id={2}>
                            Abu Dabhi Marina
                          </option>
                          <option value={55} state-id={2}>
                            Abu Hail
                          </option>
                          <option value={56} state-id={2}>
                            Abu Saghara
                          </option>
                          <option value={272} state-id={3}>
                            Abu Shagara
                          </option>
                          <option value={57} state-id={2}>
                            Academic City
                          </option>
                          <option value={58} state-id={2}>
                            Ain Al-Faida
                          </option>
                          <option value={59} state-id={2}>
                            Airport Free Zone
                          </option>
                          <option value={60} state-id={2}>
                            Airport Road
                          </option>
                          <option value={61} state-id={2}>
                            Ajman Industrial Area
                          </option>
                          <option value={63} state-id={2}>
                            Al Ain Mall
                          </option>
                          <option value={64} state-id={2}>
                            Al Aman
                          </option>
                          <option value={65} state-id={2}>
                            Al Awir
                          </option>
                          <option value={66} state-id={2}>
                            Al badaa
                          </option>
                          <option value={62} state-id={2}>
                            Al Barari
                          </option>
                          <option value={67} state-id={2}>
                            Al Barsha
                          </option>
                          <option value={68} state-id={2}>
                            Al Bateen
                          </option>
                          <option value={2} state-id={1}>
                            Al Bateen
                          </option>
                          <option value={3} state-id={1}>
                            Al Danah
                          </option>
                          <option value={4} state-id={1}>
                            Al Dar HQ Building
                          </option>
                          <option value={69} state-id={2}>
                            Al Dhafra
                          </option>
                          <option value={70} state-id={2}>
                            Al Fahidi
                          </option>
                          <option value={71} state-id={2}>
                            Al Falah
                          </option>
                          <option value={72} state-id={2}>
                            Al Furjan
                          </option>
                          <option value={73} state-id={2}>
                            Al Garhoud
                          </option>
                          <option value={74} state-id={2}>
                            Al Ghurair
                          </option>
                          <option value={75} state-id={2}>
                            Al Ghurair Center
                          </option>
                          <option value={76} state-id={2}>
                            Al Ghuwair
                          </option>
                          <option value={273} state-id={3}>
                            Al Ghuwair
                          </option>
                          <option value={77} state-id={2}>
                            Al Hamra
                          </option>
                          <option value={78} state-id={2}>
                            Al Hili
                          </option>
                          <option value={79} state-id={2}>
                            Al Humrah
                          </option>
                          <option value={80} state-id={2}>
                            Al Jaddaf
                          </option>
                          <option value={274} state-id={3}>
                            Al Jawazat
                          </option>
                          <option value={81} state-id={2}>
                            Al Karama
                          </option>
                          <option value={6} state-id={1}>
                            Al Karamah
                          </option>
                          <option value={82} state-id={2}>
                            Al Karamah
                          </option>
                          <option value={83} state-id={2}>
                            Al Khabaisi
                          </option>
                          <option value={84} state-id={2}>
                            Al Khabisi
                          </option>
                          <option value={85} state-id={2}>
                            Al Khaleej Al Arabi St
                          </option>
                          <option value={7} state-id={1}>
                            Al Khalidiya
                          </option>
                          <option value={86} state-id={2}>
                            Al Khalidiya
                          </option>
                          <option value={275} state-id={3}>
                            Al Khan
                          </option>
                          <option value={87} state-id={2}>
                            Al Khan Road
                          </option>
                          <option value={8} state-id={1}>
                            Al Khatam
                          </option>
                          <option value={88} state-id={2}>
                            Al Khour
                          </option>
                          <option value={9} state-id={1}>
                            Al Khubeirah
                          </option>
                          <option value={89} state-id={2}>
                            Al Maarid
                          </option>
                          <option value={90} state-id={2}>
                            Al Madina Al Riyadiya
                          </option>
                          <option value={10} state-id={1}>
                            Al Madinat Al Riyadiya
                          </option>
                          <option value={11} state-id={1}>
                            Al Mafraq
                          </option>
                          <option value={91} state-id={2}>
                            Al Mahatah
                          </option>
                          <option value={276} state-id={3}>
                            Al Majaz
                          </option>
                          <option value={92} state-id={2}>
                            Al MajazÂ
                          </option>
                          <option value={93} state-id={2}>
                            Al Mamzar
                          </option>
                          <option value={94} state-id={2}>
                            Al Maqam
                          </option>
                          <option value={95} state-id={2}>
                            Al Maqtaa
                          </option>
                          <option value={12} state-id={1}>
                            Al Maqtaa
                          </option>
                          <option value={277} state-id={3}>
                            Al Mareija
                          </option>
                          <option value={13} state-id={1}>
                            Al Markaziya
                          </option>
                          <option value={96} state-id={2}>
                            Al Markaziya
                          </option>
                          <option value={14} state-id={1}>
                            Al Markaziyah
                          </option>
                          <option value={97} state-id={2}>
                            Al Maryah Island
                          </option>
                          <option value={15} state-id={1}>
                            Al Mina
                          </option>
                          <option value={16} state-id={1}>
                            Al Mirfa
                          </option>
                          <option value={278} state-id={3}>
                            Al Mirgab
                          </option>
                          <option value={98} state-id={2}>
                            Al Mizhar
                          </option>
                          <option value={17} state-id={1}>
                            Al Muhairy
                          </option>
                          <option value={279} state-id={3}>
                            Al Mujarrah
                          </option>
                          <option value={99} state-id={2}>
                            Al Muraqqabat
                          </option>
                          <option value={18} state-id={1}>
                            Al Mushrif
                          </option>
                          <option value={100} state-id={2}>
                            Al Mushrif
                          </option>
                          <option value={280} state-id={3}>
                            Al Nabba
                          </option>
                          <option value={281} state-id={3}>
                            Al Nahda
                          </option>
                          <option value={101} state-id={2}>
                            Al Nahda
                          </option>
                          <option value={19} state-id={1}>
                            Al Nahyan
                          </option>
                          <option value={102} state-id={2}>
                            Al Nahyan
                          </option>
                          <option value={103} state-id={2}>
                            Al Nakheel
                          </option>
                          <option value={104} state-id={2}>
                            Al Nasseriya
                          </option>
                          <option value={105} state-id={2}>
                            Al Nuaimiyah
                          </option>
                          <option value={282} state-id={3}>
                            Al Nud
                          </option>
                          <option value={106} state-id={2}>
                            Al Qouz
                          </option>
                          <option value={283} state-id={3}>
                            Al Qulayaa
                          </option>
                          <option value={107} state-id={2}>
                            Al Qurm
                          </option>
                          <option value={108} state-id={2}>
                            Al Qusais
                          </option>
                          <option value={20} state-id={1}>
                            Al Raha
                          </option>
                          <option value={109} state-id={2}>
                            Al Raha
                          </option>
                          <option value={21} state-id={1}>
                            Al Rahba
                          </option>
                          <option value={110} state-id={2}>
                            Al Ras Al Khadar
                          </option>
                          <option value={111} state-id={2}>
                            Al Rashidiya
                          </option>
                          <option value={22} state-id={1}>
                            Al Rawdha Area
                          </option>
                          <option value={23} state-id={1}>
                            Al Reef
                          </option>
                          <option value={24} state-id={1}>
                            Al Reem Island
                          </option>
                          <option value={25} state-id={1}>
                            Al Remah
                          </option>
                          <option value={284} state-id={3}>
                            Al Rifah
                          </option>
                          <option value={112} state-id={2}>
                            Al Rigga
                          </option>
                          <option value={113} state-id={2}>
                            Al Rolla
                          </option>
                          <option value={114} state-id={2}>
                            Al Rumailah
                          </option>
                          <option value={115} state-id={2}>
                            Al Ruwais
                          </option>
                          <option value={116} state-id={2}>
                            Al Safa
                          </option>
                          <option value={26} state-id={1}>
                            Al samha
                          </option>
                          <option value={117} state-id={2}>
                            Al Sanaiya
                          </option>
                          <option value={118} state-id={2}>
                            Al Sarooj
                          </option>
                          <option value={119} state-id={2}>
                            Al Satwa
                          </option>
                          <option value={285} state-id={3}>
                            Al Seef
                          </option>
                          <option value={120} state-id={2}>
                            Al Shahama
                          </option>
                          <option value={27} state-id={1}>
                            Al Shahama
                          </option>
                          <option value={121} state-id={2}>
                            Al Shamkha
                          </option>
                          <option value={122} state-id={2}>
                            Al Sufouh
                          </option>
                          <option value={286} state-id={3}>
                            Al Taawun
                          </option>
                          <option value={28} state-id={1}>
                            Al Wahda
                          </option>
                          <option value={123} state-id={2}>
                            Al Warqa
                          </option>
                          <option value={124} state-id={2}>
                            Al Wathba
                          </option>
                          <option value={287} state-id={3}>
                            Al Yarmook
                          </option>
                          <option value={125} state-id={2}>
                            Al Zaab
                          </option>
                          <option value={29} state-id={1}>
                            Al Zahiyah
                          </option>
                          <option value={126} state-id={2}>
                            Arabian Ranches
                          </option>
                          <option value={30} state-id={1}>
                            Baniyas
                          </option>
                          <option value={127} state-id={2}>
                            Baniyas Tower
                          </option>
                          <option value={128} state-id={2}>
                            Barsha
                          </option>
                          <option value={129} state-id={2}>
                            Bawadi Mall
                          </option>
                          <option value={130} state-id={2}>
                            Buhaira Corniche
                          </option>
                          <option value={131} state-id={2}>
                            Buheirah Corniche
                          </option>
                          <option value={132} state-id={2}>
                            Bur Dubai
                          </option>
                          <option value={133} state-id={2}>
                            Business Bay
                          </option>
                          <option value={134} state-id={2}>
                            Bussiness Bay
                          </option>
                          <option value={32} state-id={1}>
                            Central Market
                          </option>
                          <option value={135} state-id={2}>
                            Dafan Al Khor
                          </option>
                          <option value={136} state-id={2}>
                            Deira
                          </option>
                          <option value={137} state-id={2}>
                            Deira City Centre
                          </option>
                          <option value={138} state-id={2}>
                            Deira City Centre Area
                          </option>
                          <option value={139} state-id={2}>
                            DIFC
                          </option>
                          <option value={140} state-id={2}>
                            DIP
                          </option>
                          <option value={141} state-id={2}>
                            Discovery gardens
                          </option>
                          <option value={142} state-id={2}>
                            Downtown
                          </option>
                          <option value={143} state-id={2}>
                            Downtown Dubai
                          </option>
                          <option value={144} state-id={2}>
                            Dubai - Al Ain Road
                          </option>
                          <option value={145} state-id={2}>
                            Dubai Al-Ain Road
                          </option>
                          <option value={146} state-id={2}>
                            Dubai Festival City
                          </option>
                          <option value={147} state-id={2}>
                            Dubai Hills
                          </option>
                          <option value={148} state-id={2}>
                            Dubai International Airport
                          </option>
                          <option value={149} state-id={2}>
                            Dubai International Airport Area
                          </option>
                          <option value={150} state-id={2}>
                            Dubai Internet City
                          </option>
                          <option value={152} state-id={2}>
                            Dubai Knowledge Village
                          </option>
                          <option value={153} state-id={2}>
                            Dubai land
                          </option>
                          <option value={154} state-id={2}>
                            Dubai Logistics City
                          </option>
                          <option value={155} state-id={2}>
                            Dubai Mall
                          </option>
                          <option value={156} state-id={2}>
                            Dubai Marina
                          </option>
                          <option value={157} state-id={2}>
                            Dubai Media City
                          </option>
                          <option value={158} state-id={2}>
                            Dubai Motor City
                          </option>
                          <option value={159} state-id={2}>
                            Dubai Silicon Oasis
                          </option>
                          <option value={160} state-id={2}>
                            Dubai South
                          </option>
                          <option value={161} state-id={2}>
                            Dubai Sports City
                          </option>
                          <option value={162} state-id={2}>
                            Dubai Studio City
                          </option>
                          <option value={163} state-id={2}>
                            Dubai World Central
                          </option>
                          <option value={164} state-id={2}>
                            Dubai-Al Ain Road
                          </option>
                          <option value={165} state-id={2}>
                            Eastern Mangroves
                          </option>
                          <option value={166} state-id={2}>
                            Embassies District
                          </option>
                          <option value={33} state-id={1}>
                            Embassies District
                          </option>
                          <option value={167} state-id={2}>
                            Emirates Hill
                          </option>
                          <option value={168} state-id={2}>
                            Emirates Hills
                          </option>
                          <option value={169} state-id={2}>
                            Emirates Road
                          </option>
                          <option value={170} state-id={2}>
                            Festival City
                          </option>
                          <option value={171} state-id={2}>
                            Fishing Harbor
                          </option>
                          <option value={172} state-id={2}>
                            Fujairah City
                          </option>
                          <option value={173} state-id={2}>
                            Fujairha City
                          </option>
                          <option value={174} state-id={2}>
                            Garhoud
                          </option>
                          <option value={175} state-id={2}>
                            Gayathi
                          </option>
                          <option value={34} state-id={1}>
                            Gharbia Region
                          </option>
                          <option value={176} state-id={2}>
                            Haleefat
                          </option>
                          <option value={177} state-id={2}>
                            Halwan
                          </option>
                          <option value={288} state-id={3}>
                            Halwan Suburb
                          </option>
                          <option value={35} state-id={1}>
                            Hamdan Street
                          </option>
                          <option value={179} state-id={2}>
                            Hazza Bin Zayed Street
                          </option>
                          <option value={180} state-id={2}>
                            Ibn Battuta
                          </option>
                          <option value={181} state-id={2}>
                            IMPZ
                          </option>
                          <option value={289} state-id={3}>
                            Industrial Area
                          </option>
                          <option value={182} state-id={2}>
                            Industrial Area
                          </option>
                          <option value={183} state-id={2}>
                            International City
                          </option>
                          <option value={184} state-id={2}>
                            Jafza
                          </option>
                          <option value={185} state-id={2}>
                            Jazira Al Hamra
                          </option>
                          <option value={186} state-id={2}>
                            JBR
                          </option>
                          <option value={187} state-id={2}>
                            Jebel Ali
                          </option>
                          <option value={188} state-id={2}>
                            Jebel Ali Village
                          </option>
                          <option value={189} state-id={2}>
                            JLT
                          </option>
                          <option value={190} state-id={2}>
                            Jumeirah
                          </option>
                          <option value={191} state-id={2}>
                            Jumeirah 3
                          </option>
                          <option value={192} state-id={2}>
                            Jumeirah Beach Residence
                          </option>
                          <option value={193} state-id={2}>
                            Jumeirah Beach Road
                          </option>
                          <option value={194} state-id={2}>
                            Jumeirah Gold Estates
                          </option>
                          <option value={195} state-id={2}>
                            Jumeirah heights
                          </option>
                          <option value={196} state-id={2}>
                            Jumeirah Islands
                          </option>
                          <option value={197} state-id={2}>
                            Jumeirah Lake Towers
                          </option>
                          <option value={198} state-id={2}>
                            Jumeirah Lake Towers(JLT)
                          </option>
                          <option value={199} state-id={2}>
                            Jumeirah Lakes Towers
                          </option>
                          <option value={200} state-id={2}>
                            Jumeirah Park
                          </option>
                          <option value={201} state-id={2}>
                            Jumeirah Village Circle
                          </option>
                          <option value={202} state-id={2}>
                            Jumeirah Village Triangle
                          </option>
                          <option value={203} state-id={2}>
                            Kahlifa Park
                          </option>
                          <option value={204} state-id={2}>
                            Kalifa City
                          </option>
                          <option value={205} state-id={2}>
                            Karama
                          </option>
                          <option value={206} state-id={2}>
                            Khalid Bin Al Waleed Road
                          </option>
                          <option value={207} state-id={2}>
                            Khalidiya
                          </option>
                          <option value={208} state-id={2}>
                            Khalifa city
                          </option>
                          <option value={36} state-id={1}>
                            Khalifa City
                          </option>
                          <option value={209} state-id={2}>
                            Khalifa Park
                          </option>
                          <option value={210} state-id={2}>
                            Khalifa Park Area
                          </option>
                          <option value={211} state-id={2}>
                            Madina Mall
                          </option>
                          <option value={212} state-id={2}>
                            Madinat Jumeirah
                          </option>
                          <option value={37} state-id={1}>
                            Madinat Zayed
                          </option>
                          <option value={213} state-id={2}>
                            Mall of the Emirates
                          </option>
                          <option value={214} state-id={2}>
                            Mankhool
                          </option>
                          <option value={215} state-id={2}>
                            Marina Mall
                          </option>
                          <option value={216} state-id={2}>
                            Marina Village
                          </option>
                          <option value={38} state-id={1}>
                            Marina Village
                          </option>
                          <option value={39} state-id={1}>
                            Masdar City
                          </option>
                          <option value={217} state-id={2}>
                            Masdar City
                          </option>
                          <option value={218} state-id={2}>
                            Mazyad Mall
                          </option>
                          <option value={219} state-id={2}>
                            Meadows
                          </option>
                          <option value={220} state-id={2}>
                            Meena Bazar
                          </option>
                          <option value={40} state-id={1}>
                            Mezairaa
                          </option>
                          <option value={221} state-id={2}>
                            Mira Oasis
                          </option>
                          <option value={222} state-id={2}>
                            Mirdif
                          </option>
                          <option value={223} state-id={2}>
                            Mizhar
                          </option>
                          <option value={224} state-id={2}>
                            Motor City
                          </option>
                          <option value={225} state-id={2}>
                            Mudon
                          </option>
                          <option value={226} state-id={2}>
                            Muhaisnah
                          </option>
                          <option value={41} state-id={1}>
                            Muroor
                          </option>
                          <option value={227} state-id={2}>
                            Muroor Road
                          </option>
                          <option value={42} state-id={1}>
                            Musaffah
                          </option>
                          <option value={228} state-id={2}>
                            Mushairif Commercial
                          </option>
                          <option value={43} state-id={1}>
                            Mushrif
                          </option>
                          <option value={44} state-id={1}>
                            Mushrif Mall
                          </option>
                          <option value={45} state-id={1}>
                            Mussafah
                          </option>
                          <option value={229} state-id={2}>
                            Mussaffah
                          </option>
                          <option value={230} state-id={2}>
                            Nad AL Sheba
                          </option>
                          <option value={231} state-id={2}>
                            Nadd Al Hamar
                          </option>
                          <option value={46} state-id={1}>
                            Najda
                          </option>
                          <option value={232} state-id={2}>
                            Najda Area
                          </option>
                          <option value={233} state-id={2}>
                            Officer City
                          </option>
                          <option value={47} state-id={1}>
                            Old airport road
                          </option>
                          <option value={234} state-id={2}>
                            Oud Mehta
                          </option>
                          <option value={235} state-id={2}>
                            Oud Metha
                          </option>
                          <option value={236} state-id={2}>
                            Palm Jumeirah
                          </option>
                          <option value={237} state-id={2}>
                            Qusais
                          </option>
                          <option value={238} state-id={2}>
                            Ras Al Khor
                          </option>
                          <option value={239} state-id={2}>
                            Rashidiya
                          </option>
                          <option value={240} state-id={2}>
                            Remraam
                          </option>
                          <option value={290} state-id={3}>
                            Rolla square
                          </option>
                          <option value={48} state-id={1}>
                            Saadiyat Island
                          </option>
                          <option value={291} state-id={3}>
                            Saif Zone
                          </option>
                          <option value={241} state-id={2}>
                            Samha 1
                          </option>
                          <option value={242} state-id={2}>
                            Samha 2
                          </option>
                          <option value={49} state-id={1}>
                            Samha1
                          </option>
                          <option value={50} state-id={1}>
                            Samha2
                          </option>
                          <option value={243} state-id={2}>
                            Satwa
                          </option>
                          <option value={244} state-id={2}>
                            Shahaba
                          </option>
                          <option value={245} state-id={2}>
                            Shaikh Zayed Road
                          </option>
                          <option value={246} state-id={2}>
                            Sharjah City
                          </option>
                          <option value={247} state-id={2}>
                            Sharjah City Centre
                          </option>
                          <option value={248} state-id={2}>
                            Sheikh Rashid Bin Saeed St
                          </option>
                          <option value={249} state-id={2}>
                            Sheikh Zayed Road
                          </option>
                          <option value={250} state-id={2}>
                            Silicon Oasis
                          </option>
                          <option value={251} state-id={2}>
                            Springs
                          </option>
                          <option value={252} state-id={2}>
                            Sustainable City
                          </option>
                          <option value={253} state-id={2}>
                            Technopark
                          </option>
                          <option value={254} state-id={2}>
                            TECOM
                          </option>
                          <option value={255} state-id={2}>
                            The Greens
                          </option>
                          <option value={256} state-id={2}>
                            The Palm Jumeirah
                          </option>
                          <option value={257} state-id={2}>
                            Tourist Club Area
                          </option>
                          <option value={51} state-id={1}>
                            Tourist Club Area
                          </option>
                          <option value={258} state-id={2}>
                            Tourist Club Area (Al Zahiyah)
                          </option>
                          <option value={52} state-id={1}>
                            Tourist Club Area(Al Zahiyah)
                          </option>
                          <option value={259} state-id={2}>
                            Town Square
                          </option>
                          <option value={260} state-id={2}>
                            Town Square, Al Qudra Road
                          </option>
                          <option value={261} state-id={2}>
                            Trade Centre Area
                          </option>
                          <option value={262} state-id={2}>
                            Umm Al Nar
                          </option>
                          <option value={263} state-id={2}>
                            Umm Hurair
                          </option>
                          <option value={264} state-id={2}>
                            Umm huriar
                          </option>
                          <option value={265} state-id={2}>
                            Umm Suqeim
                          </option>
                          <option value={266} state-id={2}>
                            Umm Suqueim
                          </option>
                          <option value={292} state-id={3}>
                            Universary City
                          </option>
                          <option value={293} state-id={3}>
                            University City
                          </option>
                          <option value={267} state-id={2}>
                            University City
                          </option>
                          <option value={268} state-id={2}>
                            Wafi Mall
                          </option>
                          <option value={294} state-id={3}>
                            Wasit Suburb
                          </option>
                          <option value={269} state-id={2}>
                            Yarmouk
                          </option>
                          <option value={270} state-id={2}>
                            Yas Island
                          </option>
                          <option value={53} state-id={1}>
                            YasIsland
                          </option>
                          <option value={271} state-id={2}>
                            Zabeel
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 form-inti registration hide_zip_vik">
                  <div className="form-group ">
                    <div className="icon">
                      <i className="fa fa-flag" />
                    </div>
                    <input
                      type="text"
                      defaultValue={111111}
                      name="pickup_pincode"
                      id="pickup_pincode"
                      maxLength={6}
                      placeholder="Zipcode"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <div className="form-group h-100">
                    <textarea
                      placeholder="Booking Remarks - Any Instructions"
                      name="booking_remark"
                      id="booking_remark"
                      maxLength={200}
                      className="form-control"
                      rows={3}
                      cols={3}
                      autoComplete="off"
                      defaultValue={""}
                    />
                  </div>
                  <div className="clearfix"></div>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="payment_details">
                    <label className="light-gray hide_this hidden standard_fee">
                      Standard Price
                    </label>
                    <label className="hide_this hidden standard_fee light-gray">
                      <span className="bk_sm_currency" />{" "}
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
                      &nbsp;&nbsp;
                      <span className="bk_sm_currency" />{" "}
                      <span className="cls_discounted_fee" />
                    </label>
                    <label className="hide_this hidden baby_fee baby_title" />
                    <label className="hide_this hidden baby_fee">
                      <span className="bk_sm_currency" />{" "}
                      <span className="cls_baby_seat_fee" />
                    </label>
                    <label className="hide_this hidden booking_fee">
                      Booking Fee
                    </label>
                    <label className="hide_this hidden booking_fee">
                      <span className="bk_sm_currency" />{" "}
                      <span className="cls_booking_fee" />
                    </label>
                    <label className="hide_this hidden process_fee border-0">
                      Vehicle Passing Fee{" "}
                    </label>
                    <label className="hide_this hidden process_fee border-0">
                      <span className="bk_sm_currency" />{" "}
                      <span className="cls_booking_process_fee">0</span>
                    </label>
                    <p style={{ flex: "100%" }} className="text-left w-100 ">
                      <small style={{ fontSize: 9 }}>
                        (Vehicle pass fee is subject to change)
                      </small>
                    </p>
                  </div>
                  <div className="payment_details">
                    <label className="hide_this hidden tax_name tax_fee">
                      VAT &amp; Taxes
                    </label>
                    <label className="hide_this hidden tax_fee">
                      <span className="bk_sm_currency" />{" "}
                      <span className="cls_booking_tax">0</span>
                    </label>
                    <label className="hide_this hidden total_pay">
                      Total Payable
                    </label>
                    <label className="hide_this hidden total_pay">
                      <span className="bk_sm_currency" />{" "}
                      <span className="cls_booking_payable">0</span>
                      <span
                        style={{ flex: "100%" }}
                        className="text-right w-100 hide_this hidden refund_txt"
                      >
                        <small className="refund_text" />
                      </span>
                    </label>
                    <p
                      style={{ flex: "100%" }}
                      className="text-right w-100 hide_this hidden saving_txt"
                    >
                      <small className="saving_text" />
                    </p>
                  </div>
                </div>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
      <div
        id="step-4"
        className="tab-pane"
        role="tabpanel"
        aria-labelledby="step-4"
        style={{ display: "none" }}
      >
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
                    <span id="bk_sm_name" /> <span id="bk_sm_type" />
                  </span>
                  <ul className="bssub_info">
                    <li>
                      <span>
                        <i className="fa fa-envelope" />{" "}
                        <span id="bk_sm_email" />
                      </span>
                      <span>
                        <i className="fa fa-mobile" />{" "}
                        <span id="bk_sm_mobile" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-credit-card" />{" "}
                        <span id="bk_sm_card_name" />
                      </span>
                      <span>
                        <i className="fa fa-credit-card" />{" "}
                        <span id="bk_sm_card_number" />
                      </span>
                    </li>
                  </ul>
                </div>
                <span
                  className="bs_status_type bsdiscounted"
                  id="bk_sm_bk_type"
                />
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
                        <strong id="bk_sm_car_number" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <i className="fas fa-car" /> Car Make / Model{" "}
                        </span>
                        <strong id="bk_sm_car_model" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <i className="fas fa-car" /> Car Type{" "}
                        </span>
                        <strong id="bk_sm_car_type" />
                      </span>
                    </li>
                    <li>
                      <span>
                        <span>
                          <i className="fas fa-car" /> Registration At{" "}
                        </span>
                        <strong id="bk_sm_register_at" />
                      </span>
                    </li>
                  </ul>
                  <ul className="bssub_info"></ul>
                </div>
              </li>
              <li className="bstitle">Contact Details</li>
              <li className="bslisting clearfix">
                <div className="bsimage_wrapper">
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/from.png"
                    alt=""
                  />
                </div>
                <div className="bsinfo">
                  <span className="bssub_title">Address</span>
                  <ul className="bssub_info">
                    <li>
                      <span>
                        <i className="fa fa-map-marker" />{" "}
                        <span id="bk_sm_address" />{" "}
                        <span id="bk_sm_pickup_pincode" />
                      </span>
                    </li>
                  </ul>
                  <ul className="bssub_info">
                    <li>
                      <span>
                        <span>
                          <i className="fa fa-calendar" /> Date of Service
                        </span>
                        <strong id="bk_sm_service_date" />
                      </span>
                    </li>
                  </ul>
                </div>
                <span
                  className="bs_status_type bsguest"
                  id="bk_sm_contact_city"
                />
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
                        <i className="fa fa-calendar" /> 08 Oct 2022
                      </span>
                      <span>
                        <i className="fa fa-clock-o" /> 02:58 PM
                      </span>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="bstitle">Payment summary</li>
              <li className="bslisting  clearfix d-block">
                <div className="payment_details">
                  <label className="hide_this hidden light-gray standard_fee">
                    Standard Price
                  </label>
                  <label className="hide_this hidden standard_fee light-gray">
                    <span className="bk_sm_currency" />{" "}
                    <span className="cls_standard_fee" />
                  </label>
                  <label className="hide_this hidden light-gray discount_fee">
                    <span className="discount_percentage" />
                  </label>
                  <label className="hide_this hidden discount_fee text-success">
                    <i
                      className=" text-success"
                      style={{ fontSize: 18, fontWeight: "bold" }}
                    >
                      -
                    </i>
                    &nbsp;&nbsp;
                    <span className="bk_sm_currency" />{" "}
                    <span className="cls_discounted_fee" />
                  </label>
                  <label className="hide_this hidden baby_fee baby_title" />
                  <label className="hide_this hidden baby_fee">
                    <span className="bk_sm_currency" />{" "}
                    <span className="cls_baby_seat_fee" />
                  </label>
                  <label className="hide_this hidden booking_fee">
                    Booking Fee
                  </label>
                  <label className="hide_this hidden booking_fee">
                    <span className="bk_sm_currency" />{" "}
                    <span className="cls_booking_fee" />
                  </label>
                  <label className="hide_this hidden process_fee border-0">
                    Vehicle Passing Fee{" "}
                  </label>
                  <label className="hide_this hidden process_fee border-0">
                    <span className="bk_sm_currency" />{" "}
                    <span className="cls_booking_process_fee" />
                  </label>
                  <p style={{ flex: "100%" }} className="text-left w-100 ">
                    <small style={{ fontSize: 9 }}>
                      (Vehicle pass fee is subject to change)
                    </small>
                  </p>
                </div>
                <div className="payment_details">
                  <label className="hide_this hidden tax_name tax_fee">
                    VAT &amp; Taxes
                  </label>
                  <label className="hide_this hidden tax_fee">
                    <span className="bk_sm_currency" />{" "}
                    <span className="cls_booking_tax" />
                  </label>
                  <label>Total Payable</label>
                  <label>
                    <span className="bk_sm_currency" />{" "}
                    <span className="cls_booking_payable" />
                    <span
                      style={{ flex: "100%" }}
                      className="text-right w-100 hide_this hidden refund_txt"
                    >
                      <small id="refund_text" />
                    </span>
                  </label>
                </div>
                <p
                  style={{ flex: "100%" }}
                  className="text-right w-100 hide_this hidden saving_txt"
                >
                  <small className="saving_text" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div
      className="toolbar toolbar-bottom"
      role="toolbar"
      style={{ textAlign: "right" }}
    >
      <button className="btn sw-btn-prev disabled" type="button">
        Previous
      </button>
      <button className="btn sw-btn-next" type="button">
        Next
      </button>
      <button className="btn-info custom-btn theme-2 d-none regsitration_submit_btn">
        Proceed to Payment
      </button>
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
        Some information is missing / invalid. Scroll up to see the errors.
      </label>
    </div>
  </div>
</div>


</>


)


}

export default CarRegistration;
