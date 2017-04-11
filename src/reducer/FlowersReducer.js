export const flowers = (state = [], action) => {
  switch(action.type){
    case 'ADD_FLOWERS':
      return action.flowers;
    default:
      return state;
  }
}
