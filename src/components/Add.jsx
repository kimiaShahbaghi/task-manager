import { Icon } from "@material-ui/core";
import React from "react";

const Add = (props) => {
  const addText =
    props.text === "list" ? "Add another list" : "Add another Card";
  return (
    <div>
      <span> + </span>
      <span> {addText}</span>
    </div>
  );
};

export default Add;
