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
