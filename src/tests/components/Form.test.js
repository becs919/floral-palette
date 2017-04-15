import React from 'react';
import { shallow, mount } from 'enzyme';

import Form from '../../components/Form';

describe('Form', () => {

  it('renders one form-container div', () => {
    const wrapper = shallow(<Form />)

    expect(wrapper.find('.form-container').length).toBe(1);
  });

  it('renders 4 season buttons', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('.season-button').length).toBe(4);
  });

  it('renders 12 color divs', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('.color').length).toBe(12);
  });

  it('renders one NavLink', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('NavLink').length).toBe(1);
  });

  it.skip('should save season in state when clicked', () => {
    const wrapper = shallow(<Form />);

    const btn = wrapper.find('.season-button').first();
    console.log(btn);

    btn.simulate('click');

    expect(wrapper.state('season')).toBe('Fall')
  });

  it('should store season and colors array', () => {
    const wrapper = shallow(<Form />);
    let mockState = {
      season: '',
      colors: []
    };

    expect(wrapper.state()).toMatchObject(mockState);
  });
});
