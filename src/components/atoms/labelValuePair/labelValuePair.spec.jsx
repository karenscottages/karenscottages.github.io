import React from 'react';
import renderer from 'react-test-renderer';
import { LabelValuePair, LabelCheckBoxPair } from './';

describe("Atoms/LabelValuePair", () => {
    describe("LabelValuePair", () => {
        it('Renders with label and text', () => {
            const tree = renderer.
                create(<LabelValuePair label="Test label">Example Value</LabelValuePair>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("LabelValuePair", () => {
        it('Renders with label, text and class', () => {
            const tree = renderer.
                create(<LabelValuePair label="Test label" className="is-2">Example Value</LabelValuePair>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("LabelValuePair", () => {
        it('Renders with label, text and 2 class values', () => {
            const tree = renderer.
                create(<LabelValuePair label="Test label" className="is-2 has-text-weight-bold">Example Value</LabelValuePair>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("LabelCheckBoxPair", () => {
        it('Renders with checkbox and label', () => {
            const tree = renderer.
                create(<LabelCheckBoxPair label="Test label"/>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("LabelCheckBoxPair", () => {
        it('Renders with checkbox, label and onClick', () => {
            const tree = renderer.
                create(<LabelCheckBoxPair label="Test label" onClick={() => {}}/>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe("LabelCheckBoxPair", () => {
        it('Renders with checkbox, label and className', () => {
            const tree = renderer.
                create(<LabelCheckBoxPair label="Test label" className="ml-4"/>).
                toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});