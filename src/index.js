import React from "react";
import ReactDOM from "react-dom";
import Message from "./components/MessageComponent";
import Name from "./components/NamedComponent";
import Age from "./components/AgeComponent";
import Location from "./components/LocationComponent";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
      name: "Craig",
      age: 35,
      location: "Nottinghamshire"
    };
  }

  handleChangeFunction = event => {
    this.setState({
      message: event.target.value
    });
  };
  render() {
    return (
      <div className="App">
        <Message propsMessage={this.state.message} />
        <Name propsName={this.state.name} />
        <Age propsAge={this.state.age} />
        <Location propsLocation={this.state.location} />
        <input
          onChange={this.handleChangeFunction}
          placeholder="type a message"
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
