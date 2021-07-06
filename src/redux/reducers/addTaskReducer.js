import ADD_TASK from "../actions";

function addTaskReducer(state = "", action) {
  switch (action.type) {
    case ADD_TASK:
      state = action.payload;
      return state;

    default:
      return null;
  }
}

export default addTaskReducer;
