import React from 'react';
import renderer from 'react-test-renderer';
import { Tile } from './';

describe("Atoms/Tiles", () => {
    describe("Tile", () => {
        it('still renders correctly', () => {
            const tree = renderer.
                create(<Tile>Example Tile</Tile>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe("Tile.Ancestor", () => {
        it('still renders correctly', () => {
            const tree = renderer.
                create(<Tile.Ancestor>Example Tile</Tile.Ancestor>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe("Tile.Parent", () => {
        it('still renders correctly', () => {
            const tree = renderer.
                create(<Tile.Parent>Example Tile</Tile.Parent>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe("Tile.Child", () => {
        it('still renders correctly', () => {
            const tree = renderer.
                create(<Tile.Child>Example Tile</Tile.Child>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});