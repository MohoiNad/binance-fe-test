import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from "enzyme";

import {App} from './App';
import {findByTestAttr} from './testUtils'

const defaultProps = {success: false};
/***
 * Factory function which return a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<App {...setupProps}/>)
};


test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper,'app-component' );
  expect(component.length).toBe(1)

});
