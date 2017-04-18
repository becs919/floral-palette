import React from 'react';
import { shallow, mount } from 'enzyme';

import FlowerCard from '../../components/FlowerCard.js';

describe("FlowersCard", () => {

  const mockFlowers =
    {
      "id": 5,
      "flower_name": "Hydrangea",
      "seasons": [
        "Summer",
        "Fall"
      ],
      "colors": [
        "White",
        "Burgundy",
        "Purple"
      ],
      "image": "http://www.gardendebut.com/_ccLib/image/plants/DETA4-2794.jpg"
    };

  const mockData = {
    season:'Summer',
    colors: ["Orange", "Burgundy", "Purple"]
  };


  it('FlowerCard renders a .flowers-div', () => {
    const wrapper = shallow(<FlowerCard data={mockData} flower={mockFlowers} id={mockFlowers.id}/>)

    expect(wrapper.find('.indv-flower').length).toBe(1)
  });

  it('displays one img', () => {
    const wrapper = shallow(<FlowerCard data={mockData} flower={mockFlowers} id={mockFlowers.id}/>)

    expect(wrapper.find('img').length).toBe(1)
    expect(wrapper.find('img').props().src).toBe('http://www.gardendebut.com/_ccLib/image/plants/DETA4-2794.jpg')
  });

  it('should render three p tags', () => {
    const wrapper = mount(<FlowerCard data={mockData} flower={mockFlowers} id={mockFlowers.id}/>)

    expect(wrapper.find('p').length).toBe(3)
    expect(wrapper.find('p').first().props().children[1]).toBe('Hydrangea')
    expect(wrapper.find('p').last().props().children[1]).toEqual("White, Burgundy, Purple")
  });

});
