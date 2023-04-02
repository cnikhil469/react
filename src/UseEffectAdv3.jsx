import { logDOM } from "@testing-library/react";
import React, { useEffect, useState, useTransition } from "react";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export default function UseEffectAdv3() {
  const [mockData, setMockData] = useState([]);
  const [inpData, setInpData] = useState("");
  const [url, setUrl] = useState(URL);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ status: false, msg: "" });

  const fetchApiData = async (apiUrl) => {
    try {
      setIsLoading(true);
      setIsError({ status: false, msg: "" });
      const response = await fetch(apiUrl);
      const { drinks } = await response.json();
      if (drinks !== null) setMockData(drinks);
      setIsLoading(false);
      if (response.status === 404 || drinks === null) {
        throw new Error("Data not found!");
      }
    } catch (error) {
      setIsLoading(false);
      setIsError({
        status: true,
        msg: error.message || "Something went wrong. Please try again later.",
      });
    }
  };

  const changeInpData = () => {
    setUrl(URL + inpData);
  };

  useEffect(() => {
    fetchApiData(url);
  }, [url]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  } else if (isError?.status) {
    return <h3>{isError?.msg}</h3>;
  }
  console.log(mockData);
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={inpData}
        onChange={(e) => {
          setInpData(e.target.value);
        }}
      />
      <button type="submit" onClick={changeInpData}>
        Submit
      </button>
      <h2>MockTail Count: {mockData?.length}</h2>
      <hr />
      <div>
        <h2>Results of the search:</h2>
        <ul>
          {mockData?.map((drink) => {
            const {
              idDrink,
              strDrink,
              strIngredient1,
              strIngredient2,
              strIngredient3,
              ...rest
            } = drink;
            return (
              <li key={idDrink}>
                <h4>Name of the drink: {strDrink}</h4>
                <h5>The list of ingredients:</h5>
                <ul>
                  <li>Ingredient-1: {strIngredient1}</li>
                  <li>Ingredient-2: {strIngredient2}</li>
                  <li>Ingredient-3: {strIngredient3}</li>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
