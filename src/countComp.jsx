import React from "react";

const Count = (props) => {
  const { title, number } = props;
  return (
    <div>
      <span>
        The {title} is {number}
      </span>
    </div>
  );
};

export default React.memo(Count);
