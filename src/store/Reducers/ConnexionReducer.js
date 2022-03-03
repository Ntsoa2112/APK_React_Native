const initialState = { user:{ logging:false }}

function ConnexionReducer(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'CHANGE_CONNEXION':
        console.log(action.value)
        if(state != action.value){
          nextState = action.value
        }
        console.log(nextState)
      return nextState || state
  default:
    return state
  }
}

export default ConnexionReducer