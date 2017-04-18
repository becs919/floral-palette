import { flowers } from '../../reducer/FlowersReducer.js';

const initialState = [];

describe('flowers reducer', () => {

  it('should return inital state by default', () => {
    expect(flowers(undefined, {})).toEqual(initialState);
  });

  it('should return flowers array', () => {
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
    const action = {
      type: 'ADD_FLOWERS',
      flowers: mockFlowers
    }

    expect(flowers(undefined, action)).toEqual(mockFlowers);
  });

});
