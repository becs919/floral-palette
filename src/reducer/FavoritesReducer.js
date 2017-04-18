export const favorites = (state = [], action) => {
  switch(action.type){
    case 'SAVE_FAV':
      return action.favorites;
    default:
      return state;
  }
}
