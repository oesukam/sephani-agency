
const initialState = {
  mobileMenu: false
}
const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        mobileMenu: state.mobileMenu + 1,
      }
    default:
      return state;
  }
}

export default rootReducer;
