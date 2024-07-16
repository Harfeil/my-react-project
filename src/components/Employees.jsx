import React from "react";
import Employee from "./Employee";

export default function Employees() {
  const employees = [
    { name: "Harfeil", position: "Developer", salary: 10600, status: "Active" },
    {
      name: "Hardeil",
      position: "Developer",
      salary: 10200,
      status: "Active",
    },
    {
      name: "Hariell",
      position: "Developer",
      salary: 10500,
      status: "Active",
    },
    {
      name: "Harniel",
      position: "Developer",
      salary: 15000,
      status: "Not Active",
    },
    {
      name: "Jeremy",
      position: "Designer",
      salary: 7000,
      status: "Active",
    },
    { name: "Zayne", position: "Designer", salary: 8800, status: "Active" },
    { name: "Mike", position: "Manager", salary: 90000, status: "Active" },
    { name: "Rexy", position: "Manager", salary: 80000, status: "Active" },
    {
      name: "Ericson",
      position: "Manager",
      salary: 20000,
      status: "Active",
    },
    {
      name: "Ryan",
      position: "Designer",
      salary: 20000,
      status: "Not Active",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Employee Names</th>
          <th>Position</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <Employee key={index} index={index} employees={employee} />
        ))}
      </tbody>
    </table>
  );
}
