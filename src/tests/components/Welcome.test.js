import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';

import Welcome from '../../components/Welcome';

describe('Welcome', () => {

  it('renders welcome-container and one button', () => {
    const wrapper = shallow(<Welcome />)

    expect(wrapper.find('.welcome-container').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it ('should redirect to /form after click', () => {
    const wrapper = shallow(<Welcome />);

      let btn = wrapper.find('NavLink');

      btn.simulate('click');

      expect(wrapper.props().children[1].props.to).toBe('/form');
    });
});
