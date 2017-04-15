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

    const btn2 = wrapper.find('.color').last();
    btn.simulate('click', { target: { innerText: "Blue"} });

    expect(wrapper.state().colors).toEqual(['Red', 'Blue']);
    expect(wrapper.find('.activeColorButton').length).toBe(2);
  });

  it('should remove color if in state and you click again', () => {
    const wrapper = mount(<Form />);

    const btn = wrapper.find('.color').first();
    btn.simulate('click', { target: { innerText: "Red"} });

    expect(wrapper.state().colors[0]).toBe('Red');
    expect(wrapper.find('.activeColorButton').length).toBe(1);

    const btn2 = wrapper.find('.color').first();
    btn.simulate('click', { target: { innerText: "Red"} });

    expect(wrapper.state().colors).toEqual([]);
    expect(wrapper.find('.activeColorButton').length).toBe(0);
  });

  it('should remove first color if 4th color is selected, aka doesnt let you add more than three colors', () => {
    const wrapper = mount(<Form />);

    const btn = wrapper.find('.color').first();
    btn.simulate('click', { target: { innerText: "Red"} });

    expect(wrapper.state().colors[0]).toBe('Red');
    expect(wrapper.find('.activeColorButton').length).toBe(1);

    const btn2 = wrapper.find('.color').first();
    btn.simulate('click', { target: { innerText: "Blue"} });

    expect(wrapper.state().colors).toEqual(['Red', 'Blue']);
    expect(wrapper.find('.activeColorButton').length).toBe(2);

    const btn3 = wrapper.find('.color').first();
    btn.simulate('click', { target: { innerText: "Green"} });

    expect(wrapper.state().colors).toEqual(['Red', 'Blue', 'Green']);
    expect(wrapper.find('.activeColorButton').length).toBe(3);

    const btn4 = wrapper.find('.color').first();
    btn.simulate('click', { target: { innerText: "Purple"} });

    expect(wrapper.state().colors).toEqual(['Blue', 'Green', 'Purple']);
    expect(wrapper.find('.activeColorButton').length).toBe(3);
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
