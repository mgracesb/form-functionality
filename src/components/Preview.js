import React from "react";

const Preview = (props) => {
  return (
    <div className="box3">
      <p>
        {props.name}
        <br />
        {props.job}
        <br />
        {props.description}
      </p>
    </div>
  );
};

export default Preview;
