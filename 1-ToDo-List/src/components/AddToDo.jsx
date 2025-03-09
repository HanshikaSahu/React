import { useState } from "react";
import { MdAddComment } from "react-icons/md";

function AddToDo({onNewItem}){
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNewName = (event) =>{
    setTodoName(event.target.value);
  };

  const handleNewDate = (event) =>{
    setDueDate(event.target.value);
  };

  const handleButtonClicked = () =>{
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

  return(
  <div className="container text-center">
    <div className="row kg-row">
      <div className="col-6">
        <input type="text" placeholder="Enter TODO here"
        value={todoName}
        onChange={handleNewName}
        ></input>
      </div>
      <div className="col-4">
        <input type="date"
        value={dueDate}
        onChange={handleNewDate}
        ></input>
      </div>
      <div className="col-2">
      <button type="button"
       className="btn  btn-success kg-btn"
        onClick={handleButtonClicked}>
          <MdAddComment />
        </button>
      </div>
    </div>
  </div>
    )
}
export default AddToDo;