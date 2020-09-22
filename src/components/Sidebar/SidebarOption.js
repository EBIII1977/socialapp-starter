import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";


function SidebarOption({ active, text, Icon, path }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      <Icon />
      <Link to={path}>{text}</Link>
    </div>
  );
}

export default SidebarOption;
