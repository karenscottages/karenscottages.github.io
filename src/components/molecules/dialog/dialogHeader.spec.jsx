import React from 'react';
import renderer from 'react-test-renderer';
import { DialogHeader } from './dialogHeader.jsx';

describe("Molecules/dialog/DialogHeader", () => {
    describe("DialogHeader", () => {
        it('Renders with theme and title', () => {
            const tree = renderer.
                create(<DialogHeader theme={{backgroundColour: 'white', textColour: 'black'}} title="Test Overlay"/>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("DialogHeader", () => {
        it('Renders with theme and no title', () => {
            const tree = renderer.
                create(<DialogHeader theme={{backgroundColour: 'black', textColour: 'white'}}/>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("DialogHeader", () => {
        it('Renders with a close function', () => {
            const tree = renderer.
                create(<DialogHeader theme={{backgroundColour: 'black', textColour: 'white'}} close={() => {('Hello World');}}/>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

});