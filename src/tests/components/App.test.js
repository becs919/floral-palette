import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../components/App';
import Welcome from '../../components/Welcome'

describe('App', () => {

  it('renders one div', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('div').length).toBe(1);
  });

  it('renders one Header component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Header').length).toBe(1);
  });

  it('should return App Component with 3 Routes', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Route').length).toBe(3)
  });
});
