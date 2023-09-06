import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.loader}>
      <div className={classes.box1} />
      <div className={classes.box2} />
      <div className={classes.box3} />
    </div>
  );
}

export default Loader;
