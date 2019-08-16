import React, { Component } from "react";

class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.category}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.status}</td>
        <td>{this.props.obj.priority}</td>
        <td>
          <a href="/">Close Defect</a>
        </td>
      </tr>
    );
  }
}

export default TableRow;
