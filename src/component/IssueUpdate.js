import React, { Component } from "react";

class IssueUpdate extends Component {
  constructor() {
    super();
    this.state = {
      issue: [],
      id: "",
      category: "",
      description: "",
      status: "",
      priority: ""
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  componentDidMount() {}

  render() {
    return (
      // prettier-ignore
      <React.Fragment>
         <form>
          <div className="form-group">
            <label style={{fontWeight: "bold"}}>Defect Catagories: </label>
            <input style={{ width: "40%" }} type="text" className="form-control"
              value={this.state.category}
              id="defCatagory" placeholder="Enter Defect Catagories" name="defCatagory" onChange={this.handleTextChange}/>
          </div>

          <div className="form-group">
            <label style={{fontWeight: "bold"}}>Description:</label>
            <textarea style={{ width: "40%" }} type="text" className="form-control"
              value={this.state.description}
              id="description" placeholder="Enter Description" name="description" onChange={this.handleTextChange}/>
          </div>

          <div>
              <label style={{fontWeight: "bold",alignContent:"space-between"}}>Status:</label>
              <select style={{width:"36%",alignSelf:"right"}} name="status"id="status" value={this.state.status} onChange={this.handleSelectChange}>
                  <option value="">Please Select</option>
                  <option value="New">New</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Need Clarification">Need Clarification</option>
                  <option value="Close">Close</option>
              </select>
          </div>

          <div>
              <label style={{fontWeight: "bold",alignContent:"space-between"}} >Priority:  </label>
              <select style={{width:"35%",alignSelf:"right"}} name="priority"id="priority" vlaue={this.state.priority} onChange={this.handleSelectChange}>
                  <option value="">Please Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
              </select>
          </div>

          <br></br>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create Defect</button>
        </form>
      </React.Fragment>
    );
  }
}

export default IssueUpdate;
