import React, {Component} from "react";
import Table from "./components/Table";
import employees from "./employees.json";


class App extends Component {
  // initial setup of conditions
  state = {
    employees, 
    employeesToShow: [],
    searchWord: "",
  };

  // Reach searchWord input
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // Filtering employee names with searchWord
  handleSubmit = (event) => {
    event.preventDefault();
    const employees = this.state.employees.filter((employee) => {
      return employee.name.includes(this.state.searchWord);
    });
    this.setState({
      employees
    });
  };

  

  render() {
    return (
      <>
      <div className="container">
        <div className="row justify-content-end">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3 searchBar">
              <input 
              type="text"
              name="searchWord"
              value={this.state.searchWord}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Enter Employee name"
              />
              <button 
              className="btn btn-primary searchBtn" 
              type="submit">
                <i class="fa fa-search">
                </i></button>
            </div>
          </form>
        </div>
      </div>

      <table className="table employeeTable">
      {this.state.employees.map((employee) => (
        <Table
          id={employee.id}
          key={employee.id}
          name={employee.name}
          email={employee.email}
          cell={employee.cell}
        />
      ))}
      </table>
      </>
    )
  }
};


export default App;
