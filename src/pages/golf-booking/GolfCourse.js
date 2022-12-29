import React from "react";
function GolfCourse() {
  return (
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
            defaultValue="e1699a6029ed40c4bb04924aaa2b2859"
            autoComplete="off"
          />
          <marquee width="100%" direction="left" height="auto">
            Arabian Ranches golf course is closed from 16th May’22 to 20th
            May’22 , Dubai Hills is closed from 30th May’22 – 3rd June’22 and
            Saadiyat Beach Golf Club closed from 30-May’22 to 10-June'22 due to
            renovation.
          </marquee>
          <div className="row">
            <div className="col-12">
              <h4 className="d-flex justify-content-between align-items-center">
                <span>Golf Course</span>
              </h4>
              <p>
                Please fill in the details below so that we can get in contact
                with you about our product.
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
                          amateurs and excite beginners. A course that honours
                          the traditions of the game, demands respect, yet
                          offers so much. A course that celebrates the best in
                          Links design, utilizes the unique weather conditions
                          and complements its natural surroundings. A course
                          that blends the latest in techniques and technology
                          with the timeless traditions of the game. A course
                          that is ready to be played, enjoyed and discovered by
                          you
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
                          Highway (E 12 Road), Abu Dhabi, United Arab Emirates
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
                          beauty that creates unparalleled experience. It also
                          has glittering blue water which adds to the beauty
                          along with white sands.
                          <br />
                          It gives variety of golf experiences with each hole
                          that has unique character. This course was designed by
                          abiding to environmental guidelines. With that this
                          course is able to accommodate with their scheme Member
                          for a Day with highest customer service. <br />
                          Saadiyat Beach Golf Club is just ten minutes away from
                          the city centre, nearly 20 minutes away from Abu Dhabi
                          International Airport and has become ideal for
                          international and national golfers.
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
                          <i className="fa fa-map-marker" /> Sas Al Nakhl, Abu
                          Dhabi, United Arab Emirates
                        </p>
                        <p>
                          <small>
                            <i className="fa fa-map-marker" /> Abu Dhabi
                          </small>
                        </p>
                        <p className="mb-3 gc_description">
                          It is a 27-hole championship course and is considered
                          to be home to PGA European Tour Abu Dhabi HSBC Golf
                          Championship. It provides tough but fair challenge to
                          the golfers. It has lush fairways, greens and
                          strategically placed bunkers.
                          <br />
                          <br />
                          It is also called super course and is spread across
                          162 hectares. It also has a Golf Club that offers one
                          of the finest 27-hole championships, which is
                          unparallel throughout Middle East.
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
                In case the Cardholder does not show up at the golf course for a
                confirmed booking, or cancels at short notice, a NO SHOW charge
                will be applicable. To avoid paying the No Show charge on a
                confirmed booking, please ensure that cancellations, if any, are
                made 4 clear days prior to the date of play (which does not
                include the date of play and date of cancellation).
              </p>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default GolfCourse;
