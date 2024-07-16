import React from "react";

export default function Employee({ employees, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{employees.name}</td>
      <td>{employees.position}</td>
      <td>{employees.status === "Not Active" ? " " : employees.salary}</td>
      <td>{employees.status}</td>
    </tr>
  );
}
