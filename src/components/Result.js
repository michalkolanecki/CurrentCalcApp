import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fieldResult: {
    marginTop: 50,
    textAlign: "center",
  },
});

export default function Result({ value }) {
  const classes = useStyles();

  return (
    <div className="Result">
      <div className={classes.fieldResult}>
        <h3>Calculation result</h3>
        <div>Ask value: {value}</div>
        {/* <div>Bid value: {value}</div> */}
      </div>
    </div>
  );
}
