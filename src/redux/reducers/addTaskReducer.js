import ADD_TASK from "../actions";
import { DELETE_TASK } from "../actions";

let initialState = {
  tasks: [],
};

function addTaskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return { tasks: [...state.tasks, action.payload] };

    case DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task !== action.payload),
      };

    default:
      return state;
  }
}

export default addTaskReducer;
