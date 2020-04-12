import React from "react";

const Preview = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.job}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Preview;
