import React, {useState} from 'react';


const UserInfo = () => {
    return (
        <>
        <div className="col-sm-6 mb-3">
            <div className="card card-shadow h-100">
                <div className="card-body card-user-body" >
                    <h5 className="d-flex align-items-center mb-3 user-page-font">Upcoming Activities:</h5>
                    <div className="mb-3 user-page-line">
                        <h6>Charity Name: <span className="text-secondary">Charity</span></h6>
                        <h6>The Event: <span className="text-secondary">Marathon</span></h6>
                        <h6>Date: <span className="text-secondary">12/23/2020</span></h6>
                    </div>
                    <div className="mb-3 user-page-line">
                        <h6>Charity Name: <span className="text-secondary">Charity</span></h6>
                        <h6>The Event: <span className="text-secondary">Marathon</span></h6>
                        <h6>Date: <span className="text-secondary">12/23/2020</span></h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-6 mb-3">
            <div className="card card-shadow h-100">
                <div className="card-body card-user-body" >
                <h5 className="d-flex align-items-center mb-3 user-page-font">Upcoming Appointments:</h5>
                <div className="mb-3 user-page-line">
                    <h6>Charity Name: <span className="text-secondary">Charity</span></h6>
                    <h6>Category: <span className="text-secondary">Clothes</span></h6>
                    <h6>Date And Time: <span className="text-secondary">12/23/2020 1:10pm</span></h6>
                </div>
                <div className="mb-3 user-page-line">
                    <h6>Charity Name: <span className="text-secondary">Charity</span></h6>
                    <h6>Category: <span className="text-secondary">Clothes</span></h6>
                    <h6>Date And Time: <span className="text-secondary">12/23/2020 1:10pm</span></h6>
                </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default UserInfo;