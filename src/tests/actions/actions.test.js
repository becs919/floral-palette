import configureMockStore from 'redux-mock-store';
import * as actions from '../../actions/actions.js';

const store = configureMockStore()();

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

const mockFavs = [1, 2, 3];


describe('Actions', () => {
  afterEach(()=> store.clearActions());

  it('ADD_FLOWERS', () => {
    let expectedAction = {type: 'ADD_FLOWERS', flowers: mockFlowers};

    store.dispatch(actions.addFlowers(mockFlowers));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

  it('SAVE_FORM', () => {
    let expectedAction = {type: 'SAVE_FORM', data: mockData};

    store.dispatch(actions.saveForm(mockData));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

  it('SAVE_FAV', () => {
    let expectedAction = {type: 'SAVE_FAV', favorites: mockFavs};

    store.dispatch(actions.saveFav(mockFavs));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

  it('DELETE_FAV', () => {
    let expectedAction = {type: 'DELETE_FAV', id: 1};

    store.dispatch(actions.removeFav(1));
    let createdAction = store.getActions();

    expect(createdAction.length).toEqual(1);
    expect(createdAction[0]).toEqual(expectedAction);
  });

});
