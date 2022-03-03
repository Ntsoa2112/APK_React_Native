const initialState = { langue: 'mg' }

function LangueReducer(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'CHANGE_LANGUE':
        if(state != action.value){
          nextState = action.value
        }
      return nextState || state
  default:
    return state
  }
}

export default LangueReducer