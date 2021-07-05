import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  fieldForm: {
    marginRight: 50,
  },
});

export default function CurrencyValue({ onChange }) {
  const classes = useStyles();
  const [value, setValue] = useState("");

  return (
    <div className="CurrencyValue">
      <TextField
        autoComplete="off"
        className={classes.fieldForm}
        label="Amount value"
        variant="outlined"
        required
        type="number"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          onChange(event.target.value);
        }}
      />
    </div>
  );
}