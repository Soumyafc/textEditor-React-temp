import React from "react";
// import { ReactDOM } from "react";

export default function Practice() {
  return (
    <form>
      <div className="name">
        <label>First name</label>
        <label>second name</label>
      </div>
      <div className="email">
        <label>Email</label>
        <input type="email"/>
        <label>check in</label>
        <input type="date" />
      </div>
    </form>
  );
}
