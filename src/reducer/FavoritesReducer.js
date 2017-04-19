export const favorites = (state = [], action) => {
  switch(action.type){
    case 'SAVE_FAV':
      return action.favorites;
    case 'DELETE_FAV':
      return state.filter(value => value !== action.id)
    default:
      return state;
  }
};
