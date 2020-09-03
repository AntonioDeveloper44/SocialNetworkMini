import React from "react";
import moment from "moment";

export default ({user}) => {

    return (
        <div className="card">
            <div className="card-body">
                <p>{user.email}</p>
                <p>{moment(user.dateCreated).format('DD/MM/YYYY')}</p>
                <div>{user._id}</div>
            </div>
        </div>
    )
}