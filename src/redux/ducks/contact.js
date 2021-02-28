//constants action types
const ADD = "add";
const REMOVE = "remove";
const EDIT = "edit";

//reducer
export default (state = { contacts: [] }, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case REMOVE:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contacts) => contacts.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
