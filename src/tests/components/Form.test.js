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

  it('renders no NavLink when season and colors arent selected', () => {
    const wrapper = shallow(<Form />);

    expect(wrapper.find('NavLink').length).toBe(0);
  });

  it('should store season and colors array', () => {
    const wrapper = shallow(<Form />);
    let mockState = {
      season: '',
      colors: []
    };

    expect(wrapper.state()).toMatchObject(mockState);
  });

  it('should save season in state when clicked and change classname', () => {
    const wrapper = mount(<Form />);

    const btn = wrapper.find('.season-button').first();

    btn.simulate('click', { target: { innerText: "Fall"} });

    expect(wrapper.find('.activeSeasonButton').length).toBe(1);
    expect(wrapper.state().season).toBe('Fall');
  });

  it('should save colors in state when clicked and change className', () => {
    const wrapper = mount(<Form />);

    const btn = wrapper.find('.color').first();

    btn.simulate('click', { target: { innerText: "Red"} });

    expect(wrapper.state().colors[0]).toBe('Red');
    expect(wrapper.find('.activeColorButton').length).toBe(1);
  });

  it('should render NavLink when color and season are selected', () => {
    const wrapper = shallow(<Form />);

    const btn = wrapper.find('.color').first();
    const seasonBtn = wrapper.find('.season-button').first();

    btn.simulate('click', { target: { innerText: "Red"} });
    seasonBtn.simulate('click', { target: { innerText: "Fall"} });

    expect(wrapper.find('NavLink').length).toBe(1);
  });

  it('should change path when submit button is clicked', () => {
    const wrapper = shallow(<Form />);

    const btn = wrapper.find('.color').first();
    const seasonBtn = wrapper.find('.season-button').first();

    btn.simulate('click', { target: { innerText: "Red"} });
    seasonBtn.simulate('click', { target: { innerText: "Fall"} });

    const submit = wrapper.find('NavLink')
    submit.simulate('click')

    expect(wrapper.props().children[6].props.to).toBe('/flowers');
  });
});
