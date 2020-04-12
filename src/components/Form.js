import React from "react";

const Form = (props) => {
  const updateInfo = (evt) => {
    const inputName = evt.target.name;
    const inputValue = evt.target.value;

    props.changeInputValue(inputName, inputValue);
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        className="name"
        id="name"
        value={props.name}
        placeholder="Name"
        onChange={updateInfo}
      />
      <label htmlFor="job">Job</label>
      <input
        type="text"
        name="job"
        className="job"
        id="job"
        value={props.job}
        placeholder="Job"
        onChange={updateInfo}
      />
      <label htmlFor="descripion">Description</label>
      <input
        type="text"
        name="description"
        className="description"
        id="description"
        value={props.description}
        placeholder="Description"
        onChange={updateInfo}
      />
    </form>
  );
};

export default Form;
