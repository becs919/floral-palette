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
        "Maroon"
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
        "Maroon",
        "Purple"
      ],
      "image": "http://www.gardendebut.com/_ccLib/image/plants/DETA4-2794.jpg"
    }
  ];

  const mockData = {
    season:'Summer',
    colors: ["Orange", "Maroon", "Purple"]
  };

  it.skip('Flowers renders a .flowers-div', () => {
    const wrapper = mount(<Flowers data={ mockData } flowers={ mockData }/>);

    expect(wrapper.find('.flowers-div').length).toBe(1)
  });

});
