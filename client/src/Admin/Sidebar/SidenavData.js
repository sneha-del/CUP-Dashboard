import React from "react";
// import { HomeFillIcon } from "@primer/styled-octicons";
import { FcHome } from "react-icons/fc";
import {
  FcConferenceCall,
  FcBusinesswoman,
  FcCheckmark,
  FcDocument,
} from "react-icons/fc";
export const SidenavData = [
  {
    title: "Home",
    icon: <FcHome size="2em" />,
    link: "/admindash",
  },
  {
    title: "Teaching Assistants",
    icon: <FcConferenceCall size="2em" />,
    link: "/ta",
  },
  {
    title: "Students",
    icon: <FcBusinesswoman size="2em" />,
    link: "/st",
  },
  {
    title: "Assignment",
    icon: <FcDocument size="2em" />,
    link: "/posts",
  },
  {
    title: "View Reports",
    icon: <FcCheckmark size="2em" />,
    link: "/report_admin",
  },
];
