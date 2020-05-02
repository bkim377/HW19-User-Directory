import React, {Component} from "react";
import Jumbotron from "./components/JumbotronHeader.js"
import Table from "./components/EmployeeTable";
import employees from "./employees.json";
import "./App.css";
import "./components/JumbotronHeader.css";

class App extends Component {
  // initial setup of conditions
  state = {
    employees, 
    searchWord: ""
  };

  // Reach the searchWord input
  handleChange = (e) => {
   this.setState({
     searchWord: e.target.value
   })
}

  // Filtering employee names with searchWord
  handleSubmit = (event) => {
    event.preventDefault();
    // takes search bar input and filters the table accordingly
    const employees = this.state.employees.filter((employee) => {
      return employee.name.includes(this.state.searchWord);
    });
    this.setState({
      employees
    });
  };

  // function to sort table columns when you click on the headers
  sortColumns = (columnName) => {
    const employees = this.state.employees.sort(function (a,b) {
      // reorders the table rows based on which header you click
      var nameA = a[columnName];
      var nameB = b[columnName];
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
    });
    this.setState({ 
      employees 
    });
  }

  // render() the entire web page
  render() {
    return (
      <>
      <Jumbotron />
      <div className="container">
        <div className="row row justify-content-end">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3 searchBar">
              <input 
                type="text"
                name="searchWord"
                value={this.state.searchWord}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Enter a Name to search"
              />
              <button className="searchButton" type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>

      <table className="table employeeTable">
        <tr>
          <th className="tableHeader" onClick={() => this.sortColumns("id")}>
            <button className="tableHeaderButton">ID #</button>
          </th>
          <th className="tableHeader" onClick={() => this.sortColumns("name")}>
            <button className="tableHeaderButton">Name</button>
          </th>
          <th className="tableHeader" onClick={() => this.sortColumns("email")}>
            <button className="tableHeaderButton">Email</button>
          </th>
          <th className="tableHeader" onClick={() => this.sortColumns("cell")}>
            <button className="tableHeaderButton">Phone Number</button>
          </th>
        </tr>
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
