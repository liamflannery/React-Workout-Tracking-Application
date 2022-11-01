
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState} from 'react';
import { Component } from "react";
import Excercises from "./Excercise";


class DayPage extends Component {
   
  constructor(props) {
    super(props);
    this.state = { expandedRows: [] };
  }

  handleExpand = Excercise => {
    let newExpandedRows = [...this.state.expandedRows];
    let allExpanded = this.state.allExpanded;
    let idxFound = newExpandedRows.findIndex(id => {
      return id === Excercise.id;
    });

    if (idxFound > -1) {
      console.log("Collapsing " + Excercise.Workout + " " + idxFound);
      newExpandedRows.splice(idxFound, 1);
    } else {
      console.log("Expanding " + Excercise.Workout);
      newExpandedRows.push(Excercise.id);
    }

    console.log("Expanded rows");
    console.log(newExpandedRows);

    this.setState({ expandedRows: [...newExpandedRows] });
  };

  isExpanded = Excercise => {
    const idx = this.state.expandedRows.find(id => {
      return id === Excercise.id;
    });

    return idx > -1;
  };

  expandAll = Excercises => {
    console.log("ExapndedRows: " + this.state.expandedRows.length);
    console.log("Excercises:      " + Excercises.length);
    if (this.state.expandedRows.length === Excercises.length) {
      let newExpandedRows = [];
      this.setState({ expandedRows: [...newExpandedRows] });
      console.log("Collapsing all...");
    } else {
      let newExpandedRows = Excercises.map(Excercise => Excercise.id);
      this.setState({ expandedRows: [...newExpandedRows] });
      console.log("Expanding all...");
      console.log("Expanded rows " + newExpandedRows.length);
    }
  };

  getRows = Excercise => {
    let rows = [];
    const projects = Excercise.projects || [];

    const firstRow = (
      <tr>
        <td>{Excercise.Workout}</td>
        
        <td>
          {projects.length > 0 && (
            <button onClick={() => this.handleExpand(Excercise)}>
              {this.isExpanded(Excercise) ? "-" : "+"}
            </button>
          )}
        </td>
      </tr>
    );

    rows.push(firstRow);

    if (this.isExpanded(Excercise) && projects.length > 0) {
      const projectRows = projects.map(project => (
        <tr className="Excercise-details">
          <td className="Excercise-details" />
          <td colspan="3" className="Excercise-details">
            <br />
            <div className="attribute">
              <div className="attribute-name">Reps: 8 </div>
             

              <div className="attribute-value">{project.weight}</div>
              <input type="checkbox" />
            </div>
            <br />
          </td>
        </tr>
      ));

      rows.push(projectRows);
    }

    return rows;
  };

  getExcerciseTable = Excercises => {
    const ExcerciseRows = Excercises.map(Excercise => {
      return this.getRows(Excercise);
    });

    return (
     
      
      <table className="my-table">
        <h1>Day 1</h1>
        <tr>
          <th>Excercises</th>
          
          
          <th onClick={() => this.expandAll(Excercises)}>
            <button>
              {Excercises.length === this.state.expandedRows.length ? "-" : "+"}
            </button>
          </th>
        </tr>
        {ExcerciseRows}
      </table>
    );
  };

  render() {
    return <div>{this.getExcerciseTable(Excercises)}</div>;
  }
}




export default DayPage