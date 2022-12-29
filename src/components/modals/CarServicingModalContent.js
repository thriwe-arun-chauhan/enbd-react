import React from 'react'
const CarServicingModalContent = () =>
{
return(

  <div className="row">
    <div className="col-md-12">
      <h5 className="modal-title" id="benefit_heading_name">
        Car Servicing
      </h5>
    </div>
    <div className="col-md-12 col-lg-6  pt-2">
      <div id="text_description">
        <div className="content-oth text-white">
          <ul>
            <li>
              Put your mind at ease and let us assist you with complimentary
              pickup and drop your car for servicing for your scheduled
              appointments at the service center.
            </li>
            <li>
              Our team of well-trained and professional drivers will pick up
              your car from your location on the specified date and time as per
              your convenience and drop it safely at the specified service
              center.
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-12 p-0 mt-3 horizontal_listing  card-list float-left">
        <fieldset
          className="checkbox-group d-flex flex-column justify-content-start align-items-start align-content-start"
          id="card_detail_div"
        >
          <legend className="checkbox-group-legend">
            Your Eligible Card(s) &amp; Available Booking Quota
          </legend>
          <div className="mb-0 checkbox ">
            <label className="checkbox-wrapper">
              <span className="checkbox-tile">
                <span className="checkbox-icon ml-0">
                  <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                </span>
                <span className="checkbox-label">
                  <strong>Diners Duo Credit Card</strong>
                  <small>362800****9999</small>
                </span>
                <div className="status active_inactive">
                  <div className="text-secondary ">
                    <strong className="light-green">
                      Quota available for year 2022 - 1
                    </strong>
                    <strong className="text-warning">
                      Quota used for year 2022 - 0
                    </strong>
                  </div>
                </div>
              </span>
            </label>
          </div>
          <div className="mb-0 checkbox ">
            <label className="checkbox-wrapper">
              <span className="checkbox-tile">
                <span className="checkbox-icon ml-0">
                  <img src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/card/credit-card.png" />
                </span>
                <span className="checkbox-label">
                  <strong>Diners Duo Credit Card</strong>
                  <small>362800****4546</small>
                </span>
                <div className="status active_inactive">
                  <div className="text-secondary ">
                    <strong className="light-green">
                      Quota available for year 2022 - 1
                    </strong>
                    <strong className="text-warning">
                      Quota used for year 2022 - 0
                    </strong>
                  </div>
                </div>
              </span>
            </label>
          </div>
        </fieldset>
      </div>
    </div>
    <div className="col-md-12 col-lg-6 pt-2 service-img" id="benefit_image">
      <img
        src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/video-section/4.jpg"
        className="img-fluid border-round"
      />
    </div>
  </div>




)

}

export default CarServicingModalContent;