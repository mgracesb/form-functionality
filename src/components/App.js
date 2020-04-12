import React from "react";
import "../App.css";
import Form from "./Form";
import Preview from "./Preview";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeInputValue = this.changeInputValue.bind(this);
    this.resetEverything = this.resetEverything.bind(this);
    this.state = { name: "", job: "", description: "" };
    this.startPoint = this.state;
  }

  changeInputValue(inputName, inputValue) {
    this.setState((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  }

  resetEverything() {
    this.setState(this.startPoint);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="box">
          <Form
            name={this.state.name}
            job={this.state.job}
            description={this.state.description}
            changeInputValue={this.changeInputValue}
          />
          <button
            type="button"
            className="resetForm"
            onClick={this.resetEverything}
          >
            Reset
          </button>
        </div>
        <Preview
          name={this.state.name}
          job={this.state.job}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
