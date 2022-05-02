import React from 'react';
import { useParams } from 'react-router';

const StructureType = () => {
    let {structureType} = useParams();
    return <div className="section">

        <div className="card">
            <div className="card-header"><p className="card-header-title">Structure Type Home Page</p></div>
            <div className="card-content">
                <div className="content">
                    This Page will have all the useful stuff for {`"${structureType}"`}
                </div>
            </div>
        </div>
    </div>;
};

StructureType.Path = "/structureType/:structureType";

export { StructureType };