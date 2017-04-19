export const addFlowers = (flowers) => {
  return {
    type: 'ADD_FLOWERS',
    flowers
  }
};

export const saveForm = (data) => {
  return {
    type: 'SAVE_FORM',
    data
  }
};

export const saveFav = (favorites) => {
  return {
    type: 'SAVE_FAV',
    favorites
  }
};

export const removeFav = (id) => {
  return {
    type: 'REMOVE_FAV',
    id
  }
};
