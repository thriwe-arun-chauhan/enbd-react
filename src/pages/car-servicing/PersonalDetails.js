import React from "react";

function PersonalDetails() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/car-servicing"
          className="form airport-transfer-form"
          id="service_form_one"
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
                    <a
                      // href="javascript:void(0);"
                      className="btn-fade"
                    >
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
          <div className="row ">
            <div className="col-12">
              <fieldset className="checkbox-group">
                <legend className="checkbox-group-legend">
                  Car Pickup Date &amp; Time
                </legend>
              </fieldset>
            </div>
            <div className="col-12 col-md-12 col-lg-6 form-inti service-car">
              <div className="form-group mt-0">
                <div className="icon">
                  <i className="fa fa-calendar" />
                </div>
                <input
                  type="text"
                  className="form-control datepicker hasDatepicker"
                  name="car_pickup_date"
                  id="car_pickup_date"
                  placeholder="Select Pickup Date"
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
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 form-inti time-pic">
              <div className="form-group">
                <div className="row">
                  <div className="col-4 pr-2">
                    <select
                      name="pickup_hours"
                      id="pickup_hours"
                      className="select-time pl-2"
                    >
                      <option value="">Hour</option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                      <option value={6}>06</option>
                      <option value={7}>07</option>
                      <option value={8}>08</option>
                      <option value={9}>09</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>{" "}
                    </select>
                  </div>
                  <div className="col-4 pr-2">
                    <select
                      name="pickup_minutes"
                      id="pickup_minutes"
                      className="select-time pl-2"
                    >
                      <option value="">Minute</option>
                      <option value={0}>00</option>
                      <option value={1}>01</option>
                      <option value={2}>02</option>
                      <option value={3}>03</option>
                      <option value={4}>04</option>
                      <option value={5}>05</option>
                      <option value={6}>06</option>
                      <option value={7}>07</option>
                      <option value={8}>08</option>
                      <option value={9}>09</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                      <option value={31}>31</option>
                      <option value={32}>32</option>
                      <option value={33}>33</option>
                      <option value={34}>34</option>
                      <option value={35}>35</option>
                      <option value={36}>36</option>
                      <option value={37}>37</option>
                      <option value={38}>38</option>
                      <option value={39}>39</option>
                      <option value={40}>40</option>
                      <option value={41}>41</option>
                      <option value={42}>42</option>
                      <option value={43}>43</option>
                      <option value={44}>44</option>
                      <option value={45}>45</option>
                      <option value={46}>46</option>
                      <option value={47}>47</option>
                      <option value={48}>48</option>
                      <option value={49}>49</option>
                      <option value={50}>50</option>
                      <option value={51}>51</option>
                      <option value={52}>52</option>
                      <option value={53}>53</option>
                      <option value={54}>54</option>
                      <option value={55}>55</option>
                      <option value={56}>56</option>
                      <option value={57}>57</option>
                      <option value={58}>58</option>
                      <option value={59}>59</option>{" "}
                    </select>
                  </div>
                  <div className="col-4 pl-2">
                    <select
                      name="pickup_format"
                      id="pickup_format"
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
                      // href="javascript:void(0);"
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
                      benefit_type="xUlwCK7NhPMFepdZZu+xIQ=="
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
                      benefit_type="xUlwCK7NhPMFepdZZu+xIQ=="
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
                htmlFor="car-servicing-complimentary"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  defaultValue="complimentary"
                  id="car-servicing-complimentary"
                  benefit_type="B55rZxxYvczWJ8E9uzf41Q=="
                  defaultChecked=""
                />
                <span>Complimentary</span>
              </label>
              <label
                className="form-check-label text-nowrap checkbox-wrapper"
                htmlFor="car-servicing-discounted"
              >
                <input
                  className="form-check-input"
                  type="radio"
                  name="benefit_type"
                  defaultValue="discount"
                  id="car-servicing-discounted"
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
export default PersonalDetails;
