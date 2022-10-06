import React from 'react';
function WidgetList() {
    return (
        <>
            <div className="float-sm">
                <div className="fl-fl float-fb">
                    <i className="fa fa-phone" />
                    <a href={`tel:${process.env.REACT_APP_MOBILE}`}>{process.env.REACT_APP_MOBILE}</a>
                </div>
                <div className="fl-fl float-tw">
                    <i className="fa fa-envelope" />
                    <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a>
                </div>
                <div className="fl-fl float-gp d-none">
                    <i className="fab fa-whatsapp" />
                    <a href={`https://api.whatsapp.com/send/?phone=91${process.env.REACT_APP_WHATSAPP}&text&app_absent=0`}>
                        +91-{process.env.REACT_APP_WHATSAPP}
                    </a>
                </div>
            </div>
        </>
    )
}

export default WidgetList;