// Test away!
import React from 'react';
import Display from './Display';
import renderer from 'react-test-renderer';


describe('<Display />', () => {
    it('control the locked/unlocked gates and red and green leds', () => {

    });

    it('should match snapshot', () => {
        const tree = renderer.create()

        expect(tree.toJSON()).toMatchSnapshot()

    });

});