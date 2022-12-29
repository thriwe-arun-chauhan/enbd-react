import React from "react";
function PayNow() {
  return (
    <>
      <div
        className="breadcrumbs overlay"
        style={{
          backgroundImage:
            'url("https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/breadcrumb.jpg")',
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
                      //href="javascript:void(0);"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Pay Now</a>
                    </li>
                  </ul>
                </div>
                <div className="bread-title">
                  <h2>Pay Now</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="common-section manageprofile pt-2">
        <div className="container">
          <div className="row mb-0">
            <div className="col-lg-6 col-md-8 col-12 m-auto">
              <div className="common-form mt-4 pb-0">
                <h4 className="mb-1 text-center">Pay Now</h4>
                <p className="text-center mb-0">
                  Don’t go back or refresh the page
                </p>
                <div className="col-md-12  text-center mt-1">
                  <p className="time" style={{ fontSize: "15.3px" }}>
                    {" "}
                    <strong>
                      This page will automatically time out after
                      <span
                        id="time"
                        style={{
                          width: 55,
                          color: "#9e0e0e",
                          display: "inline-block",
                          boxSizing: "border-box",
                        }}
                      >
                        04:26
                      </span>
                      seconds
                    </strong>
                  </p>
                </div>
                <form
                  action="https://latesttestemiratesnbdbenefits.thriwe.com/2c2p-payment-form"
                  className="form"
                  id="2c2p-payment-form"
                  payment-form={3}
                  method="post"
                  acceptCharset="utf-8"
                >
                  <input
                    type="hidden"
                    name="csrf_form_name"
                    defaultValue="285c3b3353f9ade40e1e70e29d32236d"
                    autoComplete="off"
                  />
                  <div className="row">
                    <div className=" mt-3 mb-3 w-100">
                      <hr className="mt-1 mb-1" />
                      <div className="col-12">
                        <div className="payment_details">
                          <label>Total Payable</label>
                          <label>
                            AED 1{" "}
                            <span
                              style={{ flex: "100%" }}
                              className="text-right w-100"
                            >
                              <small>(Refundable) </small>
                            </span>
                          </label>
                        </div>
                      </div>
                      <hr className="mt-1 mb-1" />
                    </div>
                    <div className="col-md-12 mb-1">
                      <p className="text-center">
                        <small>
                          <strong>Note : </strong>Kindly use the eligible
                          EmiratesNBD card which you have selected while placing
                          the booking request.
                        </small>
                      </p>
                    </div>
                    <div className="col-12 form-inti">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa fa-credit-card" />
                        </div>
                        {/* <input type="text" name="card_number" id="card_number" pattern="[0-9]*" inputmode="numeric" onkeyup="check_card_number(this.value);" minlength="14" maxlength="16" placeholder="Card Number"> */}
                        <input
                          type="text"
                          name="card_number"
                          data-encrypt="cardnumber"
                          id="card_number"
                          pattern="[0-9]*"
                          inputMode="numeric"
                          minLength={14}
                          maxLength={16}
                          placeholder="Card Number"
                          autoComplete="off"
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          id="masked_card_number"
                          name="masked_card_number"
                          autoComplete="off"
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          id="masked_card_type"
                          name="masked_card_type"
                          autoComplete="off"
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          id="bin_count"
                          name="bin_count"
                          defaultValue="em5z9j0tMMabkTIf8VbpRw=="
                          autoComplete="off"
                        />
                        <input
                          type="hidden"
                          className="form-control"
                          id="2c2p_data_id"
                          name="2c2p_data_id"
                          defaultValue="OSWyJy3aGK+fCepmz5rkww=="
                          autoComplete="off"
                        />
                      </div>
                      <div id="card_number_error" />
                    </div>
                    <div className="col-12 form-inti">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa fa-user-o" />
                        </div>
                        <input
                          type="text"
                          name="card_name"
                          id="card_name"
                          maxLength={40}
                          placeholder="Card Holder Name"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-12 ">
                      <div className="form-group h-auto">
                        <div className="row">
                          <div className="col-md-6 form-inti">
                            <div className="form-group">
                              <div className="icon">
                                <i className="fa fa-calendar" />
                              </div>
                              <select
                                className="form-select"
                                name="card_month"
                                data-encrypt="month"
                                readOnly=""
                                id="card_month"
                              >
                                <option selected="" disabled="" value="">
                                  Month
                                </option>
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
                          </div>
                          <div className="col-md-6 form-inti">
                            <div className="form-group">
                              <div className="icon">
                                <i className="fa fa-calendar" />
                              </div>
                              <select
                                className="form-select"
                                name="card_year"
                                data-encrypt="year"
                                readOnly=""
                                id="card_year"
                              >
                                <option selected="" disabled="" value="">
                                  Year
                                </option>
                                <option value={2022}>2022</option>
                                <option value={2023}>2023</option>
                                <option value={2024}>2024</option>
                                <option value={2025}>2025</option>
                                <option value={2026}>2026</option>
                                <option value={2027}>2027</option>
                                <option value={2028}>2028</option>
                                <option value={2029}>2029</option>
                                <option value={2030}>2030</option>
                                <option value={2031}>2031</option>
                                <option value={2032}>2032</option>
                                <option value={2033}>2033</option>
                                <option value={2034}>2034</option>
                                <option value={2035}>2035</option>
                                <option value={2036}>2036</option>
                                <option value={2037}>2037</option>{" "}
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 form-inti">
                      <div className="form-group">
                        <div className="icon">
                          <i className="fa fa-credit-card" />
                        </div>
                        <input
                          type="password"
                          name="card_cvv"
                          id="card_cvv"
                          data-encrypt="cvv"
                          minLength={3}
                          maxLength={4}
                          placeholder="CVV/CVC"
                          autoComplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group text-center h-100">
                        {/*<h6>Kindly note that the transaction amount of 1 AED for verification of your EmiratesNBD card will be auto reversed within 6-7 working days.</h6>*/}
                        <h6 style={{ fontSize: 11 }}>
                          We will validate your EmiratesNBD card by doing a
                          transaction of AED 1.0 (SGD 0.38).{" "}
                          <b style={{ fontSize: 12 }}>
                            Once validation is successful you will receive an
                            email from the payment gateway stating that the
                            payment transaction has been VOIDED.
                          </b>{" "}
                          You will also receive an email with the booking
                          details from THRIWE.
                        </h6>
                      </div>
                    </div>
                    <div className="col-12 mt-2">
                      <div className="form-group button">
                        <button
                          type="button"
                          id="proceed_pre_auth_btn"
                          data-id="OSWyJy3aGK+fCepmz5rkww=="
                          cc-bin-data="Hn/2n9nZVK/It2dTKerytA=="
                          cc-last-data="K8q2CxgMgjdZGqxDlBYvfQ=="
                          className="custom-btn theme-2 m-1"
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          id="cancel_pre_auth"
                          onclick="cancel_payment('B55rZxxYvczWJ8E9uzf41Q==');"
                          data-id="OSWyJy3aGK+fCepmz5rkww=="
                          className="custom-btn theme-2 m-1"
                        >
                          Cancel
                        </button>
                      </div>
                      <div className="col-12 mt-3 form-inti h-75">
                        <div className="form-group">
                          <div
                            htmlFor="payment_form-error"
                            className="p-1 w-100 text-center"
                            id="payment_form_error"
                          />
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                    <div className="clearfix" />
                  </div>
                </form>
              </div>
              <div className="col-md-12  text-center mt-5">
                <p className="mt-2">
                  <strong>Powered By :</strong> <br />{" "}
                  <img
                    src="https://latesttestemiratesnbdbenefits.thriwe.com/public/web/img/2c2p.png"
                    alt=""
                    width={150}
                  />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PayNow;
