import React from "react";

const LocalCourierModalContent = () => {

return(


  <div className="row">
    <div className="col-md-12">
      <h5 className="modal-title" id="benefit_heading_name">
        Local Courier
      </h5>
    </div>
    <div className="col-md-12 col-lg-6  pt-2">
      <div id="text_description">
        <div className="content-oth text-white">
          <ul>
            <li>
              Emirates NBD Card holders can enjoy complimentary courier service
              for documents up to 500 gms within Dubai, Abu dhabi and Sharjah.
            </li>
            <li>
              Service will be actioned only if documents are provided in a
              sealed envelope with the name, address and contact number of both
              the sender and the receiver clearly mentioned on the envelope.
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
                      Quota available for year 2022 - 6
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
                      Quota available for year 2022 - 6
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
        src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/video-section/3.jpg"
        className="img-fluid border-round"
      />
    </div>
</div>

       



)

}

export default LocalCourierModalContent;