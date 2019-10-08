import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';
import {MemoryRouter} from "react-router-dom";
import Auth from '../Auth/Auth';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Header />', () => {

    it('Render Image', () => {
        const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
        expect(wrapper.find('img').length).toBe(1);
    });
    
    it('renders Title', () => {
      const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
      expect(wrapper.find('h1').at(0).text()).toBe("S-Book Webstore");
    });

    it('renders Link', () => {
        const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
        expect(wrapper.find('Link').at(0).prop('to')).toBe('/');
    });
});

describe('<Header /> Changes', () => {


    it('renders new Link of Logo', () => {
        Auth.authenticateUser("Bret");

        const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
        expect(wrapper.find('Link').at(0).prop('to')).toBe('/dash');
    });

    it('renders Logout button', () => {
        Auth.authenticateUser("Bret");

        const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
        expect(wrapper.find('button').length).toBe(1);
    });

    it('testing Logout button', () => {
        Auth.authenticateUser("Bret");

        const wrapper = mount(<MemoryRouter><Header /></MemoryRouter>);
        wrapper.find('button').at(0).simulate('click', { button: 0 });
        expect(wrapper.find('Link').at(0).prop('to')).toBe('/');
    });
});