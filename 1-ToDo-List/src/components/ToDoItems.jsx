import { useState } from "react";
import TodoItem from "./ToDoItem";
import styles from "./ToDoItems.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = ({todoItems, onDeleteClick}) => {
  
  const TodoItemsFromContext = useState(TodoItemsContext);

  return(
    <div className={styles.todoContainer}>
      {todoItems.map((item) => (
        <TodoItem key = {item.name} 
        todoDate = {item.duedate}
         todoName = {item.name} 
         onDeleteClick = {onDeleteClick}>
         </TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;