import React from 'react';
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

const CathExample = () =>
    <div className="container is-fluid">
        <div className="section columns">
            <div className="column">
                <Card>
                    <Card.Header title="Example Page" />
                    <Card.Content>
                        <figure className="image is-128x128">
                            <img className=" is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                        </figure>
                        <div className="columns is-multiline">
                            <div className="column is-half">
                                <b>Attribute name:</b> Test attribute
                            </div>
                            <div className="column is-half">
                                <b>Value:</b> {attributeValue.value}
                            </div>
                            <div className="column is-one-third">
                                <b>Creation Details</b>
                            </div>
                            <div className="column is-one-third">
                                Created by: {attributeValue.createdBy}
                            </div>
                            <div className="column is-one-third">
                                Created On: {attributeValue.created}
                            </div>
                            <div className="column is-one-third">
                                <b>Modification Details</b>
                            </div>
                            <div className="column is-one-third">
                                Last update by: {attributeValue.modifiedBy}
                            </div>
                            <div className="column is-one-third">
                                Updated On: {attributeValue.modified}
                            </div>
                        </div>

                    </Card.Content>
                    <Card.Footer>
                        My 1st Card Footer
                    </Card.Footer>
                </Card>
            </div>
        </div>
    </div>;

// All scratch pages should provide a path like this:
CathExample.path = "/scratch/cath/example";

export { CathExample };