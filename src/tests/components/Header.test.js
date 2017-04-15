import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

describe('Header', () => {

  it('renders one header', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.find('header').length).toBe(1);
  });

  it('renders one NavLink', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('NavLink').length).toBe(1);
  });

  it ('should redirect to '/' after click', () => {
    const wrapper = shallow(<Header />);

      let btn = wrapper.find('NavLink');

      btn.simulate('click');

      expect(wrapper.props().children.props.to).toBe('/');
    });
});
