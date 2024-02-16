import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/action-types";
const initialstate = [];
const todoReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("adding task......");
      console.log(action.payload);
      return [...state, action.payload];
    case DELETE_TODO:
      const newstate = state.filter((task) => task.id !== action.payload);
      return newstate;
    case UPDATE_TODO:
      const updatestate = state.map((task) => {
        if (task.id == action.payload.todoId) {
          task.title = action.payload.todo.title;
          task.descriptions = action.payload.todo.title;
        }
        return task;
      });
      return updatestate;

    default:
      return state;
  }
};

export default todoReducer;
