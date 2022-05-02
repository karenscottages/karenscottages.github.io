import React, { useState } from 'react';
import { Card } from '/components/atoms/cards';

const attributeValue = {
    created: "2016-04-12 14:49:18",
    createdBy: "Test user",
    langId: 10,
    modified: "2016-04-12 14:49:18",
    modifiedBy: "ADMINISTRATOR",
    scope: "global",
    sortOrder: 0,
    stateId: 35,
    stateName: "Start marketing content process",
    value: "Template attribute value"
};




function EditInput({value, setValue, nameLabel}) {
    return <div className="field is-horizontal">
        {nameLabel && <div className="field-label is-normal">
            <label className="label">{nameLabel}</label>
        </div>}
        <div className="field-body">
            <div className="field">
                <input className="input" type="text" placeholder="Edit value" value={value} onChange={(e) => setValue(e.target.value)}/>
            </div>
        </div>
    </div>;
}

function EditValue({currentValue, name}) {
    const [value, setValue] = useState(currentValue || '');

    return (
        <div className="container is-fluid">
            <div className="section columns">
                <div className="column">
                    <Card>
                        <Card.Header title="Edit Value Page" />
                        <Card.Content>
                            <EditInput value={value} setValue={setValue} nameLabel={name} />
                            <div className="buttons">
                                <input className="button" type="submit" value="OK"/>
                                <input className="button" type="reset" value="Reset" onClick={() => setValue('')}/>
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            Card Footer
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function EditAttribute() {
    return <EditValue currentValue={attributeValue.value} name={'Test Attribute'}/>;
}

EditAttribute.path = "/scratch/cath/editattribute";

export { EditAttribute };