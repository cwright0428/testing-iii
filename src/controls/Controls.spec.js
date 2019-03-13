// Test away!
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';
import renderer from 'react-test-renderer';

describe('<Controls.js />', () => {
    it('should control the gate and lock functionality with click handlers', () => {

    });


    it('should render "open/close gate" based on props', () => {
        expect().toEqual();

    });

    it('should match snapshot', () => {
        const tree = renderer.create()

        expect(tree.toJSON()).toMatchSnapshot()

    });
});
