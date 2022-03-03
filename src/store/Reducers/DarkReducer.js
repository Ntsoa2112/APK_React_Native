const initialState = { color:{
  bgColor:"white",
  textColor:"#fff"
}}
//rgb(41, 43, 44)
function DarkReducer(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'CHANGE_DARK':
        if(state != action.value){
          nextState = action.value
        }
      return nextState || state
  default:
    return state
  }
}

export default DarkReducer