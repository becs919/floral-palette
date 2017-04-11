const initialState = {
  season: '',
  colorOne: '',
  colorTwo: '',
  colorThree: ''
};

export const data = (state = initialState, action) => {
  switch(action.type){
    case 'SAVE_FORM':
      return Object.assign({}, state, action.data);
    default:
      return state;
  };
};
