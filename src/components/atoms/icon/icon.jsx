import React from "react";

export const Icon = ({className, onClick, wrapperClassName = ""}) => 
    <span className={`icon ${wrapperClassName}`} onClick={onClick}>
        <i className={className} />
    </span>;

export const IconText = ({className, children, onClick}) => <div className="icon-text" onClick={onClick}>
    <span className="icon">
        <i className={className} />
    </span>
    <span>{children}</span>
</div>;