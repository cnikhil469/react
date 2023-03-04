import React, { useState } from "react";
import "./forms.scss";

const Todo = () => {
  const [todoVal, setTodoVal] = useState("");
  const [editMsgId, setEditMsgId] = useState();
  const [editMessage, setEditMessage] = useState("");
  const [listArr, setListArr] = useState([]);
  const [msgChanged, setMsgChanged] = useState(false);
  const addIntoTodo = () => {
    let todo = { message: todoVal, id: new Date().getTime().toString() };
    setListArr([...listArr, todo]);
    setTodoVal("");
  };
  const deleteTodo = (id) => {
    let newListArr = listArr.filter((item) => {
      return item.id !== id;
    });
    setListArr(newListArr);
  };
  const editTodo = (id) => {
    listArr.map((item) => {
      if (item.id === id) {
        setEditMessage(item.message);
      }
    });
  };
  const changeMessage = (id) => {
    for (var i = 0; i < listArr.length; i++) {
      if (listArr[i].id === id) {
        listArr[i].message = editMessage;
      }
    }
  };
  return (
    <div className="container">
      <textarea
        type="text"
        name="todo"
        id="todo"
        placeholder="Enter the task"
        value={todoVal}
        onChange={(e) => {
          setTodoVal(e.target.value);
        }}
        className="input-task"
      />
      <button type="submit" onClick={addIntoTodo} className="submit-btn">
        Submit
      </button>
      <hr />
      <ul className="list-item-container">
        {listArr.length == 0 && <h1>No items in the list</h1>}
        {listArr.map((eachTodo) => {
          if (eachTodo.id === editMsgId) changeMessage(editMsgId);
          return (
            <>
              <hr />
              <li key={eachTodo.id}>
                {(msgChanged ? eachTodo.id !== editMsgId : true) && (
                  <span>{eachTodo.message}</span>
                )}
                {eachTodo.id == editMsgId && msgChanged && (
                  <textarea
                    type="text"
                    name="todo"
                    id="todo"
                    value={editMessage}
                    onChange={(e) => {
                      setEditMessage(e.target.value);
                    }}
                  />
                )}
                <button
                  type="submit"
                  onClick={() => {
                    editTodo(eachTodo.id);
                    setEditMsgId(eachTodo.id);
                    setMsgChanged(!msgChanged);
                    changeMessage(eachTodo.id);
                  }}
                >
                  {(msgChanged ? eachTodo.id === editMsgId : false)
                    ? "Ok"
                    : "Edit"}
                </button>
                <button type="submit" onClick={() => deleteTodo(eachTodo.id)}>
                  Mark as complete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
