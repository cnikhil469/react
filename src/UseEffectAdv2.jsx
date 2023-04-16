import React, { useEffect, useState } from "react";

export default function UseEffectAdv2() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ isError: false, msg: "" });

  const fetchApiResponse = async (apiUrl) => {
    try {
      setIsLoading(true);
      setIsError({ isError: false, msg: "" });
      const apiResponse = await fetch(apiUrl);
      const data = await apiResponse.json();
      setUsersData(data);
      setIsLoading(false);
      if (apiResponse.status === 404) {
        throw new Error("Data not found!");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError({
        isError: true,
        msg: error.message || "Something went wrong. Please try again later!",
      });
    }
  };
  useEffect(() => {
    fetchApiResponse(apiUrl);
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2 className="loading-icon">It's Loading...</h2>
      </div>
    );
  } else if (isError.isError) {
    return (
      <div>
        <h2 className="error-load">{isError.msg}</h2>
      </div>
    );
  }
  return (
    <div>
      <ul>
        {usersData.map((user) => {
          const { id, name, username, email, ...rest } = user;
          return (
            <li key={id}>
              <h3>Name: {name}</h3>
              <h4>UserName: {username}</h4>
              <h4>Email ID: {email}</h4>
              <h4>From: {rest.address.city}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
