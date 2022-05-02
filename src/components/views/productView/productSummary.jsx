import React from 'react';
import { Card } from '/components/atoms/cards';
import { LabelValuePair } from '/components/atoms/labelValuePair';
import { ObjectName } from '/agility/structureNode/components';
import { StructureNodeContext } from '/agility/structureNode';

/* ID: 10096
Object Type: Product (2)
Name Path: AreUSerious.co Main Website/Musical Instruments/Rock Band/Guitars/Electric Guitars/Gibson/Gibson SG/123-005
Id Path: /30191/10075/10841/10076/17955/10079/10082/10096
Structure ID: 226
Last Modified: 2019-05-07 08:44:31.0930
Last Modified By: Mark Fee (Steve G)
// TODO Modified and Modified By
*/


export const ProductSummary = () => {
    const { structureNode } = React.useContext(StructureNodeContext);

    return <Card>
        <Card.Header title="Summary" />
        <Card.Content>
            {structureNode && <>

                <ObjectName />

                <LabelValuePair className="is-2 has-text-weight-semibold" label="ID">
                    {structureNode.id}
                </LabelValuePair>

                <LabelValuePair className="is-2 has-text-weight-semibold" label="Object Type">
                    {structureNode.objectType?.name} ({structureNode.objectTypeId})
                </LabelValuePair>

                <LabelValuePair className="is-2 has-text-weight-semibold" label="Name Path">
                    {structureNode.namePath}
                </LabelValuePair>

                <LabelValuePair className="is-2 has-text-weight-semibold" label="Id Path">
                    {structureNode.idPathStr}
                </LabelValuePair>

                <LabelValuePair className="is-2 has-text-weight-semibold" label="Structure Id">
                    {structureNode.structId}
                </LabelValuePair>

            </>}
        </Card.Content>
    </Card>;
};
