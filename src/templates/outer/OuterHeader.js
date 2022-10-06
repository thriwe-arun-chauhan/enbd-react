import React, { useEffect, useState } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { connect } from 'react-redux'

import LogoComponent from '../../components/LogoComponent';

function OuterHeader(props) {

  useEffect(() => {
  });

  return (
    <>
      <header className="header">
        <div className="middle-header outer-site">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="middle-inner">
                  <div className="row">
                    <LogoComponent />
                    
                    <div className="col-lg-10 col-md-9 col-4">
                    
                      <div className="right-button">
                        <Link to="/" className="custom-btn ">Get Started</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

const mapStateToProps = state => ({
  data: state.cardItems
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(OuterHeader)