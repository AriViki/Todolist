import { React } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as actionTypes from "./actions";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";

function App({
  title,
  addItem,
  editItem,
  edit,
  setCompleted,
  todoList,
  setTitle,
  setItem,
  setEdit,
  deleteItem,
}) {

  const [filter, setFilter] = useState("")
  const todoListWithFilter = todoList.filter((listTerfilter)=>{
    if (filter === ""){
      return listTerfilter
    } else if (filter === "active" && listTerfilter.completed === false){
      return listTerfilter
    } else if (filter === "completed" && listTerfilter.completed === true){
      return listTerfilter
    }
  });

  const handleEdit = (item) => {
    setTitle(item.value);
    setEdit();
    setItem(item);
  };

  const handleDelete = (item) => {
    setItem(item);
    deleteItem();
  };

  const handleChange = (event) => {
    const title = event.target.value;
    setTitle(title);
  };

  const handleClick = () => {
    if (title.length === 0) {
      return;
    }
    if (edit) {
      editItem();
    } else {
      addItem();
    }
  };

  const handleComplete = (item) => {
    setItem(item);
    setCompleted();
  };

  console.log(todoList)
  return (
    <>
      <h1>Ari Viki F - Todo List</h1>
      <TextField
        id="outlined-basic"
        variant="outlined"
        value={title}
        onChange={handleChange}
        placeholder="What to do?"
      />
      <Button id="addButton" onClick={handleClick}>{edit ? "Edit" : "Add"}</Button>
      <div id="filter">
        <Button onClick={()=>setFilter("")}>All</Button>
        <Button onClick={()=>setFilter("active")}>Active</Button>
        <Button onClick={()=>setFilter("completed")}>Completed</Button>
      </div>
      <List>
        {todoListWithFilter &&
          todoListWithFilter.map((item) => {
            return (
              <ListItem key={item.id} id="listItem">
                <ListItemIcon>
                  <IconButton onClick={() => handleComplete(item)}>
                    {!item.completed &&(<CheckBoxOutlineBlankIcon color="success" />)}
                    {item.completed  && <CheckBoxIcon color="success"/>}
                  </IconButton>
                </ListItemIcon>

                <ListItemText primary={item.value} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(item)}
                  >
                    <ModeEditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
      </List>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    edit: state.edit,
    title: state.title,
    todoList: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: () => dispatch(actionTypes.addItem()),
    deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
    editItem: () => dispatch(actionTypes.editItem()),
    setEdit: () => dispatch(actionTypes.setEdit()),
    setCompleted: () => dispatch(actionTypes.setCompleted()),
    setItem: (item) => dispatch(actionTypes.setItem(item)),
    setTitle: (title) => dispatch(actionTypes.setTitle(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
