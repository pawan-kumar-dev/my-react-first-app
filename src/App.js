import logo from "./logo.svg";
import "./App.css";
import React from "react";
import DataFile from "./Data"; //default import
import { Header, Footer } from "./Components"; //named import
import Card from "./Card";
import Form from "./Form";

// Components are of 2 types StateFull(Class Component) and StateLess (Functional component)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      addition: 12,
      sub: 34,
      input: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.input);
  };
  render() {
    const { count, addition, sub } = this.state;
    // map, filter, findIndex, find
    const data = [
      {
        name: "Orange",
        price: "20",
        color: "blue",
      },
      {
        name: "Grapes",
        price: "30",
        color: "red",
      },
      {
        name: "Banana",
        price: "20",
      },
    ];
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
        {data.map(({ name, price, color }) => {
          return <Card name={name} price={price} color={color} key={name} />;
        })}
        {/* <DataFile
          object={count}
          title="Count"
          // text={`${isSubscribed ? "Thanks" : "Welcome user"}`}
        />
        <DataFile object={addition} title="Add" />
        <DataFile object={sub} title="Sub" />
        <Header />
        <Footer /> */}
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={(e) => {
              this.setState({ input: e.target.value });
            }}
          />
          <button type="submit">Submit</button>
        </form> */}
        <Form />
      </React.Fragment>
    );
  }
}

export default App;

// default and named export
// default and named import
