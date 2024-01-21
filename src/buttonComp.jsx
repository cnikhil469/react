import React from "react";
const Button = (props) => {
  const { incrFunction } = props;
  return <button onClick={incrFunction}>Increment button</button>;
};
export default React.memo(Button);
