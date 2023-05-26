import * as actionTypes from "../actions/actionTypes";

// initialstate
const initialState = {
  items: [],
  title: "",
  item: "",
  edit: false,
};

// function for todolist
const items = (state = initialState, action) => {
  switch (action.type) {
    // reducer for add item 
    case actionTypes.ADD_ITEM:
      const newitem = {
        id: Date.now(),
        value: state.title,
        completed: false,
      };
      return {
        ...state,
        items: state.items.concat(newitem),
        title: "",
      };
    
    // recuder for edit item
    case actionTypes.EDIT_ITEM:
      var newList = [...state.items];
      var index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].value = state.title;
        return {
          ...state,
          title: "",
          edit: false,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }

    // recuder for delete item
    case actionTypes.DELETE_ITEM:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList.splice(index, 1);
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    
    // reducer for set title item
    case actionTypes.SET_TITLE:
      return {
        ...state,
        title: action.title,
      };

    // reducer for set item
    case actionTypes.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    // reducer for set complete item
    case actionTypes.SET_COMPLETED:
      newList = [...state.items];
      index = newList.indexOf(state.item);
      if (index !== -1) {
        newList[index].completed = !state.item.completed;
        return {
          ...state,
          items: newList,
        };
      } else {
        return {
          ...state,
        };
      }
    
    // reducer set edited item
    case actionTypes.SET_EDIT:
      return {
        ...state,
        edit: true,
      };
    default:
      return state;
  }
};

export default items;
