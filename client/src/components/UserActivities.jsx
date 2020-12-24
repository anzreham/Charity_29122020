import React, {useState} from 'react';


const UserActivities = () => {
    return (
        <>
        <div className=" col-sm-12 mb-3">
            <div className="card h-100 card-shadow">
                <div className="card-body card-user-body">
                    <h3 className="user-page-font">ALl Activites</h3>
                    <div className="card  mb-3">
                        <div className="card-header card-user-head">
                            Marathon
                        </div>
                        <div className="card-body">
                            <p className="card-title">By Charity One <span>12/23/2020</span></p>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus vero id corporis, et exercitationem ex fugit eum esse impedit.</p>
                            <a href="" className="cancelattend">Will not attend</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header card-user-head">
                            Marathon
                        </div>
                        <div className="card-body">
                            <p className="card-title">By Charity One <span>12/23/2020</span></p>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit natus vero id corporis, et exercitationem ex fugit eum esse impedit.</p>
                            <a href="" className="cancelattend">Will not attend</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};

export default UserActivities;