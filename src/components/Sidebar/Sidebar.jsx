import React from "react";
import "./style.css";
import SidebarItem from "../SidebarItem";

const Sidebar = ({ opened }) => {

  return (
    <div className={`sidebar ${opened ? "opened" : "closed"}`}>
      <ul>
        <SidebarItem url="/">
          <span className="material-icons">
            home
          </span>
          Home
        </SidebarItem>
        <SidebarItem url="/users">
            <span className="material-icons">
            group_add
            </span>
            Users
        </SidebarItem>
        <SidebarItem url="/bets">
            <span className="material-icons">
            casino
            </span>
            Manage Bets
        </SidebarItem>
      </ul>
      <hr />
    </div>
  );
};

export default Sidebar;