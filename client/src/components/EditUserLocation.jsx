import React, {useState} from 'react';


const EditUserLocation = () => {
    return (
        <>
        <div className=" col-sm-12 mb-3">
            <div className="card card-shadow h-100">
                <div className="card-body card-user-body" >
                    <h3 className="user-page-font">Edit Location</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group row col-md-10 mx-auto">
                                <label className="col-sm-4 col-form-label user-page-font">Address 1</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row col-md-10 mx-auto">
                                <label className="col-sm-4 col-form-label user-page-font">Address 2</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row col-md-10 mx-auto">
                                <label className="col-sm-4 col-form-label user-page-font">Country</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row  col-md-10 mx-auto">
                                <label className="col-sm-4 col-form-label user-page-font">City</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row  col-md-10 mx-auto">
                                <label className="col-sm-4 col-form-label user-page-font">Postal code</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group row  col-md-10 mx-auto">
                                <input type="submit" className="btn-edit-user" value="Update"/>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
        </>
    )
};

export default EditUserLocation;