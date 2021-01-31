const ADD = "add";
const REMOVE = "remove";
const EDIT = "edit";

//actions
/*export const add = () => ({
  type: ADD,
});

export const remove = () => ({
  type: REMOVE,
});*/

const initialState = {
  lastName: "",
  firstName: "",
  phone: "",
  id: 1,
};

export default (state = initialState, action) => {
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
