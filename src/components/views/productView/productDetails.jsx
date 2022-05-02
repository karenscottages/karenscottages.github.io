import React from 'react';
import { Card } from '/components/atoms/cards';
import { ObjectName, ObjectPreview } from '/agility/structureNode/components';
import { StructureNodeContext } from '/agility/structureNode';
import { StructureAttributeInstances } from './structureAttributeInstances.jsx';

export const ProductDetails = () => {
    const { structureNode } = React.useContext(StructureNodeContext);

    return <Card>
        <Card.Header>
            {structureNode && <ObjectName />}
        </Card.Header>
        <Card.Content>
            {structureNode && <>
                <ObjectPreview />
                <StructureAttributeInstances structureNode={structureNode} />
            </>}
        </Card.Content>
    </Card>;
};
