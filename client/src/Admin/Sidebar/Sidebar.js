import React from "react";
import { SidenavData } from "../Sidebar/SidenavData";
import "bootstrap/dist/css/bootstrap.css";

import { useHistory } from "react-router";
const Sidebar = () => {
  const history = useHistory();
  return (
    <>
      <div className="sidebar">
        admin
        <ul>
          {SidenavData.map((val, key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
