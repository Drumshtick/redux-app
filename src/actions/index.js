import { MARK_FAVORITE, REMOVE_FAVORITE } from '../constants/ActionTypes';

export const markFavorite = name => ({
  type: MARK_FAVORITE, // Mandatory key
  //To avoid name collision the general practice is to define types as constants and place them in separate file like we did above.
  name
});


export const removeFavorite = name => ({
  type: REMOVE_FAVORITE, // mandatory key
  name
});
