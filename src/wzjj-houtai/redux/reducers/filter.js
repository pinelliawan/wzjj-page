const filter = (state = "", action) => {
  if(action.type === 'CHANGE_FILTER'){
    return action.filter
  }
  return state
}

export default filter
