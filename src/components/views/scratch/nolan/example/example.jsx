import React from 'react';
import { Card } from '/components/atoms/cards';

const Example = () => {

    const tempArray = ['', '', '', '', '', '', '', '', ''];

    return <div className="container is-fluid">
        <div className="section columns">
            <div className="column">
                <Card>
                    <Card.Header title="Example Page"/>
                    <Card.Content className={''}>
                        <div className="columns is-multiline">
                            {tempArray.map((text, idx) => <div key={idx} className="column box is-4 p-4">
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Glyph: </strong>
                                    </div>
                                    <div className="column" />
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>ID: </strong>
                                    </div>
                                    <div className="column">58400</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Name: </strong>
                                    </div>
                                    <div className="column">!!!tripleexclaim</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Parent Name: </strong>
                                    </div>
                                    <div className="column">Kitchen Sync</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Name Path: </strong></div>
                                    <div className="column">/MF Kids Catalogue/Kitchen Sync/!!!tripleexclaim</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Created: </strong></div>
                                    <div className="column">18th Jun 2021</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Created by: </strong></div>
                                    <div className="column">Catherine Learmonth</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Last modified: </strong>
                                    </div>
                                    <div className="column">06/18/2021</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Last modified by: </strong>
                                    </div>
                                    <div className="column">Catherine Learmonth</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Workflow State: </strong>
                                    </div>
                                    <div className="column">New</div>
                                </div>
                                <div className="columns is-12">
                                    <div className="column">
                                        <strong>Workflow State Group: </strong>
                                    </div>
                                    <div className="column">Initial</div>
                                </div>
                            </div>)}
                        </div>
                    </Card.Content>
                    <Card.Footer>
                        My 1st Card Footer
                    </Card.Footer>
                </Card>
            </div>
        </div>
    </div>;
};

// All scratch pages should provide a path like this:
Example.path = "/scratch/nolan/example";

export { Example };