import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/ToDoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./components/Welcome";
// import TodoItem from "./components/ToDoItem";
import { TodoItemsContext } from "./store/todo-items-store";

function App(){
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDate) =>{
    setTodoItems((currValue) => {
      const newTodoItems = [...currValue, 
        {name: itemName, duedate: itemDate}
      ];
      return newTodoItems;
    }); 
  };

  const handleDeleteItem = (todoItemName) =>{
    setTodoItems((currValue) => {
      const newTodoItems = currValue.filter((item) => item.name !== todoItemName);
      return newTodoItems;
    });
  };


  return( 
  <TodoItemsContext.Provider value={[]}> 
  <center className="todo-container">
    <AppName/>
    <AddToDo onNewItem = {handleNewItem}></AddToDo>
    <Welcome todoItems={todoItems}></Welcome>
    <TodoItems todoItems={todoItems}
    onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  </TodoItemsContext.Provider>
  );
}

export default App;