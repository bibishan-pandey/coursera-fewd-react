import React from 'react';

export const Loading = () => {
    return (
        <div className="col-12 pt-5 pb-5">
            <div className="d-flex justify-content-center align-items-center pt-5 pb-5">
                <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></i>
            </div>
        </div>
    );
};
