// Data Table

// Given a list of users, build a users data table that displays users in a paginated format.

// Requirements
// Table requirements
// The users data table should display the following columns: Id, Name, Age, Occupation
// Each row in the table represents a single user
// Pagination requirements
// The pagination controls should allow the user to navigate to previous and next pages
// The pagination controls should display the current page number and the total number of pages
// The table should update dynamically when the user navigates to a different page
// Provide an option to select the number of users displayed per page (e.g., 5, 10, 20)

import "./styles.css";
import React, { useEffect, useState } from "react";
import users from "./data.json";

export default function App() {
  const [currPage, setCurrPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [pageData, setPageData] = useState([]);

  let len = users.length;

  const paginateUsers = (pSize) => {
    setPageSize(pSize);
    let start = pSize * (currPage - 1);
    let end = Math.min(start + pSize, len);
    setPageData(users.slice(start, end));
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setCurrPage(1);
  };

  useEffect(() => {
    paginateUsers(pageSize);
  }, [currPage, pageSize]);

  return (
    <div>
      <h2>Users table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {pageData
            .filter((user) => users.length)
            .map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="paginationRow">
        <select type="number" value={pageSize} onChange={handlePageSizeChange}>
          <option value={5}>Show 5</option>
          <option value={10}>Show 10</option>
          <option value={15}>Show 15</option>
        </select>
        <button
          disabled={currPage === 1}
          onClick={() => setCurrPage((prevVal) => prevVal - 1)}
        >
          Prev
        </button>
        <span>
          Page {currPage} of {Math.ceil(len / pageSize)}
        </span>
        <button
          disabled={currPage === Math.ceil(len / pageSize)}
          onClick={() => setCurrPage((prevVal) => prevVal + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
