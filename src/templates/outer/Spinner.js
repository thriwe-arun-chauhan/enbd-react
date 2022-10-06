import React from 'react';
function Spinner(props) {

    return (
        <>
            <div className="preloader">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}
export default Spinner;