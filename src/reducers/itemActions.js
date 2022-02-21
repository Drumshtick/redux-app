
const itemActions = (
  state= { //1st argument is the state which is initialized with default state for that reducer
    favorites: [] // 2nd argument is the action which the reducer is going to interpret
  },
  action
) => {
  switch ( action.type ) {
    case "MARK_FAVORITE":
      return {
        ...state,
        favorites: [ ...state.favorites, action.name ]
      };
    case "REMOVE_FAVORITE":
      const favorites = state.favorites.filter(item => item !== action.name);
      return {
        ...state,
        favorites
      };
    default: 
    return state;
  }
};

export default itemActions;
