import React from "react";
import useFetch from "./customhooks/useFetch";
const URL = "https://jsonplaceholder.typicode.com/posts";
const UseFetchImpl = () => {
  const [data, loading, error] = useFetch(URL);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Something went wrong!!!</h2>;
  }
  return (
    <div>
      <ul>
        {data.map((userItem) => {
          return <li key={userItem.id}>{userItem.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseFetchImpl;
