import React from 'react';
import { AcmsValue } from '/agility/acms/components';
import { LabelValuePair } from '/components/atoms/labelValuePair';

const StructureAttributeInstance = ({attributeInstance}) => 
    <LabelValuePair className="is-narrow has-text-weight-semibold" label={attributeInstance.name || "NONAME"}>
        <AcmsValue acms={attributeInstance.value} />
    </LabelValuePair>;

export const StructureAttributeInstances = ({ structureNode }) => structureNode.attributes.
    filter((attributeInstance) => (attributeInstance.dataTypeId <= 3 && attributeInstance.value)).
    map((attributeInstance) => <StructureAttributeInstance
        key={attributeInstance.name}
        attributeInstance={attributeInstance} />);
