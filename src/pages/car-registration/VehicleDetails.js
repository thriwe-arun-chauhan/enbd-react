import React from "react";
function VehicleDetails() {
  return (
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
            defaultValue="e1699a6029ed40c4bb04924aaa2b2859"
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
  );
}

export default VehicleDetails;
