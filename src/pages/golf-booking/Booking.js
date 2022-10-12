import React from 'react';

function GolfBooking() {
  return (
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
                <a href="javascript:void(0);">Golf Booking</a>
              </li>
            </ul>
          </div>
          <div className="bread-title">
            <h2>Golf Booking</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      <div
        className="common-section golf-booking sw sw-theme-dots sw-justified"
        id="smartwizard"
      >
        <div className="container">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link inactive active" href="#step-1">
                <strong>Player Details</strong> <br />
                <span>Select Your Eligible Card</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link inactive" href="#step-2">
                <strong>Golf Course </strong> <br />
                <span>Choose Preferred Golf Course</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link inactive" href="#step-3">
                <strong>Play Date &amp; Guest(s)</strong> <br />
                <span>Check availability for the play</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link inactive" href="#step-4">
                <strong>Booking Summary</strong> <br />
                <span>
                  Reconfirm your booking
                  <br />
                  details
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
              {/* Golf Booking Start */}
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
                      defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
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
                                  <u>
                                    Click here to update handicap via your profile
                                  </u>
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
                          <legend className="checkbox-group-legend">
                            Booking Type
                          </legend>
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
                            defaultChecked=""
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
                <div className="form-inner">
                  <form
                    action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
                    className="form airport-transfer-form"
                    id="golf_form_two"
                    method="post"
                    acceptCharset="utf-8"
                    noValidate="novalidate"
                  >
                    <input
                      type="hidden"
                      name="csrf_form_name"
                      defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
                      autoComplete="off"
                    />
                    <marquee width="100%" direction="left" height="auto">
                      Arabian Ranches golf course is closed from 16th May’22 to 20th
                      May’22 , Dubai Hills is closed from 30th May’22 – 3rd June’22
                      and Saadiyat Beach Golf Club closed from 30-May’22 to 10-June'22
                      due to renovation.
                    </marquee>
                    <div className="row">
                      <div className="col-12">
                        <h4 className="d-flex justify-content-between align-items-center">
                          <span>Golf Course</span>
                        </h4>
                        <p>
                          Please fill in the details below so that we can get in
                          contact with you about our product.
                        </p>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-12 custom_radio">
                        <fieldset className="checkbox-group" id="country_list_div">
                          <legend className="checkbox-group-legend">
                            Select Country
                          </legend>
                          <label
                            className="form-check-label text-nowrap p-2 checkbox-wrapper"
                            htmlFor="United Arab Emirates"
                          >
                            <input
                              className="form-check-input select_country"
                              type="radio"
                              onclick="get_states_city_by_country();"
                              name="country"
                              id="United Arab Emirates"
                              defaultValue={2}
                              defaultChecked=""
                              is_state=""
                              data-is_state=""
                            />
                            <span className="country_name">United Arab Emirates</span>
                          </label>
                        </fieldset>
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-12 custom_radio" id="country_states">
                        <fieldset className="checkbox-group">
                          <legend className="checkbox-group-legend">
                            Select Emirates
                          </legend>
                        </fieldset>
                        <label
                          className="form-check-label text-nowrap p-2 checkbox-wrapper"
                          htmlFor="abu_dhabi"
                        >
                          <input
                            className="form-check-input state_city"
                            type="radio"
                            state_name="Abu Dhabi"
                            name="state_city"
                            id="abu_dhabi"
                            defaultValue={1}
                            data-is_state={0}
                            defaultChecked="checked"
                          />
                          <span className="state_name">Abu Dhabi</span>
                        </label>
                        <label
                          className="form-check-label text-nowrap p-2 checkbox-wrapper"
                          htmlFor="dubai"
                        >
                          <input
                            className="form-check-input state_city"
                            type="radio"
                            state_name="Dubai"
                            name="state_city"
                            id="dubai"
                            defaultValue={2}
                            data-is_state={0}
                          />
                          <span className="state_name">Dubai</span>
                        </label>
                        <label
                          className="form-check-label text-nowrap p-2 checkbox-wrapper"
                          htmlFor="sharjah"
                        >
                          <input
                            className="form-check-input state_city"
                            type="radio"
                            state_name="Sharjah"
                            name="state_city"
                            id="sharjah"
                            defaultValue={3}
                            data-is_state={0}
                          />
                          <span className="state_name">Sharjah</span>
                        </label>
                      </div>
                    </div>
                    <div className="row mt-5 mb-5" id="golf_course_list">
                      <div className="col-12 horizontal_listing golf_list">
                        <fieldset className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start">
                          <legend className="checkbox-group-legend">
                            Select Golf Course
                          </legend>
                          <div className="checkbox">
                            <label className="checkbox-wrapper">
                              <input
                                name="golf_course_id"
                                onchange="get_available_date();select_golf_course();"
                                gc_id="1TV38a9HGZjTi8CJi/BkgQ=="
                                gc_name="Yas Links Golf Club"
                                gc_state="Abu Al Abyad"
                                type="radio"
                                className="checkbox-input selected_golf_course"
                                defaultChecked="checked"
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img src="https://daclkx5lzs4xm.cloudfront.net/GCImages/33.jpg?v=1" />
                                </span>
                                <span className="checkbox-label">
                                  <strong>Yas Links Golf Club</strong>
                                  <small>Abu Dhabi</small>
                                </span>
                              </span>
                              <a href="javascript:void(0)" className="readmore" />
                            </label>
                            <div className="accordian_body">
                              <div className="row">
                                <div className="col-md-8">
                                  <img
                                    src="https://daclkx5lzs4xm.cloudfront.net/GCImages/33.jpg?v=1"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-md-12">
                                  <p>
                                    <strong>Yas Links Golf Club</strong>{" "}
                                  </p>
                                  <p className="mb-1 gc_address">
                                    <i className="fa fa-map-marker" /> Yas Island, Abu
                                    Dhabi, United Arab Emirates
                                  </p>
                                  <p>
                                    <small>
                                      <i className="fa fa-map-marker" /> Abu Dhabi
                                    </small>
                                  </p>
                                  <p className="mb-3 gc_description">
                                    A course that will test professionals, enthrall
                                    amateurs and excite beginners. A course that
                                    honours the traditions of the game, demands
                                    respect, yet offers so much. A course that
                                    celebrates the best in Links design, utilizes the
                                    unique weather conditions and complements its
                                    natural surroundings. A course that blends the
                                    latest in techniques and technology with the
                                    timeless traditions of the game. A course that is
                                    ready to be played, enjoyed and discovered by you
                                  </p>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="checkbox">
                            <label className="checkbox-wrapper">
                              <input
                                name="golf_course_id"
                                onchange="get_available_date();select_golf_course();"
                                gc_id="PWek+MGzdwiCPhaUyjUVlw=="
                                gc_name="Saadiyat Beach & Golf Club"
                                gc_state="Abu Al Abyad"
                                type="radio"
                                className="checkbox-input selected_golf_course"
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img src="https://daclkx5lzs4xm.cloudfront.net/GCImages/58.jpg?v=1" />
                                </span>
                                <span className="checkbox-label">
                                  <strong>Saadiyat Beach &amp; Golf Club</strong>
                                  <small>Abu Dhabi</small>
                                </span>
                              </span>
                              <a href="javascript:void(0)" className="readmore" />
                            </label>
                            <div className="accordian_body">
                              <div className="row">
                                <div className="col-md-8">
                                  <img
                                    src="https://daclkx5lzs4xm.cloudfront.net/GCImages/58.jpg?v=1"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-md-12">
                                  <p>
                                    <strong>Saadiyat Beach &amp; Golf Club</strong>{" "}
                                  </p>
                                  <p className="mb-1 gc_address">
                                    <i className="fa fa-map-marker" /> Sheikh Khalifa
                                    Highway (E 12 Road), Abu Dhabi, United Arab
                                    Emirates
                                  </p>
                                  <p>
                                    <small>
                                      <i className="fa fa-map-marker" /> Abu Dhabi
                                    </small>
                                  </p>
                                  <p className="mb-3 gc_description">
                                    Saadiyat Beach Golf Club has 18 holes and is
                                    considered to be one of the most captivating golf
                                    projects around the world. The course has natural
                                    beauty that creates unparalleled experience. It
                                    also has glittering blue water which adds to the
                                    beauty along with white sands.
                                    <br />
                                    It gives variety of golf experiences with each
                                    hole that has unique character. This course was
                                    designed by abiding to environmental guidelines.
                                    With that this course is able to accommodate with
                                    their scheme Member for a Day with highest
                                    customer service. <br />
                                    Saadiyat Beach Golf Club is just ten minutes away
                                    from the city centre, nearly 20 minutes away from
                                    Abu Dhabi International Airport and has become
                                    ideal for international and national golfers.
                                  </p>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                          <div className="checkbox">
                            <label className="checkbox-wrapper">
                              <input
                                name="golf_course_id"
                                onchange="get_available_date();select_golf_course();"
                                gc_id="oul8G6yNTNWYT2yh9UY0uA=="
                                gc_name="Abu Dhabi Golf Club"
                                gc_state="Abu Al Abyad"
                                type="radio"
                                className="checkbox-input selected_golf_course"
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img src="https://daclkx5lzs4xm.cloudfront.net/GCImages/72.jpg?v=1" />
                                </span>
                                <span className="checkbox-label">
                                  <strong>Abu Dhabi Golf Club</strong>
                                  <small>Abu Dhabi</small>
                                </span>
                              </span>
                              <a href="javascript:void(0)" className="readmore" />
                            </label>
                            <div className="accordian_body">
                              <div className="row">
                                <div className="col-md-8">
                                  <img
                                    src="https://daclkx5lzs4xm.cloudfront.net/GCImages/72.jpg?v=1"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="col-md-12">
                                  <p>
                                    <strong>Abu Dhabi Golf Club</strong>{" "}
                                  </p>
                                  <p className="mb-1 gc_address">
                                    <i className="fa fa-map-marker" /> Sas Al Nakhl,
                                    Abu Dhabi, United Arab Emirates
                                  </p>
                                  <p>
                                    <small>
                                      <i className="fa fa-map-marker" /> Abu Dhabi
                                    </small>
                                  </p>
                                  <p className="mb-3 gc_description">
                                    It is a 27-hole championship course and is
                                    considered to be home to PGA European Tour Abu
                                    Dhabi HSBC Golf Championship. It provides tough
                                    but fair challenge to the golfers. It has lush
                                    fairways, greens and strategically placed bunkers.
                                    <br />
                                    <br />
                                    It is also called super course and is spread
                                    across 162 hectares. It also has a Golf Club that
                                    offers one of the finest 27-hole championships,
                                    which is unparallel throughout Middle East.
                                  </p>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-12">
                        <h6 className="d-flex justify-content-between align-items-center">
                          <span>Disclaimer :</span>
                        </h6>
                        <p>
                          In case the Cardholder does not show up at the golf course
                          for a confirmed booking, or cancels at short notice, a NO
                          SHOW charge will be applicable. To avoid paying the No Show
                          charge on a confirmed booking, please ensure that
                          cancellations, if any, are made 4 clear days prior to the
                          date of play (which does not include the date of play and
                          date of cancellation).
                        </p>
                      </div>
                    </div>
                  </form>{" "}
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
                      defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
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
                          <label className="hide_this hidden booking_fee">
                            Booking Fee
                          </label>
                          <label className="hide_this hidden booking_fee">
                            <span className="bk_sm_currency" />{" "}
                            <span className="cls_booking_fee" />
                          </label>
                          <label className="hide_this hidden process_fee">
                            Processing Fee
                          </label>
                          <label className="hide_this hidden process_fee">
                            <span className="bk_sm_currency" />{" "}
                            <span className="cls_booking_process_fee">0</span>
                          </label>
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
                    <li className="bstitle">Player Details</li>
                    <li className="bslisting clearfix">
                      <div className="bsimage_wrapper">
                        <img
                          src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golfer.png"
                          alt="Twitter"
                        />
                      </div>
                      <div className="bsinfo">
                        <span className="bssub_title" id="bk_sm_name" />
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
                            <span>
                              <i className="fa fa-star" />{" "}
                              <span id="bk_sm_handicap" />
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
                    <li className="bstitle">
                      Date &amp; Time of Play and Guest Details
                    </li>
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
                              <span id="bk_sm_date" />
                            </span>
                            <span>
                              <i className="fa fa-clock-o" /> <span id="bk_sm_time" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <fieldset id="bk_sm_guest_list_div" />
                    <li className="bstitle">Golf Course</li>
                    <li className="bslisting clearfix">
                      <div className="bsimage_wrapper">
                        <img
                          src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/golf.png"
                          alt="Golf course"
                        />
                      </div>
                      <div className="bsinfo">
                        <span className="bssub_title" id="bk_sm_golf_course_name" />
                        <p>
                          <i className="fa fa-map-marker" />
                          <span className="" id="bk_sm_golf_course_address" />
                        </p>
                        <p id="bk_sm_golf_course_description" />
                      </div>
                      <span
                        className="bs_status_type bscountry"
                        id="bk_sm_golf_course_location"
                      />
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
                              <i className="fa fa-calendar" /> 06 Oct 2022
                            </span>
                            <span>
                              <i className="fa fa-clock-o" /> 04:42 PM
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
                      <label className="hide_this hidden light-gray standard_fee">
                        Green Fee
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
                      <label className="hide_this hidden booking_fee">
                        Booking Fee
                      </label>
                      <label className="hide_this hidden booking_fee">
                        <span className="bk_sm_currency" />{" "}
                        <span className="cls_booking_fee" />
                      </label>
                      <label className="hide_this hidden process_fee">
                        Processing Fee
                      </label>
                      <label className="hide_this hidden process_fee">
                        <span className="bk_sm_currency" />{" "}
                        <span className="cls_booking_process_fee" />
                      </label>
                      <label className="hide_this hidden tax_name tax_fee">
                        VAT &amp; Taxes
                      </label>
                      <label className="hide_this hidden tax_fee">
                        <span className="bk_sm_currency" />{" "}
                        <span className="cls_booking_tax" />
                      </label>
                      <label className="hide_this hidden total_pay">
                        Total Payable
                      </label>
                      <label className="hide_this hidden total_pay">
                        <span className="bk_sm_currency" />{" "}
                        <span className="cls_booking_payable" />
                        <span
                          style={{ flex: "100%" }}
                          className="hide_this hidden text-right w-100 refund_txt"
                        >
                          <small>(Refundable)</small>
                        </span>
                      </label>
                      <p
                        style={{ flex: "100%" }}
                        className="hide_this hidden text-right w-100 saving_txt"
                      >
                        <small className="saving_text" />
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div id="service_form_error" />
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
            <button className="btn-info custom-btn theme-2 d-none golf_submit_btn">
              Submit
            </button>
          </div>
          <div
            className="common-form-oth suggestion-fixed"
            style={{ display: "none" }}
          >
            <div className="suggestion">
              <div className="" id="suggestion_div">
                <form
                  action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
                  className="hidden"
                  id="available_date_form"
                  method="post"
                  acceptCharset="utf-8"
                  noValidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="csrf_form_name"
                    defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
                    autoComplete="off"
                  />
                  <div className="col-12">
                    <h4>Suggestion(s) </h4>
                    <h6 className="text-danger" id="suggestion_heading" />
                    <div
                      className="custom_radio border-0 checkbox-error-div"
                      id="available_date_div"
                    />
                    <div className="col-md-12  mt-2 p-0 ">
                      <div className="col-md-12 col-lg-8 p-0 form-inlabel h-100">
                        <div className="w-100">
                          <label>Time of Play</label>
                          <div className="form-group  h-100">
                            <div className="w-100 ">
                              <div className="col-6 col-sm-4 form-inlabel suggestion-time p-1">
                                <select
                                  name="suggestion_time_hours"
                                  onchange="check_time(2);"
                                  id="suggestion_time_hours"
                                  className="select-time pl-2"
                                >
                                  <option value="">Hour</option>
                                </select>
                              </div>
                              <div className="col-6 col-sm-4 form-inlabel suggestion-time p-1">
                                <select
                                  name="suggestion_time_minutes"
                                  onchange="check_time(2);"
                                  id="suggestion_time_minutes"
                                  className="select-time pl-2"
                                >
                                  <option value="">Minute</option>
                                </select>
                              </div>
                              <div className="col-12 col-sm-4 form-inlabel suggestion-time p-1">
                                <select
                                  name="suggestion_time_format"
                                  onchange="check_time(2);"
                                  id="suggestion_time_format"
                                  className="select-time pl-2"
                                >
                                  <option value="">AM/PM</option>
                                  <option value="AM">AM</option>
                                  <option value="PM">PM</option>
                                </select>
                              </div>
                              <div className="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 m-0">
                    <div className="col-md-12 col-12 text-center">
                      <button
                        type="button"
                        className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1 "
                        id="available_date_btn"
                      >
                        Confirm with Another Date
                      </button>
                      <div className="clearfix" />
                    </div>
                  </div>
                </form>{" "}
                <form
                  action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
                  className=""
                  id="available_golf_form"
                  method="post"
                  acceptCharset="utf-8"
                  noValidate="novalidate"
                >
                  <input
                    type="hidden"
                    name="csrf_form_name"
                    defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
                    autoComplete="off"
                  />
                  <div className="w-100 p-3" id="available_golf_form_div">
                    <h4>Suggestion(s) For Golf Courses</h4>
                    <div className="col-12 horizontal_listing golf_list sugg-div">
                      <fieldset
                        className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start"
                        id="golf_course_data_div"
                      />
                    </div>
                    <div className="col-md-12  mt-4 p-0">
                      <div className="col-md-12 col-lg-8 mt-4 p-0 ">
                        <label>Time of Play</label>
                        <div className="form-group">
                          <div className="w-100">
                            <div className="col-6 col-sm-4 p-1 form-inlabel suggestion-time">
                              <select
                                name="golf_time_hours"
                                onchange="check_time(3);"
                                id="golf_time_hours"
                                className="select-time pl-2"
                              >
                                <option value="">Hour</option>
                              </select>
                            </div>
                            <div className="col-6 col-sm-4 p-1 form-inlabel suggestion-time">
                              <select
                                name="golf_time_minutes"
                                onchange="check_time(3);"
                                id="golf_time_minutes"
                                className="select-time pl-2"
                              >
                                <option value="">Minute</option>
                              </select>
                            </div>
                            <div className="col-12 col-sm-4 p-1 form-inlabel suggestion-time">
                              <select
                                name="golf_time_format"
                                onchange="check_time(3);"
                                id="golf_time_format"
                                className="select-time pl-2"
                              >
                                <option value="">AM/PM</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row w-100 m-0" id="available_golf_form_div_btn">
                    <div className="col-12 mt-3 text-center">
                      <button
                        type="button"
                        className="custom-btn theme-2 mb-3 mb-sm-0 order-0 order-sm-1 "
                        id="available_golf_btn"
                      >
                        Confirm with Another Golf Course
                      </button>
                    </div>
                  </div>
                </form>{" "}
              </div>
            </div>
          </div>
          {/* Modal Remove Guest from Golf Booking Confirmation Popup */}
          <div
            className="modal fade"
            id="remove_guest_modal"
            tabIndex={-1}
            role="dialog"
            data-backdrop="static"
            aria-labelledby="remove_guest_modalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-md">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="remove_guest_modalLabel">
                    Confirmation
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p id="guest_remove_alert" />
                </div>
                <div className="modal-footer d-flex flex-row justify-content-end align-items-center align-content-center">
                  <button className="custom-btn theme-1" id="remove_guest_yes">
                    Yes
                  </button>
                  <button className="custom-btn theme-2 ml-3" id="remove_guest_no">
                    No
                  </button>
                </div>
                <div className="col-12 mt-2">
                  <label
                    htmlFor="guest_remove-error"
                    id="guest_remove_error"
                    className="p-1 w-100 text-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal"
            id="timepicker_popup"
            tabIndex={-1}
            role="dialog"
            data-backdrop="static"
            aria-hidden="true"
          >
            <div className="modal-dialog timepicker_popup  modal-dialog-centered">
              <form
                action="https://latesttestemiratesnbdbenefits.thriwe.com/golf-booking"
                id="play_time_form"
                method="post"
                acceptCharset="utf-8"
              >
                <input
                  type="hidden"
                  name="csrf_form_name"
                  defaultValue="2d0b965cc39a51cb3558e0f29880d8e4"
                  autoComplete="off"
                />
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Select Time</h5>
                    <a type="button" className="golf_close" data-dismiss="modal">
                      ×
                    </a>
                  </div>
                  <div className="modal-body text-center">
                    <div className="col-12 col-md-12 col-lg-12 form-inlabel p-0">
                      <div className="form-group mt-0">
                        <div className="row">
                          <div className="col-4 pr-1 pl-1 ">
                            <select
                              name="time_hours"
                              onchange="check_time(1);"
                              id="time_hours"
                              className="select-time-popup pl-1"
                            >
                              <option value="">Hour</option>
                            </select>
                          </div>
                          <div className="col-4 pr-1 pl-1">
                            <select
                              name="time_minutes"
                              onchange="check_time(1);"
                              id="time_minutes"
                              className="select-time-popup pl-1"
                            >
                              <option value="">Minute</option>
                            </select>
                          </div>
                          <div className="col-4 pr-1 pl-1">
                            <select
                              name="time_format"
                              onchange="check_time(1);"
                              id="time_format"
                              className="select-time-popup pl-1"
                            >
                              <option value="">AM/PM</option>
                              <option value="AM">AM</option>
                              <option value="PM">PM</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="custom-btn theme-2 w-100 mb-3 mb-sm-0 order-0  m-1"
                      id="apply_time"
                    >
                      Apply
                    </button>
                  </div>
                  <div className="col-12 mt-3">
                    <label
                      htmlFor="play_time_form-error"
                      id="play_time_form_error"
                      className="p-1 w-100 text-center"
                    />
                  </div>
                </div>
              </form>{" "}
            </div>
          </div>
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


export default GolfBooking;