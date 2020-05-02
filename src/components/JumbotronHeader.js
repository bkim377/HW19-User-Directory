import React from "react";
import "./JumbotronHeader.css";

const Jumbotron = () => {
    return( 
    <div className="jumbotron jumbotron-responsive">
        <div className="page-header">
          <h1>Employee Tracker</h1>
          <h4>Click the table headers to order the rows either alphabetically or numerically.</h4>
          <h4>Enter [part of] an employee's name (case sensitive) to filter the table.</h4>
          <h4>Refresh the page after each time you search.</h4>
        </div>
    </div>
    );
};

export default Jumbotron;