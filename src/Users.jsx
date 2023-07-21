import React from "react";
import useFetch from "./customhooks/useFetch";
import { Link } from "react-router-dom";
const URL = "https://jsonplaceholder.typicode.com/users";

const Users = () => {
  const [data] = useFetch(URL);
  return (
    <div>
      {data.map((dataObj) => {
        const { id, name, email } = dataObj;
        return (
          <div className="users-card" key={id}>
            <Link to={`/users/${id}`}>
              <article>
                <h2>{name}</h2>
                <h3>{email}</h3>
              </article>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
