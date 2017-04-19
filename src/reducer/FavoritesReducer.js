export const favorites = (state = [], action) => {
  switch(action.type){
    case 'SAVE_FAV':
      return action.favorites;
    case 'DELETE_FAV':
      state.favorites.splice(action.id, 1 )
      return state
    default:
      return state;
  }
}


// state.favorites.filter(i => i !== action.id)
