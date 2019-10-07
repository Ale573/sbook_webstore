import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Login />', () => {

    it('renders Email', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.label_text').first().text()).toBe("Email");
    });

    it('renders Password', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.label_text').at(1).text()).toBe("Password");
    });

    it('renders Input Boxes', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.input_box').length).toBe(2);
    });

    it('renders Login button', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.submit_button').length).toBe(1);
    });

    it('renders error message', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('.error_message').text()).toBe("");
    });
  });

  describe('<Login /> Inputs', () => {

    it('testing simulated values', () => {
        const wrapper = shallow(<Login />);

        wrapper.find('input').at(0).simulate('change', {target: {value: 'tester@test.com'}});
        wrapper.find('input').at(1).simulate('change', {target: {value: 'Tester1234'}});

        expect(wrapper.state('email')).toBe('tester@test.com');
        expect(wrapper.state('password')).toBe('Tester1234');
    });
    
    it('testing Login button', () => {
        const wrapper = shallow(<Login />);

        wrapper.find('.submit_button').simulate('click');

        expect(wrapper.state('loading')).toBe(true);
    });
  });