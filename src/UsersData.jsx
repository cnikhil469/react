import React, { useEffect, useState } from "react";
import useFetch from "./customhooks/useFetch";
import { useParams } from "react-router-dom";
const URL = "https://jsonplaceholder.typicode.com/users";
const UsersData = () => {
  const [data] = useFetch(URL);
  const { userId } = useParams();
  const dataObj = data.find((item) => {
    return item.id == userId;
  });
  if (data.length)
    return (
      <div>
        <h2>The Users Details</h2>
        <h3>The name: {dataObj.name}</h3>
        <h3>The email: {dataObj.email}</h3>
      </div>
    );
};

export default UsersData;
