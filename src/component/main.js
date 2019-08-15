import React from "react";

class Main extends React.Component {
  render() {
    var issueList = [
      {
        id: 1,
        category: "UI Issue",
        description: "Need CSS in page",
        status: "New",
        priority: 1
      },
      {
        id: 2,
        category: "Data Issue",
        description: "Need Correct data in Order Tables",
        status: "New",
        priority: 1
      },
      {
        id: 3,
        category: "Code Issue",
        description: "Need Correct value in page",
        status: "In Progress",
        priority: 2
      },
      {
        id: 4,
        category: "Code Issue",
        description: "Need to update roles and permissions",
        status: "In Progress",
        priority: 2
      }
    ];
    var rowData = [];
    for (let i = 0; i < issueList.length; i++) {
      var row = (
        <tr>
          <td>{issueList[i].id}</td>
          <td>{issueList[i].category}</td>
          <td>{issueList[i].description}</td>
          <td>{issueList[i].status}</td>
          <td>{issueList[i].priority}</td>
          <td>
            <a href="/">Close Defect</a>
          </td>
        </tr>
      );
      rowData.push(row);
    }
    return (
      <React.Fragment>
        <div style={{ fontWeight: "bold", fontSize: 40 }}>Defect Details</div>
        <div style={{ fontWeight: "normal", fontSize: 20, color: "red" }}>
          Search Results : {rowData.length}
        </div>
        <br />
        <table
          style={{ width: "100%" }}
          className="table table-bordered table-hover"
        >
          <thead className="thead-light">
            <tr className="table-primary">
              <th>Number</th>
              <th>Defect Category</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>{rowData}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Main;
