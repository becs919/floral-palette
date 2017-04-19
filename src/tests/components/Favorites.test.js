import React from 'react';
import { shallow, mount } from 'enzyme';

import Favorites from '../../components/Favorites.js';

describe("Favorites", () => {

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

  const mockFav = [4]

  function setup() {
    const props = {
      flowers: mockFlowers,
      data: mockData,
      favorites: mockFav,
      removeFav: jest.fn()
    };

    const wrapper = shallow(<Favorites {...props} />)

    return {
      props,
      wrapper
    }
  };


  it('Favorites renders a .fav-div', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.fav-div').length).toBe(1)
  });

  it('Favorites should render one div and one FlowerCard ', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.flower-card-div').length).toEqual(1)
    expect(wrapper.find('FlowerCard').length).toEqual(1)
  });

  it('Favorites should render one fav-button ', () => {
    const { wrapper } = setup();

    expect(wrapper.find('.fav-button').length).toEqual(1)
  });

});
