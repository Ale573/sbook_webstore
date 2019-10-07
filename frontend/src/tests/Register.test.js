import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/Register';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Register />', () => {

    it('renders Email', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('.label_text').first().text()).toBe("Email");
    });

    it('renders Password', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('.label_text').at(1).text()).toBe("Password");
    });

    it('renders Confirm Password', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('.label_text').at(2).text()).toBe("Confirm Password");
    });

    it('renders Input Boxes', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('.input_box').length).toBe(3);
    });

    it('renders Register button', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('.submit_button').length).toBe(1);
    });

    it('renders error message', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('.error_message').text()).toBe("");
    });
  });

  describe('<Register /> Inputs', () => {

    it('testing simulated values', () => {
        const wrapper = shallow(<Register />);

        wrapper.find('input').at(0).simulate('change', {target: {value: 'tester@test.com'}});
        wrapper.find('input').at(1).simulate('change', {target: {value: 'Tester1234'}});
        wrapper.find('input').at(2).simulate('change', {target: {value: 'Tester1234'}});

        expect(wrapper.state('email')).toBe('tester@test.com');
        expect(wrapper.state('password')).toBe('Tester1234');
        expect(wrapper.state('confirm_password')).toBe('Tester1234');
    });
    
    it('testing Register button', () => {
        const wrapper = shallow(<Register />);

        wrapper.find('.submit_button').simulate('click');

        expect(wrapper.state('loading')).toBe(true);
    });
  });