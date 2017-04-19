import { favorites } from '../../reducer/FavoritesReducer.js';

const initialState = {
  favorites: [],
};

describe('favorites reducer', () => {

  it('should return inital state by default', () => {

    expect(data(undefined, [])).toEqual(initialState);
  });

  it('should return fav array', () => {

    const mockData = [1, 2]

    const action = {
      type: 'SAVE_FAV',
      favorites: mockData
    }

    expect(favorites(undefined, action)).toEqual(mockData);
  });

});
