import React, {useState} from 'react';


const UserAppointment = () => {
    return (
        <>
        <div className=" col-sm-12 mb-3">
            <div className="card h-100 card-shadow">
                <div className="card-body card-user-body">
                    <h3 className="user-page-font">ALl Appointments</h3>
                    <table className="table text-center">
                        <thead className="card-user-head">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Charity</th>
                                <th scope="col">Date</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="table-th" scope="row">1</th>
                                <td>Charity 1</td>
                                <td>12/23/2020</td>
                                <td>10:30 AM</td>
                            </tr>
                            <tr>
                                <th className="table-th" scope="row">2</th>
                                <td>Charity 2</td>
                                <td>12/25/2020</td>
                                <td>04:30 PM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
};

export default UserAppointment;