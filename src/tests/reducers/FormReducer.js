import { data } from '../../reducer/FormReducer.js';

const initialState = {
  season: '',
  colors: []
};

describe('forms reducer', () => {

  it('should return inital state by default', () => {

    expect(data(undefined, {})).toEqual(initialState);
  });

  it('should return data object', () => {

    const mockData = {
      season:'Summer',
      colors: ["Orange", "Burgundy", "Purple"]
    };

    const action = {
      type: 'SAVE_FORM',
      data: mockData;
    }

    expect(data(undefined, action)).toEqual(mockData);
  });

});
