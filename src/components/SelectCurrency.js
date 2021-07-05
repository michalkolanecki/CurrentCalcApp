import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  input: {
    borderRadius: 4,
    border: "1px solid #ced4da",
    width: 150,
    height: 55,
  },
});

export default function SelectCurrency({
  currencyOption,
  selectedCurrency,
  onSelectedCurrencyValueChange,
}) {
  const classes = useStyles();
  const [currency, setCurrency] = useState(selectedCurrency.code);

  const handleChange = (event) => {
    setCurrency(event.target.value);
    onSelectedCurrencyValueChange(event.target.value);
  };
  return (
    <div className="SelectCurrency">
      <FormControl className={classes.input}>
        <InputLabel id="currency-label">Currency select</InputLabel>
        <Select
          native
          labelId="currency-label"
          value={currency}
          onChange={handleChange}
          required
          min="0"
        >
          {currencyOption.map((option) => (
            <option key={option.id} value={option.code}>
              {option.code}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}