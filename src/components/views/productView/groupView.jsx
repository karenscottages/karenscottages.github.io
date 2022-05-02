import React from 'react';
import { ProductSummary } from './productSummary.jsx';
import { ObjectName, ObjectPreview } from '/agility/structureNode/components';
import { StructureNodeContext } from '/agility/structureNode';
import { Card } from '/components/atoms/cards';
import { useHistory  } from 'react-router-dom';

const GroupView = () => {
    const { structureNode, setIdPath } = React.useContext(StructureNodeContext);
    const [children, setChildren] = React.useState([]);
    const history = useHistory();

    // Effects
    React.useEffect(() => { // Requests the children when a node is expanded
        if (structureNode) {
            structureNode.fetchChildren().then(() => setChildren(structureNode.children));
        } else {
            setChildren([]);
        }
    }, [structureNode]);

    const onSelectChild = (structureNode) => {
        setIdPath(structureNode.idPathStr);
        history.push("/productview"); // TODO this should be dynamic like the structureBrowser
    };

    return <div className="container is-fluid">
        <div className="section columns is-multiline">

            <div className="column">
                <ProductSummary />
            </div>

            {children && <div className="column">
                <Card>
                    <Card.Header>Children</Card.Header>
                    <Card.Content>{
                        children.map((childStructureNode) => 
                            <div 
                                key={childStructureNode.id} 
                                className='columns is-clickable' 
                                onClick={() => onSelectChild(childStructureNode)}
                            >
                                <div className='column'>
                                    <ObjectName structureNode={childStructureNode} />
                                </div>
                                <div className='column'>
                                    <ObjectPreview structureNode={childStructureNode} />
                                </div>
                            </div>)
                    }</Card.Content>
                </Card>
            </div>}

        </div>
    </div>;
};

GroupView.Path = "/groupview";

export { GroupView };
