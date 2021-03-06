import React from "react";
// import { HomeFillIcon } from "@primer/styled-octicons";
import {
  FcHome,
  FcBusinesswoman,
  FcDocument,
  FcEditImage,
  FcCheckmark,
  FcReading,
} from "react-icons/fc";
export const TsidenavData = [
  {
    title: "Home",
    icon: <FcHome size="2em" />,
    link: "/tadash",
  },

  {
    title: "Students",
    icon: <FcBusinesswoman size="2em" />,
    link: "/tst",
  },
  {
    title: "Assignment",
    icon: <FcDocument size="2em" />,
    link: "/getposts",
  },
  {
    title: "Assignments From Students",
    icon: <FcEditImage size="2em" />,
    link: "/getassignment",
  },
  {
    title: "Evaluate Assignments",
    icon: <FcReading size="2em" />,
    link: "/eval",
  },
  {
    title: "View Reports",
    icon: <FcCheckmark size="2em" />,
    link: "/report_ta",
  },
];
