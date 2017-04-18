import React from 'react';
import { shallow, mount } from 'enzyme';

import Flowers from '../../components/Flowers.js';

describe("Flowers", () => {

  const mockFlowers = [
    {
      "id": 4,
      "flower_name": "Calla Lily",
      "seasons": [
        "Fall"
      ],
      "colors": [
        "Orange",
        "Red",
        "Burgundy"
      ],
      "image": "https://www.directgardening.com/424-thickbox_default/mixed-calla-lily-.jpg"
    },
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
    }
  ];

  const mockData = {
    season:'Summer',
    colors: ["Orange", "Burgundy", "Purple"]
  };

  function setup() {
    const props = {
      flowers: mockFlowers,
      data: mockData
    };

    const wrapper = shallow(<Flowers {...props} />)

    return {
      props,
      wrapper
    }
  };


  it('Flowers renders a .flowers-div', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.flowers-div').length).toBe(1)
  });

  it('Flowers display season name', () => {
    const { wrapper } = setup()

    expect(wrapper.find('h2').props().children[0]).toBe('Summer')
  });

  it('should have three color divs', () => {
    const { wrapper } = setup()

    expect(wrapper.find('.palette').length).toBe(3)
  });

  it('should display color names and hex colors', () => {
    const { wrapper } = setup()

    expect(wrapper.find('p').length).toBe(6)
  });

  it('should list 1 matching FlowerCards component', () => {
    const { wrapper } = setup()

    expect(wrapper.find('FlowerCard').length).toBe(1)
  });

});
