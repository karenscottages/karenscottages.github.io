import React, { useState } from 'react';
import { Card } from '/components/atoms/cards';
import { LabelValuePair, LabelCheckBoxPair } from '/components/atoms/labelValuePair';

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

function EditValue({currentValue, name}) {
    const [value, setValue] = useState(currentValue || '');
    const [checked, setChecked] = useState(false);
    const input = <input className="input" type="text" placeholder="Edit value" value={value} onChange={(e) => setValue(e.target.value)}/>;

    return (
        <div className="container is-fluid">
            <div className="section columns">
                <div className="column">
                    <Card>
                        <Card.Header title="Edit Value Page" />
                        <Card.Content>
                            <LabelValuePair className="is-2 has-text-weight-semibold" label={name}>{input}</LabelValuePair>
                            <LabelCheckBoxPair label={name} onClick={() => setChecked(!checked)}/>
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