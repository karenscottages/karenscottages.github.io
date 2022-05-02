import React from 'react';
import { ObjectTypeStore } from '/agility/objectType/store';
import { Card } from '/components/atoms/cards';
import { LabelValuePair } from '/components/atoms/labelValuePair';

const ObjectTypeCard = ({objectType}) => <Card>
    <Card.Header title={objectType.namePath}/>
    <Card.Content>
        <LabelValuePair className="is-3" label="ID"><span>{objectType.id}</span></LabelValuePair>
        <LabelValuePair className="is-3" label="Name"><span>{objectType.name}</span></LabelValuePair>
        <LabelValuePair className="is-3" label="Name AttributeId"><span>{objectType.nameAttribDefId}</span></LabelValuePair>
    </Card.Content>
</Card>;

const ObjectTypeExample = () => {
    const objectTypes = ObjectTypeStore.array;

    return <div className="container is-fluid">
        <div className="section columns is-multiline">
            {objectTypes.map((objectType) => 
                <div key={objectType.id} className="column is-4">
                    <ObjectTypeCard objectType={objectType} />
                </div>)
            }
        </div>
    </div>;
};

// All scratch pages should provide a path like this:
ObjectTypeExample.path = "/scratch/mark/objectType";
ObjectTypeExample.menuName = "Object Types";

export { ObjectTypeExample };
