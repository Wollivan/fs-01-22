import { Component } from "react";
import Square from "./Square";
import "./row.css";

class Row extends Component {
  render() {
    const startingNumber = props.index * 3;

    return (
      <div className="row">
        <Square value={startingNumber + 1} />
        <Square value={startingNumber + 2} />
        <Square value={startingNumber + 3} />
      </div>
    );
  }
}

export default Row;
