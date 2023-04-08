import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "DELETE_ITEM") {
    const newList = state.data.filter((item) => {
      return item.id !== action.payload;
    });
    return {
      data: newList,
    };
  }
};

export default function UseReducerFunc() {
  const initialState = {
    data: [
      { id: 1, firstName: "nikhil", lastName: "chappalli" },
      { id: 2, firstName: "sahithya", lastName: "chappalle" },
    ],
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(useReducer(reducer, initialState));
  const handleDelete = (id) => {
    console.log(id);
    dispatch({
      type: "DELETE_ITEM",
      payload: id,
    });
  };

  return (
    <ul>
      <li>
        <h2>Use Reducer Function</h2>
      </li>
      {state.data.map((item) => {
        const { id, firstName, lastName } = item;
        return (
          <li key={id}>
            <h2>{firstName}</h2>
            <h3>{lastName}</h3>
            <button type="submit" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
