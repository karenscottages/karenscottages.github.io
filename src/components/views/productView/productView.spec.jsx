import React from 'react';
import renderer from 'react-test-renderer';
import { ProductView } from './productView.jsx';

describe("Views/productView/productView", () => {
    describe("Product View page", () => {
        it('Renders with no props', () => {
            const tree = renderer.
                create(<ProductView/>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});