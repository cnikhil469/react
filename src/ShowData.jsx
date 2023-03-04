import React, { useState } from "react";

function ShowData() {
  const [showData, setShowData] = useState(false);
  const displayData = () => {
    setShowData(!showData);
  };
  return (
    <div>
      <button onClick={displayData}>{showData ? "Hide" : "Show"}</button>
      {showData && (
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor
          quo pariatur id consequuntur necessitatibus inventore perferendis
          minima? Blanditiis maxime quod voluptate obcaecati numquam minima
          nesciunt laboriosam odio ipsa! Dolore.
        </div>
      )}
    </div>
  );
}

export default ShowData;
