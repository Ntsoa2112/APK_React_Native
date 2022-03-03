// Store/Reducers/favoriteReducer.js

const initialState = { favoritesMetier: [] }

function toggleMetierFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const favoritesMetierIndex = state.favoritesMetier.findIndex(item => item.id === action.value.id)
      if (favoritesMetier !== -1) {
        
        nextState = {
          ...state,
          favoritesMetier: state.favoritesMetier.filter( (item, index) => index !== favoritesMetierIndex)
        }
      }
      else {
      
        nextState = {
          ...state,
          favoritesMetier: [...state.favoritesMetier, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default toggleMetierFavorite