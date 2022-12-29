import React from "react";
function To() {
  return (
    <div className="common-form">
      <div className="form-inner">
        <form
          action="https://latesttestemiratesnbdbenefits.thriwe.com/local-courier"
          className="form airport-transfer-form"
          id="courier_form_three"
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
                <span>To </span>{" "}
                <small className="small-txt">Courier Drop Address</small>
              </h4>
              <p>Please fill in the details below.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 form-inlabel courier">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Full Name</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-user" />
                    </div>
                    <input
                      type="text"
                      name="drop_name"
                      id="drop_name"
                      maxLength={80}
                      placeholder="Name"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 form-inlabel courier">
              <div className="form-group ">
                <div className="col-12">
                  <div className="row">
                    <label>Mobile Number</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-mobile" />
                    </div>
                    <div className="iti iti--allow-dropdown iti--separate-dial-code">
                      <div className="iti__flag-container">
                        <div
                          className="iti__selected-flag"
                          role="combobox"
                          aria-controls="iti-1__country-listbox"
                          aria-owns="iti-1__country-listbox"
                          aria-expanded="false"
                          tabIndex={0}
                          title="United Arab Emirates (‫الإمارات العربية المتحدة‬‎): +971"
                          aria-activedescendant="iti-1__item-ae-preferred"
                        >
                          <div className="iti__flag iti__ae" />
                          <div className="iti__selected-dial-code">+971</div>
                          <div className="iti__arrow" />
                        </div>
                        <ul
                          className="iti__country-list iti__hide"
                          id="iti-1__country-listbox"
                          role="listbox"
                          aria-label="List of countries"
                          style={{ width: 100 }}
                        >
                          <li
                            className="iti__country iti__preferred iti__active"
                            tabIndex={-1}
                            id="iti-1__item-ae-preferred"
                            role="option"
                            data-dial-code={971}
                            data-country-code="ae"
                            aria-selected="true"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ae" />
                            </div>
                            <span className="iti__country-name">
                              United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                            </span>
                            <span className="iti__dial-code">+971</span>
                          </li>
                          <li
                            className="iti__country iti__preferred"
                            tabIndex={-1}
                            id="iti-1__item-sa-preferred"
                            role="option"
                            data-dial-code={966}
                            data-country-code="sa"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sa" />
                            </div>
                            <span className="iti__country-name">
                              Saudi Arabia (‫المملكة العربية السعودية‬‎)
                            </span>
                            <span className="iti__dial-code">+966</span>
                          </li>
                          <li
                            className="iti__divider"
                            role="separator"
                            aria-disabled="true"
                          />
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-af"
                            role="option"
                            data-dial-code={93}
                            data-country-code="af"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__af" />
                            </div>
                            <span className="iti__country-name">
                              Afghanistan (‫افغانستان‬‎)
                            </span>
                            <span className="iti__dial-code">+93</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-al"
                            role="option"
                            data-dial-code={355}
                            data-country-code="al"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__al" />
                            </div>
                            <span className="iti__country-name">
                              Albania (Shqipëri)
                            </span>
                            <span className="iti__dial-code">+355</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-dz"
                            role="option"
                            data-dial-code={213}
                            data-country-code="dz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__dz" />
                            </div>
                            <span className="iti__country-name">
                              Algeria (‫الجزائر‬‎)
                            </span>
                            <span className="iti__dial-code">+213</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-as"
                            role="option"
                            data-dial-code={1}
                            data-country-code="as"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__as" />
                            </div>
                            <span className="iti__country-name">
                              American Samoa
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ad"
                            role="option"
                            data-dial-code={376}
                            data-country-code="ad"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ad" />
                            </div>
                            <span className="iti__country-name">Andorra</span>
                            <span className="iti__dial-code">+376</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ao"
                            role="option"
                            data-dial-code={244}
                            data-country-code="ao"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ao" />
                            </div>
                            <span className="iti__country-name">Angola</span>
                            <span className="iti__dial-code">+244</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ai"
                            role="option"
                            data-dial-code={1}
                            data-country-code="ai"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ai" />
                            </div>
                            <span className="iti__country-name">Anguilla</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ag"
                            role="option"
                            data-dial-code={1}
                            data-country-code="ag"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ag" />
                            </div>
                            <span className="iti__country-name">
                              Antigua and Barbuda
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ar"
                            role="option"
                            data-dial-code={54}
                            data-country-code="ar"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ar" />
                            </div>
                            <span className="iti__country-name">Argentina</span>
                            <span className="iti__dial-code">+54</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-am"
                            role="option"
                            data-dial-code={374}
                            data-country-code="am"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__am" />
                            </div>
                            <span className="iti__country-name">
                              Armenia (Հայաստան)
                            </span>
                            <span className="iti__dial-code">+374</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-aw"
                            role="option"
                            data-dial-code={297}
                            data-country-code="aw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__aw" />
                            </div>
                            <span className="iti__country-name">Aruba</span>
                            <span className="iti__dial-code">+297</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ac"
                            role="option"
                            data-dial-code={247}
                            data-country-code="ac"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ac" />
                            </div>
                            <span className="iti__country-name">
                              Ascension Island
                            </span>
                            <span className="iti__dial-code">+247</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-au"
                            role="option"
                            data-dial-code={61}
                            data-country-code="au"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__au" />
                            </div>
                            <span className="iti__country-name">Australia</span>
                            <span className="iti__dial-code">+61</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-at"
                            role="option"
                            data-dial-code={43}
                            data-country-code="at"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__at" />
                            </div>
                            <span className="iti__country-name">
                              Austria (Österreich)
                            </span>
                            <span className="iti__dial-code">+43</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-az"
                            role="option"
                            data-dial-code={994}
                            data-country-code="az"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__az" />
                            </div>
                            <span className="iti__country-name">
                              Azerbaijan (Azərbaycan)
                            </span>
                            <span className="iti__dial-code">+994</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bs"
                            role="option"
                            data-dial-code={1}
                            data-country-code="bs"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bs" />
                            </div>
                            <span className="iti__country-name">Bahamas</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bh"
                            role="option"
                            data-dial-code={973}
                            data-country-code="bh"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bh" />
                            </div>
                            <span className="iti__country-name">
                              Bahrain (‫البحرين‬‎)
                            </span>
                            <span className="iti__dial-code">+973</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bd"
                            role="option"
                            data-dial-code={880}
                            data-country-code="bd"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bd" />
                            </div>
                            <span className="iti__country-name">
                              Bangladesh (বাংলাদেশ)
                            </span>
                            <span className="iti__dial-code">+880</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bb"
                            role="option"
                            data-dial-code={1}
                            data-country-code="bb"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bb" />
                            </div>
                            <span className="iti__country-name">Barbados</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-by"
                            role="option"
                            data-dial-code={375}
                            data-country-code="by"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__by" />
                            </div>
                            <span className="iti__country-name">
                              Belarus (Беларусь)
                            </span>
                            <span className="iti__dial-code">+375</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-be"
                            role="option"
                            data-dial-code={32}
                            data-country-code="be"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__be" />
                            </div>
                            <span className="iti__country-name">
                              Belgium (België)
                            </span>
                            <span className="iti__dial-code">+32</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bz"
                            role="option"
                            data-dial-code={501}
                            data-country-code="bz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bz" />
                            </div>
                            <span className="iti__country-name">Belize</span>
                            <span className="iti__dial-code">+501</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bj"
                            role="option"
                            data-dial-code={229}
                            data-country-code="bj"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bj" />
                            </div>
                            <span className="iti__country-name">
                              Benin (Bénin)
                            </span>
                            <span className="iti__dial-code">+229</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bm"
                            role="option"
                            data-dial-code={1}
                            data-country-code="bm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bm" />
                            </div>
                            <span className="iti__country-name">Bermuda</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bt"
                            role="option"
                            data-dial-code={975}
                            data-country-code="bt"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bt" />
                            </div>
                            <span className="iti__country-name">
                              Bhutan (འབྲུག)
                            </span>
                            <span className="iti__dial-code">+975</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bo"
                            role="option"
                            data-dial-code={591}
                            data-country-code="bo"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bo" />
                            </div>
                            <span className="iti__country-name">Bolivia</span>
                            <span className="iti__dial-code">+591</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ba"
                            role="option"
                            data-dial-code={387}
                            data-country-code="ba"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ba" />
                            </div>
                            <span className="iti__country-name">
                              Bosnia and Herzegovina (Босна и Херцеговина)
                            </span>
                            <span className="iti__dial-code">+387</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bw"
                            role="option"
                            data-dial-code={267}
                            data-country-code="bw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bw" />
                            </div>
                            <span className="iti__country-name">Botswana</span>
                            <span className="iti__dial-code">+267</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-br"
                            role="option"
                            data-dial-code={55}
                            data-country-code="br"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__br" />
                            </div>
                            <span className="iti__country-name">
                              Brazil (Brasil)
                            </span>
                            <span className="iti__dial-code">+55</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-io"
                            role="option"
                            data-dial-code={246}
                            data-country-code="io"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__io" />
                            </div>
                            <span className="iti__country-name">
                              British Indian Ocean Territory
                            </span>
                            <span className="iti__dial-code">+246</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-vg"
                            role="option"
                            data-dial-code={1}
                            data-country-code="vg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__vg" />
                            </div>
                            <span className="iti__country-name">
                              British Virgin Islands
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bn"
                            role="option"
                            data-dial-code={673}
                            data-country-code="bn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bn" />
                            </div>
                            <span className="iti__country-name">Brunei</span>
                            <span className="iti__dial-code">+673</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bg"
                            role="option"
                            data-dial-code={359}
                            data-country-code="bg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bg" />
                            </div>
                            <span className="iti__country-name">
                              Bulgaria (България)
                            </span>
                            <span className="iti__dial-code">+359</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bf"
                            role="option"
                            data-dial-code={226}
                            data-country-code="bf"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bf" />
                            </div>
                            <span className="iti__country-name">
                              Burkina Faso
                            </span>
                            <span className="iti__dial-code">+226</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bi"
                            role="option"
                            data-dial-code={257}
                            data-country-code="bi"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bi" />
                            </div>
                            <span className="iti__country-name">
                              Burundi (Uburundi)
                            </span>
                            <span className="iti__dial-code">+257</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-kh"
                            role="option"
                            data-dial-code={855}
                            data-country-code="kh"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__kh" />
                            </div>
                            <span className="iti__country-name">
                              Cambodia (កម្ពុជា)
                            </span>
                            <span className="iti__dial-code">+855</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cm"
                            role="option"
                            data-dial-code={237}
                            data-country-code="cm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cm" />
                            </div>
                            <span className="iti__country-name">
                              Cameroon (Cameroun)
                            </span>
                            <span className="iti__dial-code">+237</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ca"
                            role="option"
                            data-dial-code={1}
                            data-country-code="ca"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ca" />
                            </div>
                            <span className="iti__country-name">Canada</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cv"
                            role="option"
                            data-dial-code={238}
                            data-country-code="cv"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cv" />
                            </div>
                            <span className="iti__country-name">
                              Cape Verde (Kabu Verdi)
                            </span>
                            <span className="iti__dial-code">+238</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bq"
                            role="option"
                            data-dial-code={599}
                            data-country-code="bq"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bq" />
                            </div>
                            <span className="iti__country-name">
                              Caribbean Netherlands
                            </span>
                            <span className="iti__dial-code">+599</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ky"
                            role="option"
                            data-dial-code={1}
                            data-country-code="ky"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ky" />
                            </div>
                            <span className="iti__country-name">
                              Cayman Islands
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cf"
                            role="option"
                            data-dial-code={236}
                            data-country-code="cf"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cf" />
                            </div>
                            <span className="iti__country-name">
                              Central African Republic (République
                              centrafricaine)
                            </span>
                            <span className="iti__dial-code">+236</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-td"
                            role="option"
                            data-dial-code={235}
                            data-country-code="td"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__td" />
                            </div>
                            <span className="iti__country-name">
                              Chad (Tchad)
                            </span>
                            <span className="iti__dial-code">+235</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cl"
                            role="option"
                            data-dial-code={56}
                            data-country-code="cl"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cl" />
                            </div>
                            <span className="iti__country-name">Chile</span>
                            <span className="iti__dial-code">+56</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cn"
                            role="option"
                            data-dial-code={86}
                            data-country-code="cn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cn" />
                            </div>
                            <span className="iti__country-name">
                              China (中国)
                            </span>
                            <span className="iti__dial-code">+86</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cx"
                            role="option"
                            data-dial-code={61}
                            data-country-code="cx"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cx" />
                            </div>
                            <span className="iti__country-name">
                              Christmas Island
                            </span>
                            <span className="iti__dial-code">+61</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cc"
                            role="option"
                            data-dial-code={61}
                            data-country-code="cc"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cc" />
                            </div>
                            <span className="iti__country-name">
                              Cocos (Keeling) Islands
                            </span>
                            <span className="iti__dial-code">+61</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-co"
                            role="option"
                            data-dial-code={57}
                            data-country-code="co"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__co" />
                            </div>
                            <span className="iti__country-name">Colombia</span>
                            <span className="iti__dial-code">+57</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-km"
                            role="option"
                            data-dial-code={269}
                            data-country-code="km"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__km" />
                            </div>
                            <span className="iti__country-name">
                              Comoros (‫جزر القمر‬‎)
                            </span>
                            <span className="iti__dial-code">+269</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cd"
                            role="option"
                            data-dial-code={243}
                            data-country-code="cd"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cd" />
                            </div>
                            <span className="iti__country-name">
                              Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)
                            </span>
                            <span className="iti__dial-code">+243</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cg"
                            role="option"
                            data-dial-code={242}
                            data-country-code="cg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cg" />
                            </div>
                            <span className="iti__country-name">
                              Congo (Republic) (Congo-Brazzaville)
                            </span>
                            <span className="iti__dial-code">+242</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ck"
                            role="option"
                            data-dial-code={682}
                            data-country-code="ck"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ck" />
                            </div>
                            <span className="iti__country-name">
                              Cook Islands
                            </span>
                            <span className="iti__dial-code">+682</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cr"
                            role="option"
                            data-dial-code={506}
                            data-country-code="cr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cr" />
                            </div>
                            <span className="iti__country-name">
                              Costa Rica
                            </span>
                            <span className="iti__dial-code">+506</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ci"
                            role="option"
                            data-dial-code={225}
                            data-country-code="ci"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ci" />
                            </div>
                            <span className="iti__country-name">
                              Côte d’Ivoire
                            </span>
                            <span className="iti__dial-code">+225</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-hr"
                            role="option"
                            data-dial-code={385}
                            data-country-code="hr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__hr" />
                            </div>
                            <span className="iti__country-name">
                              Croatia (Hrvatska)
                            </span>
                            <span className="iti__dial-code">+385</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cu"
                            role="option"
                            data-dial-code={53}
                            data-country-code="cu"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cu" />
                            </div>
                            <span className="iti__country-name">Cuba</span>
                            <span className="iti__dial-code">+53</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cw"
                            role="option"
                            data-dial-code={599}
                            data-country-code="cw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cw" />
                            </div>
                            <span className="iti__country-name">Curaçao</span>
                            <span className="iti__dial-code">+599</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cy"
                            role="option"
                            data-dial-code={357}
                            data-country-code="cy"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cy" />
                            </div>
                            <span className="iti__country-name">
                              Cyprus (Κύπρος)
                            </span>
                            <span className="iti__dial-code">+357</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-cz"
                            role="option"
                            data-dial-code={420}
                            data-country-code="cz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__cz" />
                            </div>
                            <span className="iti__country-name">
                              Czech Republic (Česká republika)
                            </span>
                            <span className="iti__dial-code">+420</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-dk"
                            role="option"
                            data-dial-code={45}
                            data-country-code="dk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__dk" />
                            </div>
                            <span className="iti__country-name">
                              Denmark (Danmark)
                            </span>
                            <span className="iti__dial-code">+45</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-dj"
                            role="option"
                            data-dial-code={253}
                            data-country-code="dj"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__dj" />
                            </div>
                            <span className="iti__country-name">Djibouti</span>
                            <span className="iti__dial-code">+253</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-dm"
                            role="option"
                            data-dial-code={1}
                            data-country-code="dm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__dm" />
                            </div>
                            <span className="iti__country-name">Dominica</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-do"
                            role="option"
                            data-dial-code={1}
                            data-country-code="do"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__do" />
                            </div>
                            <span className="iti__country-name">
                              Dominican Republic (República Dominicana)
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ec"
                            role="option"
                            data-dial-code={593}
                            data-country-code="ec"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ec" />
                            </div>
                            <span className="iti__country-name">Ecuador</span>
                            <span className="iti__dial-code">+593</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-eg"
                            role="option"
                            data-dial-code={20}
                            data-country-code="eg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__eg" />
                            </div>
                            <span className="iti__country-name">
                              Egypt (‫مصر‬‎)
                            </span>
                            <span className="iti__dial-code">+20</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sv"
                            role="option"
                            data-dial-code={503}
                            data-country-code="sv"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sv" />
                            </div>
                            <span className="iti__country-name">
                              El Salvador
                            </span>
                            <span className="iti__dial-code">+503</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gq"
                            role="option"
                            data-dial-code={240}
                            data-country-code="gq"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gq" />
                            </div>
                            <span className="iti__country-name">
                              Equatorial Guinea (Guinea Ecuatorial)
                            </span>
                            <span className="iti__dial-code">+240</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-er"
                            role="option"
                            data-dial-code={291}
                            data-country-code="er"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__er" />
                            </div>
                            <span className="iti__country-name">Eritrea</span>
                            <span className="iti__dial-code">+291</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ee"
                            role="option"
                            data-dial-code={372}
                            data-country-code="ee"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ee" />
                            </div>
                            <span className="iti__country-name">
                              Estonia (Eesti)
                            </span>
                            <span className="iti__dial-code">+372</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sz"
                            role="option"
                            data-dial-code={268}
                            data-country-code="sz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sz" />
                            </div>
                            <span className="iti__country-name">Eswatini</span>
                            <span className="iti__dial-code">+268</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-et"
                            role="option"
                            data-dial-code={251}
                            data-country-code="et"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__et" />
                            </div>
                            <span className="iti__country-name">Ethiopia</span>
                            <span className="iti__dial-code">+251</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-fk"
                            role="option"
                            data-dial-code={500}
                            data-country-code="fk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__fk" />
                            </div>
                            <span className="iti__country-name">
                              Falkland Islands (Islas Malvinas)
                            </span>
                            <span className="iti__dial-code">+500</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-fo"
                            role="option"
                            data-dial-code={298}
                            data-country-code="fo"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__fo" />
                            </div>
                            <span className="iti__country-name">
                              Faroe Islands (Føroyar)
                            </span>
                            <span className="iti__dial-code">+298</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-fj"
                            role="option"
                            data-dial-code={679}
                            data-country-code="fj"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__fj" />
                            </div>
                            <span className="iti__country-name">Fiji</span>
                            <span className="iti__dial-code">+679</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-fi"
                            role="option"
                            data-dial-code={358}
                            data-country-code="fi"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__fi" />
                            </div>
                            <span className="iti__country-name">
                              Finland (Suomi)
                            </span>
                            <span className="iti__dial-code">+358</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-fr"
                            role="option"
                            data-dial-code={33}
                            data-country-code="fr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__fr" />
                            </div>
                            <span className="iti__country-name">France</span>
                            <span className="iti__dial-code">+33</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gf"
                            role="option"
                            data-dial-code={594}
                            data-country-code="gf"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gf" />
                            </div>
                            <span className="iti__country-name">
                              French Guiana (Guyane française)
                            </span>
                            <span className="iti__dial-code">+594</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pf"
                            role="option"
                            data-dial-code={689}
                            data-country-code="pf"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pf" />
                            </div>
                            <span className="iti__country-name">
                              French Polynesia (Polynésie française)
                            </span>
                            <span className="iti__dial-code">+689</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ga"
                            role="option"
                            data-dial-code={241}
                            data-country-code="ga"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ga" />
                            </div>
                            <span className="iti__country-name">Gabon</span>
                            <span className="iti__dial-code">+241</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gm"
                            role="option"
                            data-dial-code={220}
                            data-country-code="gm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gm" />
                            </div>
                            <span className="iti__country-name">Gambia</span>
                            <span className="iti__dial-code">+220</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ge"
                            role="option"
                            data-dial-code={995}
                            data-country-code="ge"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ge" />
                            </div>
                            <span className="iti__country-name">
                              Georgia (საქართველო)
                            </span>
                            <span className="iti__dial-code">+995</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-de"
                            role="option"
                            data-dial-code={49}
                            data-country-code="de"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__de" />
                            </div>
                            <span className="iti__country-name">
                              Germany (Deutschland)
                            </span>
                            <span className="iti__dial-code">+49</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gh"
                            role="option"
                            data-dial-code={233}
                            data-country-code="gh"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gh" />
                            </div>
                            <span className="iti__country-name">
                              Ghana (Gaana)
                            </span>
                            <span className="iti__dial-code">+233</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gi"
                            role="option"
                            data-dial-code={350}
                            data-country-code="gi"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gi" />
                            </div>
                            <span className="iti__country-name">Gibraltar</span>
                            <span className="iti__dial-code">+350</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gr"
                            role="option"
                            data-dial-code={30}
                            data-country-code="gr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gr" />
                            </div>
                            <span className="iti__country-name">
                              Greece (Ελλάδα)
                            </span>
                            <span className="iti__dial-code">+30</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gl"
                            role="option"
                            data-dial-code={299}
                            data-country-code="gl"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gl" />
                            </div>
                            <span className="iti__country-name">
                              Greenland (Kalaallit Nunaat)
                            </span>
                            <span className="iti__dial-code">+299</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gd"
                            role="option"
                            data-dial-code={1}
                            data-country-code="gd"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gd" />
                            </div>
                            <span className="iti__country-name">Grenada</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gp"
                            role="option"
                            data-dial-code={590}
                            data-country-code="gp"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gp" />
                            </div>
                            <span className="iti__country-name">
                              Guadeloupe
                            </span>
                            <span className="iti__dial-code">+590</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gu"
                            role="option"
                            data-dial-code={1}
                            data-country-code="gu"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gu" />
                            </div>
                            <span className="iti__country-name">Guam</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gt"
                            role="option"
                            data-dial-code={502}
                            data-country-code="gt"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gt" />
                            </div>
                            <span className="iti__country-name">Guatemala</span>
                            <span className="iti__dial-code">+502</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gg"
                            role="option"
                            data-dial-code={44}
                            data-country-code="gg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gg" />
                            </div>
                            <span className="iti__country-name">Guernsey</span>
                            <span className="iti__dial-code">+44</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gn"
                            role="option"
                            data-dial-code={224}
                            data-country-code="gn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gn" />
                            </div>
                            <span className="iti__country-name">
                              Guinea (Guinée)
                            </span>
                            <span className="iti__dial-code">+224</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gw"
                            role="option"
                            data-dial-code={245}
                            data-country-code="gw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gw" />
                            </div>
                            <span className="iti__country-name">
                              Guinea-Bissau (Guiné Bissau)
                            </span>
                            <span className="iti__dial-code">+245</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gy"
                            role="option"
                            data-dial-code={592}
                            data-country-code="gy"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gy" />
                            </div>
                            <span className="iti__country-name">Guyana</span>
                            <span className="iti__dial-code">+592</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ht"
                            role="option"
                            data-dial-code={509}
                            data-country-code="ht"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ht" />
                            </div>
                            <span className="iti__country-name">Haiti</span>
                            <span className="iti__dial-code">+509</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-hn"
                            role="option"
                            data-dial-code={504}
                            data-country-code="hn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__hn" />
                            </div>
                            <span className="iti__country-name">Honduras</span>
                            <span className="iti__dial-code">+504</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-hk"
                            role="option"
                            data-dial-code={852}
                            data-country-code="hk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__hk" />
                            </div>
                            <span className="iti__country-name">
                              Hong Kong (香港)
                            </span>
                            <span className="iti__dial-code">+852</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-hu"
                            role="option"
                            data-dial-code={36}
                            data-country-code="hu"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__hu" />
                            </div>
                            <span className="iti__country-name">
                              Hungary (Magyarország)
                            </span>
                            <span className="iti__dial-code">+36</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-is"
                            role="option"
                            data-dial-code={354}
                            data-country-code="is"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__is" />
                            </div>
                            <span className="iti__country-name">
                              Iceland (Ísland)
                            </span>
                            <span className="iti__dial-code">+354</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-in"
                            role="option"
                            data-dial-code={91}
                            data-country-code="in"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__in" />
                            </div>
                            <span className="iti__country-name">
                              India (भारत)
                            </span>
                            <span className="iti__dial-code">+91</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-id"
                            role="option"
                            data-dial-code={62}
                            data-country-code="id"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__id" />
                            </div>
                            <span className="iti__country-name">Indonesia</span>
                            <span className="iti__dial-code">+62</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ir"
                            role="option"
                            data-dial-code={98}
                            data-country-code="ir"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ir" />
                            </div>
                            <span className="iti__country-name">
                              Iran (‫ایران‬‎)
                            </span>
                            <span className="iti__dial-code">+98</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-iq"
                            role="option"
                            data-dial-code={964}
                            data-country-code="iq"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__iq" />
                            </div>
                            <span className="iti__country-name">
                              Iraq (‫العراق‬‎)
                            </span>
                            <span className="iti__dial-code">+964</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ie"
                            role="option"
                            data-dial-code={353}
                            data-country-code="ie"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ie" />
                            </div>
                            <span className="iti__country-name">Ireland</span>
                            <span className="iti__dial-code">+353</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-im"
                            role="option"
                            data-dial-code={44}
                            data-country-code="im"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__im" />
                            </div>
                            <span className="iti__country-name">
                              Isle of Man
                            </span>
                            <span className="iti__dial-code">+44</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-il"
                            role="option"
                            data-dial-code={972}
                            data-country-code="il"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__il" />
                            </div>
                            <span className="iti__country-name">
                              Israel (‫ישראל‬‎)
                            </span>
                            <span className="iti__dial-code">+972</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-it"
                            role="option"
                            data-dial-code={39}
                            data-country-code="it"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__it" />
                            </div>
                            <span className="iti__country-name">
                              Italy (Italia)
                            </span>
                            <span className="iti__dial-code">+39</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-jm"
                            role="option"
                            data-dial-code={1}
                            data-country-code="jm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__jm" />
                            </div>
                            <span className="iti__country-name">Jamaica</span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-jp"
                            role="option"
                            data-dial-code={81}
                            data-country-code="jp"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__jp" />
                            </div>
                            <span className="iti__country-name">
                              Japan (日本)
                            </span>
                            <span className="iti__dial-code">+81</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-je"
                            role="option"
                            data-dial-code={44}
                            data-country-code="je"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__je" />
                            </div>
                            <span className="iti__country-name">Jersey</span>
                            <span className="iti__dial-code">+44</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-jo"
                            role="option"
                            data-dial-code={962}
                            data-country-code="jo"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__jo" />
                            </div>
                            <span className="iti__country-name">
                              Jordan (‫الأردن‬‎)
                            </span>
                            <span className="iti__dial-code">+962</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-kz"
                            role="option"
                            data-dial-code={7}
                            data-country-code="kz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__kz" />
                            </div>
                            <span className="iti__country-name">
                              Kazakhstan (Казахстан)
                            </span>
                            <span className="iti__dial-code">+7</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ke"
                            role="option"
                            data-dial-code={254}
                            data-country-code="ke"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ke" />
                            </div>
                            <span className="iti__country-name">Kenya</span>
                            <span className="iti__dial-code">+254</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ki"
                            role="option"
                            data-dial-code={686}
                            data-country-code="ki"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ki" />
                            </div>
                            <span className="iti__country-name">Kiribati</span>
                            <span className="iti__dial-code">+686</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-xk"
                            role="option"
                            data-dial-code={383}
                            data-country-code="xk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__xk" />
                            </div>
                            <span className="iti__country-name">Kosovo</span>
                            <span className="iti__dial-code">+383</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-kw"
                            role="option"
                            data-dial-code={965}
                            data-country-code="kw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__kw" />
                            </div>
                            <span className="iti__country-name">
                              Kuwait (‫الكويت‬‎)
                            </span>
                            <span className="iti__dial-code">+965</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-kg"
                            role="option"
                            data-dial-code={996}
                            data-country-code="kg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__kg" />
                            </div>
                            <span className="iti__country-name">
                              Kyrgyzstan (Кыргызстан)
                            </span>
                            <span className="iti__dial-code">+996</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-la"
                            role="option"
                            data-dial-code={856}
                            data-country-code="la"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__la" />
                            </div>
                            <span className="iti__country-name">
                              Laos (ລາວ)
                            </span>
                            <span className="iti__dial-code">+856</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-lv"
                            role="option"
                            data-dial-code={371}
                            data-country-code="lv"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__lv" />
                            </div>
                            <span className="iti__country-name">
                              Latvia (Latvija)
                            </span>
                            <span className="iti__dial-code">+371</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-lb"
                            role="option"
                            data-dial-code={961}
                            data-country-code="lb"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__lb" />
                            </div>
                            <span className="iti__country-name">
                              Lebanon (‫لبنان‬‎)
                            </span>
                            <span className="iti__dial-code">+961</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ls"
                            role="option"
                            data-dial-code={266}
                            data-country-code="ls"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ls" />
                            </div>
                            <span className="iti__country-name">Lesotho</span>
                            <span className="iti__dial-code">+266</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-lr"
                            role="option"
                            data-dial-code={231}
                            data-country-code="lr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__lr" />
                            </div>
                            <span className="iti__country-name">Liberia</span>
                            <span className="iti__dial-code">+231</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ly"
                            role="option"
                            data-dial-code={218}
                            data-country-code="ly"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ly" />
                            </div>
                            <span className="iti__country-name">
                              Libya (‫ليبيا‬‎)
                            </span>
                            <span className="iti__dial-code">+218</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-li"
                            role="option"
                            data-dial-code={423}
                            data-country-code="li"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__li" />
                            </div>
                            <span className="iti__country-name">
                              Liechtenstein
                            </span>
                            <span className="iti__dial-code">+423</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-lt"
                            role="option"
                            data-dial-code={370}
                            data-country-code="lt"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__lt" />
                            </div>
                            <span className="iti__country-name">
                              Lithuania (Lietuva)
                            </span>
                            <span className="iti__dial-code">+370</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-lu"
                            role="option"
                            data-dial-code={352}
                            data-country-code="lu"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__lu" />
                            </div>
                            <span className="iti__country-name">
                              Luxembourg
                            </span>
                            <span className="iti__dial-code">+352</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mo"
                            role="option"
                            data-dial-code={853}
                            data-country-code="mo"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mo" />
                            </div>
                            <span className="iti__country-name">
                              Macau (澳門)
                            </span>
                            <span className="iti__dial-code">+853</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mk"
                            role="option"
                            data-dial-code={389}
                            data-country-code="mk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mk" />
                            </div>
                            <span className="iti__country-name">
                              Macedonia (FYROM) (Македонија)
                            </span>
                            <span className="iti__dial-code">+389</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mg"
                            role="option"
                            data-dial-code={261}
                            data-country-code="mg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mg" />
                            </div>
                            <span className="iti__country-name">
                              Madagascar (Madagasikara)
                            </span>
                            <span className="iti__dial-code">+261</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mw"
                            role="option"
                            data-dial-code={265}
                            data-country-code="mw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mw" />
                            </div>
                            <span className="iti__country-name">Malawi</span>
                            <span className="iti__dial-code">+265</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-my"
                            role="option"
                            data-dial-code={60}
                            data-country-code="my"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__my" />
                            </div>
                            <span className="iti__country-name">Malaysia</span>
                            <span className="iti__dial-code">+60</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mv"
                            role="option"
                            data-dial-code={960}
                            data-country-code="mv"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mv" />
                            </div>
                            <span className="iti__country-name">Maldives</span>
                            <span className="iti__dial-code">+960</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ml"
                            role="option"
                            data-dial-code={223}
                            data-country-code="ml"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ml" />
                            </div>
                            <span className="iti__country-name">Mali</span>
                            <span className="iti__dial-code">+223</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mt"
                            role="option"
                            data-dial-code={356}
                            data-country-code="mt"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mt" />
                            </div>
                            <span className="iti__country-name">Malta</span>
                            <span className="iti__dial-code">+356</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mh"
                            role="option"
                            data-dial-code={692}
                            data-country-code="mh"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mh" />
                            </div>
                            <span className="iti__country-name">
                              Marshall Islands
                            </span>
                            <span className="iti__dial-code">+692</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mq"
                            role="option"
                            data-dial-code={596}
                            data-country-code="mq"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mq" />
                            </div>
                            <span className="iti__country-name">
                              Martinique
                            </span>
                            <span className="iti__dial-code">+596</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mr"
                            role="option"
                            data-dial-code={222}
                            data-country-code="mr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mr" />
                            </div>
                            <span className="iti__country-name">
                              Mauritania (‫موريتانيا‬‎)
                            </span>
                            <span className="iti__dial-code">+222</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mu"
                            role="option"
                            data-dial-code={230}
                            data-country-code="mu"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mu" />
                            </div>
                            <span className="iti__country-name">
                              Mauritius (Moris)
                            </span>
                            <span className="iti__dial-code">+230</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-yt"
                            role="option"
                            data-dial-code={262}
                            data-country-code="yt"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__yt" />
                            </div>
                            <span className="iti__country-name">Mayotte</span>
                            <span className="iti__dial-code">+262</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mx"
                            role="option"
                            data-dial-code={52}
                            data-country-code="mx"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mx" />
                            </div>
                            <span className="iti__country-name">
                              Mexico (México)
                            </span>
                            <span className="iti__dial-code">+52</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-fm"
                            role="option"
                            data-dial-code={691}
                            data-country-code="fm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__fm" />
                            </div>
                            <span className="iti__country-name">
                              Micronesia
                            </span>
                            <span className="iti__dial-code">+691</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-md"
                            role="option"
                            data-dial-code={373}
                            data-country-code="md"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__md" />
                            </div>
                            <span className="iti__country-name">
                              Moldova (Republica Moldova)
                            </span>
                            <span className="iti__dial-code">+373</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mc"
                            role="option"
                            data-dial-code={377}
                            data-country-code="mc"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mc" />
                            </div>
                            <span className="iti__country-name">Monaco</span>
                            <span className="iti__dial-code">+377</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mn"
                            role="option"
                            data-dial-code={976}
                            data-country-code="mn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mn" />
                            </div>
                            <span className="iti__country-name">
                              Mongolia (Монгол)
                            </span>
                            <span className="iti__dial-code">+976</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-me"
                            role="option"
                            data-dial-code={382}
                            data-country-code="me"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__me" />
                            </div>
                            <span className="iti__country-name">
                              Montenegro (Crna Gora)
                            </span>
                            <span className="iti__dial-code">+382</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ms"
                            role="option"
                            data-dial-code={1}
                            data-country-code="ms"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ms" />
                            </div>
                            <span className="iti__country-name">
                              Montserrat
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ma"
                            role="option"
                            data-dial-code={212}
                            data-country-code="ma"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ma" />
                            </div>
                            <span className="iti__country-name">
                              Morocco (‫المغرب‬‎)
                            </span>
                            <span className="iti__dial-code">+212</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mz"
                            role="option"
                            data-dial-code={258}
                            data-country-code="mz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mz" />
                            </div>
                            <span className="iti__country-name">
                              Mozambique (Moçambique)
                            </span>
                            <span className="iti__dial-code">+258</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mm"
                            role="option"
                            data-dial-code={95}
                            data-country-code="mm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mm" />
                            </div>
                            <span className="iti__country-name">
                              Myanmar (Burma) (မြန်မာ)
                            </span>
                            <span className="iti__dial-code">+95</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-na"
                            role="option"
                            data-dial-code={264}
                            data-country-code="na"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__na" />
                            </div>
                            <span className="iti__country-name">
                              Namibia (Namibië)
                            </span>
                            <span className="iti__dial-code">+264</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-nr"
                            role="option"
                            data-dial-code={674}
                            data-country-code="nr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__nr" />
                            </div>
                            <span className="iti__country-name">Nauru</span>
                            <span className="iti__dial-code">+674</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-np"
                            role="option"
                            data-dial-code={977}
                            data-country-code="np"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__np" />
                            </div>
                            <span className="iti__country-name">
                              Nepal (नेपाल)
                            </span>
                            <span className="iti__dial-code">+977</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-nl"
                            role="option"
                            data-dial-code={31}
                            data-country-code="nl"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__nl" />
                            </div>
                            <span className="iti__country-name">
                              Netherlands (Nederland)
                            </span>
                            <span className="iti__dial-code">+31</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-nc"
                            role="option"
                            data-dial-code={687}
                            data-country-code="nc"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__nc" />
                            </div>
                            <span className="iti__country-name">
                              New Caledonia (Nouvelle-Calédonie)
                            </span>
                            <span className="iti__dial-code">+687</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-nz"
                            role="option"
                            data-dial-code={64}
                            data-country-code="nz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__nz" />
                            </div>
                            <span className="iti__country-name">
                              New Zealand
                            </span>
                            <span className="iti__dial-code">+64</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ni"
                            role="option"
                            data-dial-code={505}
                            data-country-code="ni"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ni" />
                            </div>
                            <span className="iti__country-name">Nicaragua</span>
                            <span className="iti__dial-code">+505</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ne"
                            role="option"
                            data-dial-code={227}
                            data-country-code="ne"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ne" />
                            </div>
                            <span className="iti__country-name">
                              Niger (Nijar)
                            </span>
                            <span className="iti__dial-code">+227</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ng"
                            role="option"
                            data-dial-code={234}
                            data-country-code="ng"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ng" />
                            </div>
                            <span className="iti__country-name">Nigeria</span>
                            <span className="iti__dial-code">+234</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-nu"
                            role="option"
                            data-dial-code={683}
                            data-country-code="nu"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__nu" />
                            </div>
                            <span className="iti__country-name">Niue</span>
                            <span className="iti__dial-code">+683</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-nf"
                            role="option"
                            data-dial-code={672}
                            data-country-code="nf"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__nf" />
                            </div>
                            <span className="iti__country-name">
                              Norfolk Island
                            </span>
                            <span className="iti__dial-code">+672</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-kp"
                            role="option"
                            data-dial-code={850}
                            data-country-code="kp"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__kp" />
                            </div>
                            <span className="iti__country-name">
                              North Korea (조선 민주주의 인민 공화국)
                            </span>
                            <span className="iti__dial-code">+850</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mp"
                            role="option"
                            data-dial-code={1}
                            data-country-code="mp"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mp" />
                            </div>
                            <span className="iti__country-name">
                              Northern Mariana Islands
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-no"
                            role="option"
                            data-dial-code={47}
                            data-country-code="no"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__no" />
                            </div>
                            <span className="iti__country-name">
                              Norway (Norge)
                            </span>
                            <span className="iti__dial-code">+47</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-om"
                            role="option"
                            data-dial-code={968}
                            data-country-code="om"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__om" />
                            </div>
                            <span className="iti__country-name">
                              Oman (‫عُمان‬‎)
                            </span>
                            <span className="iti__dial-code">+968</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pk"
                            role="option"
                            data-dial-code={92}
                            data-country-code="pk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pk" />
                            </div>
                            <span className="iti__country-name">
                              Pakistan (‫پاکستان‬‎)
                            </span>
                            <span className="iti__dial-code">+92</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pw"
                            role="option"
                            data-dial-code={680}
                            data-country-code="pw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pw" />
                            </div>
                            <span className="iti__country-name">Palau</span>
                            <span className="iti__dial-code">+680</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ps"
                            role="option"
                            data-dial-code={970}
                            data-country-code="ps"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ps" />
                            </div>
                            <span className="iti__country-name">
                              Palestine (‫فلسطين‬‎)
                            </span>
                            <span className="iti__dial-code">+970</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pa"
                            role="option"
                            data-dial-code={507}
                            data-country-code="pa"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pa" />
                            </div>
                            <span className="iti__country-name">
                              Panama (Panamá)
                            </span>
                            <span className="iti__dial-code">+507</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pg"
                            role="option"
                            data-dial-code={675}
                            data-country-code="pg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pg" />
                            </div>
                            <span className="iti__country-name">
                              Papua New Guinea
                            </span>
                            <span className="iti__dial-code">+675</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-py"
                            role="option"
                            data-dial-code={595}
                            data-country-code="py"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__py" />
                            </div>
                            <span className="iti__country-name">Paraguay</span>
                            <span className="iti__dial-code">+595</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pe"
                            role="option"
                            data-dial-code={51}
                            data-country-code="pe"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pe" />
                            </div>
                            <span className="iti__country-name">
                              Peru (Perú)
                            </span>
                            <span className="iti__dial-code">+51</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ph"
                            role="option"
                            data-dial-code={63}
                            data-country-code="ph"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ph" />
                            </div>
                            <span className="iti__country-name">
                              Philippines
                            </span>
                            <span className="iti__dial-code">+63</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pl"
                            role="option"
                            data-dial-code={48}
                            data-country-code="pl"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pl" />
                            </div>
                            <span className="iti__country-name">
                              Poland (Polska)
                            </span>
                            <span className="iti__dial-code">+48</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pt"
                            role="option"
                            data-dial-code={351}
                            data-country-code="pt"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pt" />
                            </div>
                            <span className="iti__country-name">Portugal</span>
                            <span className="iti__dial-code">+351</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pr"
                            role="option"
                            data-dial-code={1}
                            data-country-code="pr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pr" />
                            </div>
                            <span className="iti__country-name">
                              Puerto Rico
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-qa"
                            role="option"
                            data-dial-code={974}
                            data-country-code="qa"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__qa" />
                            </div>
                            <span className="iti__country-name">
                              Qatar (‫قطر‬‎)
                            </span>
                            <span className="iti__dial-code">+974</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-re"
                            role="option"
                            data-dial-code={262}
                            data-country-code="re"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__re" />
                            </div>
                            <span className="iti__country-name">
                              Réunion (La Réunion)
                            </span>
                            <span className="iti__dial-code">+262</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ro"
                            role="option"
                            data-dial-code={40}
                            data-country-code="ro"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ro" />
                            </div>
                            <span className="iti__country-name">
                              Romania (România)
                            </span>
                            <span className="iti__dial-code">+40</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ru"
                            role="option"
                            data-dial-code={7}
                            data-country-code="ru"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ru" />
                            </div>
                            <span className="iti__country-name">
                              Russia (Россия)
                            </span>
                            <span className="iti__dial-code">+7</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-rw"
                            role="option"
                            data-dial-code={250}
                            data-country-code="rw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__rw" />
                            </div>
                            <span className="iti__country-name">Rwanda</span>
                            <span className="iti__dial-code">+250</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-bl"
                            role="option"
                            data-dial-code={590}
                            data-country-code="bl"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__bl" />
                            </div>
                            <span className="iti__country-name">
                              Saint Barthélemy
                            </span>
                            <span className="iti__dial-code">+590</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sh"
                            role="option"
                            data-dial-code={290}
                            data-country-code="sh"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sh" />
                            </div>
                            <span className="iti__country-name">
                              Saint Helena
                            </span>
                            <span className="iti__dial-code">+290</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-kn"
                            role="option"
                            data-dial-code={1}
                            data-country-code="kn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__kn" />
                            </div>
                            <span className="iti__country-name">
                              Saint Kitts and Nevis
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-lc"
                            role="option"
                            data-dial-code={1}
                            data-country-code="lc"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__lc" />
                            </div>
                            <span className="iti__country-name">
                              Saint Lucia
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-mf"
                            role="option"
                            data-dial-code={590}
                            data-country-code="mf"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__mf" />
                            </div>
                            <span className="iti__country-name">
                              Saint Martin (Saint-Martin (partie française))
                            </span>
                            <span className="iti__dial-code">+590</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-pm"
                            role="option"
                            data-dial-code={508}
                            data-country-code="pm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__pm" />
                            </div>
                            <span className="iti__country-name">
                              Saint Pierre and Miquelon
                              (Saint-Pierre-et-Miquelon)
                            </span>
                            <span className="iti__dial-code">+508</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-vc"
                            role="option"
                            data-dial-code={1}
                            data-country-code="vc"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__vc" />
                            </div>
                            <span className="iti__country-name">
                              Saint Vincent and the Grenadines
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ws"
                            role="option"
                            data-dial-code={685}
                            data-country-code="ws"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ws" />
                            </div>
                            <span className="iti__country-name">Samoa</span>
                            <span className="iti__dial-code">+685</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sm"
                            role="option"
                            data-dial-code={378}
                            data-country-code="sm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sm" />
                            </div>
                            <span className="iti__country-name">
                              San Marino
                            </span>
                            <span className="iti__dial-code">+378</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-st"
                            role="option"
                            data-dial-code={239}
                            data-country-code="st"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__st" />
                            </div>
                            <span className="iti__country-name">
                              São Tomé and Príncipe (São Tomé e Príncipe)
                            </span>
                            <span className="iti__dial-code">+239</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sa"
                            role="option"
                            data-dial-code={966}
                            data-country-code="sa"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sa" />
                            </div>
                            <span className="iti__country-name">
                              Saudi Arabia (‫المملكة العربية السعودية‬‎)
                            </span>
                            <span className="iti__dial-code">+966</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sn"
                            role="option"
                            data-dial-code={221}
                            data-country-code="sn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sn" />
                            </div>
                            <span className="iti__country-name">
                              Senegal (Sénégal)
                            </span>
                            <span className="iti__dial-code">+221</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-rs"
                            role="option"
                            data-dial-code={381}
                            data-country-code="rs"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__rs" />
                            </div>
                            <span className="iti__country-name">
                              Serbia (Србија)
                            </span>
                            <span className="iti__dial-code">+381</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sc"
                            role="option"
                            data-dial-code={248}
                            data-country-code="sc"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sc" />
                            </div>
                            <span className="iti__country-name">
                              Seychelles
                            </span>
                            <span className="iti__dial-code">+248</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sl"
                            role="option"
                            data-dial-code={232}
                            data-country-code="sl"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sl" />
                            </div>
                            <span className="iti__country-name">
                              Sierra Leone
                            </span>
                            <span className="iti__dial-code">+232</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sg"
                            role="option"
                            data-dial-code={65}
                            data-country-code="sg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sg" />
                            </div>
                            <span className="iti__country-name">Singapore</span>
                            <span className="iti__dial-code">+65</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sx"
                            role="option"
                            data-dial-code={1}
                            data-country-code="sx"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sx" />
                            </div>
                            <span className="iti__country-name">
                              Sint Maarten
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sk"
                            role="option"
                            data-dial-code={421}
                            data-country-code="sk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sk" />
                            </div>
                            <span className="iti__country-name">
                              Slovakia (Slovensko)
                            </span>
                            <span className="iti__dial-code">+421</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-si"
                            role="option"
                            data-dial-code={386}
                            data-country-code="si"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__si" />
                            </div>
                            <span className="iti__country-name">
                              Slovenia (Slovenija)
                            </span>
                            <span className="iti__dial-code">+386</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sb"
                            role="option"
                            data-dial-code={677}
                            data-country-code="sb"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sb" />
                            </div>
                            <span className="iti__country-name">
                              Solomon Islands
                            </span>
                            <span className="iti__dial-code">+677</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-so"
                            role="option"
                            data-dial-code={252}
                            data-country-code="so"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__so" />
                            </div>
                            <span className="iti__country-name">
                              Somalia (Soomaaliya)
                            </span>
                            <span className="iti__dial-code">+252</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-za"
                            role="option"
                            data-dial-code={27}
                            data-country-code="za"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__za" />
                            </div>
                            <span className="iti__country-name">
                              South Africa
                            </span>
                            <span className="iti__dial-code">+27</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-kr"
                            role="option"
                            data-dial-code={82}
                            data-country-code="kr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__kr" />
                            </div>
                            <span className="iti__country-name">
                              South Korea (대한민국)
                            </span>
                            <span className="iti__dial-code">+82</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ss"
                            role="option"
                            data-dial-code={211}
                            data-country-code="ss"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ss" />
                            </div>
                            <span className="iti__country-name">
                              South Sudan (‫جنوب السودان‬‎)
                            </span>
                            <span className="iti__dial-code">+211</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-es"
                            role="option"
                            data-dial-code={34}
                            data-country-code="es"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__es" />
                            </div>
                            <span className="iti__country-name">
                              Spain (España)
                            </span>
                            <span className="iti__dial-code">+34</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-lk"
                            role="option"
                            data-dial-code={94}
                            data-country-code="lk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__lk" />
                            </div>
                            <span className="iti__country-name">
                              Sri Lanka (ශ්‍රී ලංකාව)
                            </span>
                            <span className="iti__dial-code">+94</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sd"
                            role="option"
                            data-dial-code={249}
                            data-country-code="sd"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sd" />
                            </div>
                            <span className="iti__country-name">
                              Sudan (‫السودان‬‎)
                            </span>
                            <span className="iti__dial-code">+249</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sr"
                            role="option"
                            data-dial-code={597}
                            data-country-code="sr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sr" />
                            </div>
                            <span className="iti__country-name">Suriname</span>
                            <span className="iti__dial-code">+597</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sj"
                            role="option"
                            data-dial-code={47}
                            data-country-code="sj"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sj" />
                            </div>
                            <span className="iti__country-name">
                              Svalbard and Jan Mayen
                            </span>
                            <span className="iti__dial-code">+47</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-se"
                            role="option"
                            data-dial-code={46}
                            data-country-code="se"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__se" />
                            </div>
                            <span className="iti__country-name">
                              Sweden (Sverige)
                            </span>
                            <span className="iti__dial-code">+46</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ch"
                            role="option"
                            data-dial-code={41}
                            data-country-code="ch"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ch" />
                            </div>
                            <span className="iti__country-name">
                              Switzerland (Schweiz)
                            </span>
                            <span className="iti__dial-code">+41</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-sy"
                            role="option"
                            data-dial-code={963}
                            data-country-code="sy"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__sy" />
                            </div>
                            <span className="iti__country-name">
                              Syria (‫سوريا‬‎)
                            </span>
                            <span className="iti__dial-code">+963</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tw"
                            role="option"
                            data-dial-code={886}
                            data-country-code="tw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tw" />
                            </div>
                            <span className="iti__country-name">
                              Taiwan (台灣)
                            </span>
                            <span className="iti__dial-code">+886</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tj"
                            role="option"
                            data-dial-code={992}
                            data-country-code="tj"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tj" />
                            </div>
                            <span className="iti__country-name">
                              Tajikistan
                            </span>
                            <span className="iti__dial-code">+992</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tz"
                            role="option"
                            data-dial-code={255}
                            data-country-code="tz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tz" />
                            </div>
                            <span className="iti__country-name">Tanzania</span>
                            <span className="iti__dial-code">+255</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-th"
                            role="option"
                            data-dial-code={66}
                            data-country-code="th"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__th" />
                            </div>
                            <span className="iti__country-name">
                              Thailand (ไทย)
                            </span>
                            <span className="iti__dial-code">+66</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tl"
                            role="option"
                            data-dial-code={670}
                            data-country-code="tl"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tl" />
                            </div>
                            <span className="iti__country-name">
                              Timor-Leste
                            </span>
                            <span className="iti__dial-code">+670</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tg"
                            role="option"
                            data-dial-code={228}
                            data-country-code="tg"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tg" />
                            </div>
                            <span className="iti__country-name">Togo</span>
                            <span className="iti__dial-code">+228</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tk"
                            role="option"
                            data-dial-code={690}
                            data-country-code="tk"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tk" />
                            </div>
                            <span className="iti__country-name">Tokelau</span>
                            <span className="iti__dial-code">+690</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-to"
                            role="option"
                            data-dial-code={676}
                            data-country-code="to"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__to" />
                            </div>
                            <span className="iti__country-name">Tonga</span>
                            <span className="iti__dial-code">+676</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tt"
                            role="option"
                            data-dial-code={1}
                            data-country-code="tt"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tt" />
                            </div>
                            <span className="iti__country-name">
                              Trinidad and Tobago
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tn"
                            role="option"
                            data-dial-code={216}
                            data-country-code="tn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tn" />
                            </div>
                            <span className="iti__country-name">
                              Tunisia (‫تونس‬‎)
                            </span>
                            <span className="iti__dial-code">+216</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tr"
                            role="option"
                            data-dial-code={90}
                            data-country-code="tr"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tr" />
                            </div>
                            <span className="iti__country-name">
                              Turkey (Türkiye)
                            </span>
                            <span className="iti__dial-code">+90</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tm"
                            role="option"
                            data-dial-code={993}
                            data-country-code="tm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tm" />
                            </div>
                            <span className="iti__country-name">
                              Turkmenistan
                            </span>
                            <span className="iti__dial-code">+993</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tc"
                            role="option"
                            data-dial-code={1}
                            data-country-code="tc"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tc" />
                            </div>
                            <span className="iti__country-name">
                              Turks and Caicos Islands
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-tv"
                            role="option"
                            data-dial-code={688}
                            data-country-code="tv"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__tv" />
                            </div>
                            <span className="iti__country-name">Tuvalu</span>
                            <span className="iti__dial-code">+688</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-vi"
                            role="option"
                            data-dial-code={1}
                            data-country-code="vi"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__vi" />
                            </div>
                            <span className="iti__country-name">
                              U.S. Virgin Islands
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ug"
                            role="option"
                            data-dial-code={256}
                            data-country-code="ug"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ug" />
                            </div>
                            <span className="iti__country-name">Uganda</span>
                            <span className="iti__dial-code">+256</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ua"
                            role="option"
                            data-dial-code={380}
                            data-country-code="ua"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ua" />
                            </div>
                            <span className="iti__country-name">
                              Ukraine (Україна)
                            </span>
                            <span className="iti__dial-code">+380</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ae"
                            role="option"
                            data-dial-code={971}
                            data-country-code="ae"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ae" />
                            </div>
                            <span className="iti__country-name">
                              United Arab Emirates (‫الإمارات العربية المتحدة‬‎)
                            </span>
                            <span className="iti__dial-code">+971</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-gb"
                            role="option"
                            data-dial-code={44}
                            data-country-code="gb"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__gb" />
                            </div>
                            <span className="iti__country-name">
                              United Kingdom
                            </span>
                            <span className="iti__dial-code">+44</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-us"
                            role="option"
                            data-dial-code={1}
                            data-country-code="us"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__us" />
                            </div>
                            <span className="iti__country-name">
                              United States
                            </span>
                            <span className="iti__dial-code">+1</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-uy"
                            role="option"
                            data-dial-code={598}
                            data-country-code="uy"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__uy" />
                            </div>
                            <span className="iti__country-name">Uruguay</span>
                            <span className="iti__dial-code">+598</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-uz"
                            role="option"
                            data-dial-code={998}
                            data-country-code="uz"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__uz" />
                            </div>
                            <span className="iti__country-name">
                              Uzbekistan (Oʻzbekiston)
                            </span>
                            <span className="iti__dial-code">+998</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-vu"
                            role="option"
                            data-dial-code={678}
                            data-country-code="vu"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__vu" />
                            </div>
                            <span className="iti__country-name">Vanuatu</span>
                            <span className="iti__dial-code">+678</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-va"
                            role="option"
                            data-dial-code={39}
                            data-country-code="va"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__va" />
                            </div>
                            <span className="iti__country-name">
                              Vatican City (Città del Vaticano)
                            </span>
                            <span className="iti__dial-code">+39</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ve"
                            role="option"
                            data-dial-code={58}
                            data-country-code="ve"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ve" />
                            </div>
                            <span className="iti__country-name">Venezuela</span>
                            <span className="iti__dial-code">+58</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-vn"
                            role="option"
                            data-dial-code={84}
                            data-country-code="vn"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__vn" />
                            </div>
                            <span className="iti__country-name">
                              Vietnam (Việt Nam)
                            </span>
                            <span className="iti__dial-code">+84</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-wf"
                            role="option"
                            data-dial-code={681}
                            data-country-code="wf"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__wf" />
                            </div>
                            <span className="iti__country-name">
                              Wallis and Futuna (Wallis-et-Futuna)
                            </span>
                            <span className="iti__dial-code">+681</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-eh"
                            role="option"
                            data-dial-code={212}
                            data-country-code="eh"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__eh" />
                            </div>
                            <span className="iti__country-name">
                              Western Sahara (‫الصحراء الغربية‬‎)
                            </span>
                            <span className="iti__dial-code">+212</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ye"
                            role="option"
                            data-dial-code={967}
                            data-country-code="ye"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ye" />
                            </div>
                            <span className="iti__country-name">
                              Yemen (‫اليمن‬‎)
                            </span>
                            <span className="iti__dial-code">+967</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-zm"
                            role="option"
                            data-dial-code={260}
                            data-country-code="zm"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__zm" />
                            </div>
                            <span className="iti__country-name">Zambia</span>
                            <span className="iti__dial-code">+260</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-zw"
                            role="option"
                            data-dial-code={263}
                            data-country-code="zw"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__zw" />
                            </div>
                            <span className="iti__country-name">Zimbabwe</span>
                            <span className="iti__dial-code">+263</span>
                          </li>
                          <li
                            className="iti__country iti__standard"
                            tabIndex={-1}
                            id="iti-1__item-ax"
                            role="option"
                            data-dial-code={358}
                            data-country-code="ax"
                            aria-selected="false"
                          >
                            <div className="iti__flag-box">
                              <div className="iti__flag iti__ax" />
                            </div>
                            <span className="iti__country-name">
                              Åland Islands
                            </span>
                            <span className="iti__dial-code">+358</span>
                          </li>
                        </ul>
                      </div>
                      <input
                        type="tel"
                        name="drop_mobile"
                        id="drop_mobile"
                        className="country_code"
                        minLength={6}
                        maxLength={20}
                        placeholder="Mobile"
                        autoComplete="off"
                        style={{ paddingLeft: 91 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 form-inlabel courier">
              <div className="form-group">
                <div className="row">
                  <div className="col-12">
                    <label>Your Full Address </label>
                    <a
                      href="javascript:void(0);"
                      className="float-right text-success"
                      data-toggle="modal"
                      data-target="#select_to_address"
                    >
                      <i className="fa fa-map-marker" />{" "}
                      <small>
                        <u>Select from Saved Addresses </u>
                      </small>
                    </a>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-location-arrow" />
                    </div>
                    <input
                      type="text"
                      name="drop_address"
                      id="drop_address"
                      maxLength={150}
                      placeholder="Address"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 form-inlabel courier">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Landmark</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <input
                      type="text"
                      name="drop_landmark"
                      id="drop_landmark"
                      maxLength={80}
                      placeholder="Landmark"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 form-inlabel courier">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Landline Number</label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-phone" />
                    </div>
                    <input
                      type="text"
                      name="drop_landline"
                      id="drop_landline"
                      maxLength={30}
                      placeholder="Landline"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 form-inlabel h-100 mb-5">
              <div className=" custom_radio mt-2">
                <fieldset className="checkbox-group">
                  <legend className="checkbox-group-legend">
                    Drop Emirates
                  </legend>
                </fieldset>
                <label
                  className="form-check-label text-nowrap checkbox-wrapper drop_city_radio"
                  htmlFor="selected_drop_emirates_0"
                >
                  <input
                    className="form-check-input selected_drop_emirates"
                    sr_no={1}
                    type="radio"
                    id="selected_drop_emirates_0"
                    onchange="get_emirates_info('2');"
                    defaultValue="Abu Dhabi"
                    name="drop_city"
                    autoComplete="off"
                  />
                  <span>Abu Dhabi</span>
                </label>
                <label
                  className="form-check-label text-nowrap checkbox-wrapper drop_city_radio"
                  htmlFor="selected_drop_emirates_1"
                >
                  <input
                    className="form-check-input selected_drop_emirates"
                    sr_no={2}
                    type="radio"
                    id="selected_drop_emirates_1"
                    onchange="get_emirates_info('2');"
                    defaultValue="Dubai"
                    name="drop_city"
                    autoComplete="off"
                  />
                  <span>Dubai</span>
                </label>
                <label
                  className="form-check-label text-nowrap checkbox-wrapper drop_city_radio"
                  htmlFor="selected_drop_emirates_2"
                >
                  <input
                    className="form-check-input selected_drop_emirates"
                    sr_no={3}
                    type="radio"
                    id="selected_drop_emirates_2"
                    onchange="get_emirates_info('2');"
                    defaultValue="Sharjah"
                    name="drop_city"
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
                      id="drop_region_id"
                      name="drop_region_id"
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
            <div className="col-12 col-lg-6 form-inlabel courier hide_zip_vik">
              <div className="form-group">
                <div className="col-12">
                  <div className="row">
                    <label>Zipcode</label>
                  </div>
                </div>
                <div className="col-12 p-0 ">
                  <div className="form-group">
                    <div className="icon">
                      <i className="fa fa-flag" />
                    </div>
                    <input
                      type="text"
                      defaultValue={111111}
                      name="drop_zipcode"
                      id="drop_zipcode"
                      maxLength={6}
                      placeholder="Zipcode"
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-4">
              <div className="form-group form-group-mt" style={{ height: 150 }}>
                <div className="col-12">
                  <div className="row">
                    <label>Booking Remarks</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="icon textarea">
                      <i className="fa fa-info-circle" />
                    </div>
                    <textarea
                      type="text"
                      id="booking_remark"
                      name="booking_remark"
                      maxLength={200}
                      className="form-control"
                      placeholder="Any Instructions"
                      cols={30}
                      rows={2}
                      autoComplete="off"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
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
                <label>Total Payable</label>
                <label>
                  <span className="bk_sm_currency" />{" "}
                  <span className="cls_booking_payable">0</span>
                  <span
                    style={{ flex: "100%" }}
                    className="hide_this hidden text-right w-100 refund_txt"
                  >
                    <small className="refund_text">(Refundable)</small>
                  </span>
                </label>
                <p
                  style={{ flex: "100%" }}
                  className="hide_this hidden text-right w-100 saving_txt"
                >
                  <small className="saving_text" />
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h6 className="d-flex justify-content-between align-items-center">
                <span>Note :</span>
              </h6>
              <p>
                Kindly note that the transaction amount of 1 AED for
                verification of your EmiratesNBD card will be auto reversed
                within 6-7 working days.
              </p>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
}

export default To;
