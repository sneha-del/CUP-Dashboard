import React from "react";
import { TsidenavData } from "../sidebar/TsidenavData";
import "bootstrap/dist/css/bootstrap.css";

import { useHistory } from "react-router";
const TSidebar = () => {
  const history = useHistory();
  return (
    <>
      <div className="Tsidebar">
        <ul className="ul">
          {TsidenavData.map((val, key) => {
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

export default TSidebar;
