import React from "react";
function LocationDetails() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/airport-transfer"
          className="form airport-transfer-form"
          id="airport_form_two"
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
                <span>Airport Drop &amp; Pickup</span>
              </h4>
              <p>
                Please fill in the details below so that we can get in contact
                with you about our product.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 custom_radio">
              <fieldset className="checkbox-group">
                <legend className="checkbox-group-legend">Please Select</legend>
              </fieldset>
              <label
                className="form-check-label text-nowrap pl-0"
                htmlFor="booking-summary-airport-drop"
              >
                <div className="form-group">
                  <input
                    className="form-check-input select_airport_type"
                    type="radio"
                    name="airport_facility"
                    id="booking-summary-airport-drop"
                    defaultValue="airport-drop"
                    defaultChecked="checked"
                    autoComplete="off"
                  />
                  <span>Airport Drop</span>
                </div>
              </label>
              <label
                className="form-check-label text-nowrap"
                htmlFor="booking-summary-airport-pickup"
              >
                <div className="form-group">
                  <input
                    className="form-check-input select_airport_type"
                    type="radio"
                    name="airport_facility"
                    id="booking-summary-airport-pickup"
                    defaultValue="airport-pickup"
                    autoComplete="off"
                  />
                  <span>Airport Pickup</span>
                </div>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h6 className="d-flex justify-content-between align-items-center">
                <span>Disclaimer :</span>
              </h6>
              <p>
                Kindly note that the emirate outskirts are not covered in the
                benefit.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 form-inlabel">
              <div className="form-group ">
                <div className="col-12">
                  <div className="row">
                    <label>Pickup Location</label>
                  </div>
                </div>
                <div
                  className="col-12 p-0"
                  id="airport_from"
                  data-toggle="modal"
                  data-target="#from_address"
                >
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <input
                      type="text"
                      readOnly=""
                      name="from_address_airport"
                      id="from_address_airport"
                      placeholder="From"
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
                    <label>Drop Location</label>
                  </div>
                </div>
                <div
                  className="col-12 p-0"
                  id="airport_to"
                  data-toggle="modal"
                  data-target="#to_address"
                >
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <input
                      type="text"
                      readOnly=""
                      name="to_address_airport"
                      id="to_address_airport"
                      placeholder="To"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6  form-inlabel">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Pickup Date</label>
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
                      name="date_of_service"
                      id="date_of_service"
                      placeholder="Select Date"
                      readOnly=""
                      autoComplete="off"
                    />
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
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6 form-inlabel">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Pickup Time</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <select
                      name="time_hours"
                      id="time_hours"
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
                  <div className="col-4">
                    <select
                      name="time_minutes"
                      id="time_minutes"
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
                  <div className="col-4">
                    <select
                      name="time_format"
                      id="time_format"
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
            <div className="col-md-12">
              {" "}
              <p>
                {" "}
                <small>
                  <em>
                    <i className="fa-solid fa-circle-info" /> All requests
                    should be made 2 clear days prior to the service date
                    excluding the date of placing the request and date of
                    booking (e.g. airport transfer request for June 25, 2022
                    need to be placed on or before June 22, 2022).
                  </em>
                </small>{" "}
              </p>
            </div>
            {/* <div class="col-12 col-md-6  form-inlabel">
            <div class="form-group">
              <div class="col-12">
                <div class="row">
                  <label>Pickup Time</label>
                </div>
              </div>
              <div class="col-12 p-0">
                <div class="form-group">
                  <div class="icon"><i class="fa fa-clock-o"></i></div>
                  <input type="text" class="form-control timepicker input" name="time_of_service" id="time_of_service" placeholder="Select Time">
                </div>
              </div>
            </div>
          </div> */}
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h6 className="d-flex justify-content-between align-items-center">
                <span>Disclaimer :</span>
              </h6>
              <p>
                This service is complimentary based on the purchase of your
                travel ticket with your eligible Emirates NBD Credit Card.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LocationDetails;
