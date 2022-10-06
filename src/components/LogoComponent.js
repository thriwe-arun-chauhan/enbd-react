import React from 'react';
import {browserRouter as Route, Link} from 'react-router-dom';

function LoginComponent() {
    return (
        <>
            <div className="col-lg-2 col-md-3 col-8">
                <div className="logo">
                    <div className="img-logo ">
                        <Link to="/">
                            <img src="https://emiratesnbdbenefits.thriwe.com/public/web/img/logo.png" alt="#" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginComponent;