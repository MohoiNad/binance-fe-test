import React from 'react';
import { render } from '@testing-library/react';
import { shallow, ShallowWrapper } from "enzyme";

import {Row} from './Row';
import {findByTestAttr} from '../../../testUtils'


/***
 * Factory function which return a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const defaultProps = {
    price: 0,
    pair: '',
    change: 0
}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Row {...setupProps}/>)
};

describe('renders correctly', ()=> {
    let wrapper:ShallowWrapper;
    beforeEach(()=> {
        wrapper = setup({guessedWords: []})
    })
    test("render without error", () => {

        const component = findByTestAttr(wrapper,'row-component' );
        expect(component.length).toBe(1)
    });

    test("have pair name cell", () => {

        const component = findByTestAttr(wrapper,'row-pair' );
        expect(component.length).toBe(1)
    });

    test("have price cell", () => {

        const component = findByTestAttr(wrapper,'row-last-price' );
        expect(component.length).toBe(1)
    });

    test("have changed cell", () => {

        const component = findByTestAttr(wrapper,'row-change' );
        expect(component.length).toBe(1)
    });


})
