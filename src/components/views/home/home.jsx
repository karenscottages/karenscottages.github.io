import React from 'react';
import { Card } from '/components/atoms/cards';

export const Home = () =>
    <div className="container is-fluid">
        <div className="section columns">
            <div className="column">
                <Card>
                    <Card.Header title="Hello World" />
                    <Card.Content>
                        Example Card
                    </Card.Content>
                    <Card.Footer>
                        My 1st Card Footer
                    </Card.Footer>
                </Card>
            </div>
        </div>
    </div>;