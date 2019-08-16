import React from "react";
import axios from "axios";
import TableRow from "./TableRow";
//const API_URL1 = "http://jsonplaceholder.typicode.com";
const API_URL = "http://localhost:9999";

class Main extends React.Component {
  state = {
    issue: []
  };

  componentDidMount() {
    const url = `${API_URL}/getIssues`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ issue: data });
        console.log(this.state.issue);
      });
  }

  tabRow() {
    return this.state.issue.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    // var issueList = [
    //   {
    //     id: 1,
    //     category: "UI Issue",
    //     description: "Need CSS in page",
    //     status: "New",
    //     priority: 1
    //   },
    //   {
    //     id: 2,
    //     category: "Data Issue",
    //     description: "Need Correct data in Order Tables",
    //     status: "New",
    //     priority: 1
    //   },
    //   {
    //     id: 3,
    //     category: "Code Issue",
    //     description: "Need Correct value in page",
    //     status: "In Progress",
    //     priority: 2
    //   },
    //   {
    //     id: 4,
    //     category: "Code Issue",
    //     description: "Need to update roles and permissions",
    //     status: "In Progress",
    //     priority: 2
    //   }
    // ];
    //var rowData = [];
    // for (let i = 0; i < issueList.length; i++) {
    //   var row = (
    //     <tr>
    //       <td>{issueList[i].id}</td>
    //       <td>{issueList[i].category}</td>
    //       <td>{issueList[i].description}</td>
    //       <td>{issueList[i].status}</td>
    //       <td>{issueList[i].priority}</td>
    //       <td>
    //         <a href="/">Close Defect</a>
    //       </td>
    //     </tr>
    //   );
    //   rowData.push(row);
    // }

    return (
      <React.Fragment>
        <div style={{ fontWeight: "bold", fontSize: 40 }}>Defect Details</div>
        <div style={{ fontWeight: "normal", fontSize: 20, color: "red" }}>
          Search Results : {this.state.issue.length}
        </div>
        <br />
        <table
          style={{ width: "100%" }}
          className="table table-bordered table-hover"
        >
          <thead className="thead-light">
            <tr className="table-primary">
              <th>Ticket Number</th>
              <th>Defect Category</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Change Status</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Main;
