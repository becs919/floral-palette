import { favorites } from '../../reducer/FavoritesReducer.js';

const initialState = []

describe('favorites reducer', () => {

  it('should return inital state by default', () => {

    expect(favorites(undefined, [])).toEqual(initialState);
  });

  it('should return fav array', () => {

    const mockData = [1, 2]

    const action = {
      type: 'SAVE_FAV',
      favorites: mockData
    }

    expect(favorites(undefined, action)).toEqual(mockData);
  });

  it('should return new state after DELETE_FAV', () => {

    const mockData = [1, 2]

    const action = {
      type: 'DELETE_FAV',
      id: 1
    }

    const newState = [2]

    expect(favorites(mockData, action)).toEqual(newState);
  });

});
