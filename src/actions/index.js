import * as actionTypes from "./actionTypes";

// action for adding item
export const addItem = () => {
  return {
    type: actionTypes.ADD_ITEM,
  };
};

// action for edit item
export const editItem = (item) => {
  return {
    type: actionTypes.EDIT_ITEM,
    item: item,
  };
};

// action for delete item
export const deleteItem = (item) => {
  return {
    type: actionTypes.DELETE_ITEM,
    item: item,
  };
};

// action for add and edit to set title item
export const setTitle = (title) => {
  return {
    type: actionTypes.SET_TITLE,
    title: title,
  };
};

// action for set item
export const setItem = (item) => {
  return {
    type: actionTypes.SET_ITEM,
    item: item,
  };
};

// action for set edit an item
export const setEdit = () => {
  return {
    type: actionTypes.SET_EDIT,
  };
};

// action for set completed item
export const setCompleted = () => {
  return {
    type: actionTypes.SET_COMPLETED,
  };
};
