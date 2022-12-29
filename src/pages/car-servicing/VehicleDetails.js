import React from "react";
function VehicleDetails() {
  return (
    <div className="common-form">
      <div className="form-inner ">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/car-servicing"
          className="form airport-transfer-form"
          id="service_form_two"
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
            <div className="col-12 col-md-6 form-inlabel service-car">
              <div className="form-group">
                <div className="col-12 p-0">
                  <div className="">
                    <label>Car Plate Number</label>
                  </div>
                </div>
                <div className="col-12 form-group p-0">
                  <div className="icon">
                    <i className="fas fa-car" />
                  </div>
                  <input
                    type="text"
                    name="car_plate_number"
                    onkeyup="this.value = this.value.toUpperCase();"
                    id="car_plate_number"
                    placeholder="Car Plate Number"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel service-car">
              <div className="form-group">
                <div className="col-12 p-0">
                  <div className="">
                    <label>Car Make / Model </label>
                  </div>
                </div>
                <div className="col-12 form-group p-0">
                  <div className="icon">
                    <i className="fas fa-car" />
                  </div>
                  <input
                    type="text"
                    name="car_model"
                    id="car_model"
                    placeholder="Car Make / Model "
                    autoComplete="off"
                  />
                </div>
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
          <div className="row mt-3">
            <div className="col-12">
              <h6 className="d-flex justify-content-between align-items-center">
                <span>Disclaimer :</span>
              </h6>
              <p>
                Appointments with the service station should be confirmed by the
                customer prior to booking the service. If the car is not
                accepted by the service station it will still be counted as a
                service availed. All charges with respect to car servicing will
                be directly charged to the customer, we will only facilitate the
                pickup or delivery of the car to and from the service station.
              </p>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}
export default VehicleDetails;
