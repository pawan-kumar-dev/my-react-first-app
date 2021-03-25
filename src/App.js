import logo from "./logo.svg";
import "./App.css";
import React from "react";
import DataFile from "./Data"; //default import
import { Header, Footer } from "./Components"; //named import

// Components are of 2 types StateFull(Class Component) and StateLess (Functional component)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      addition: 12,
      sub: 34,
    };
  }
  render() {
    const { count, addition, sub } = this.state;
    // map, filter, findIndex, find
    return (
      <React.Fragment>
        <button
          style={{
            color: "red",
            backgroundColor: "blue",
          }}
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Update Count
        </button>
        <button
          onClick={() =>
            this.setState({
              addition: this.state.addition + 10,
            })
          }
        >
          Update addition
        </button>
        <button
          onClick={() =>
            this.setState({
              sub: this.state.sub - 10,
            })
          }
        >
          Update Subtration
        </button>
        <DataFile object={count} title="Count" />
        <DataFile object={addition} title="Add" />
        <DataFile object={sub} title="Sub" />
        <Header />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

// default and named export
// default and named import
