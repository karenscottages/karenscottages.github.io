import React from "react";

const LabelValuePair = ({ className = "", children, label }) => {
    let classValue = "column " + className;

    return <div className="columns is-multiline">
        <div className={classValue}>
            <label className="label">{label}</label>
        </div>
        <div className="column">{children}</div>
    </div>;

};

const LabelCheckBoxPair = ({label, className = null, onClick}) => <label className="checkbox" onClick={onClick}> 
    <input type="checkbox" />
    <span className={className || 'ml-2'}>{label}</span>
</label>;

export { LabelValuePair, LabelCheckBoxPair };