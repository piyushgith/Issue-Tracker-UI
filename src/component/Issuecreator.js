import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Issuecreator extends React.Component {
  render() {
    return (
      // prettier-ignore
      <React.Fragment>
         <form>
          <div className="form-group">
            <label>Defect Catagories: </label>
            <input style={{ width: "40%" }} type="text" className="form-control"
              //   value={this.state.name}
              id="name" placeholder="Enter Defect Catagories" name="name"
              onChange={this.setEmpState}/>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea style={{ width: "40%" }} type="text" className="form-control"
              //value={this.state.name}
              id="name" placeholder="Enter Description" name="name" onChange={this.setEmpState}/>
          </div>

          <div className="form-group">
            <label>Priority</label>
            <input style={{ width: "40%" }} type="text" className="form-control"
              //value={this.state.name}
              id="name" placeholder="Enter Priority" name="name" onChange={this.setEmpState}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Create Defect</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Issuecreator;
