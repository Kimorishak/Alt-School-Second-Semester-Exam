import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      {" "}
      click <NavLink to="/counter">here</NavLink> to go to the counter page
    </div>
  );
}
