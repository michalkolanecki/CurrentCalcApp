import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SelectCurrency from "./SelectCurrency";
import CurrencyValue from "./CurrencyValue";
import Result from "./Result";

const useStyles = makeStyles({
  btnCalc: {
    width: 150,
    height: 55,
  },
  paperElem: {
    boxShadow: "none",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 50,
  },
});

const baseUrl = `http://api.nbp.pl/api/exchangerates/tables/c/`;

export default function Amount() {
  const classes = useStyles();

  const [currencyOption, setCurrencyOption] = useState([]);
  const [selectedCurrency, setselectedCurrency] = useState({});
  const [ammount, setAmmount] = useState("");
  const [resultValue, setResultValue] = useState("");

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        const currencyData = data[0].rates.map((e, index) => ({
          id: index,
          value: e.ask,
          code: e.code,
        }));
        setCurrencyOption(currencyData);
        setselectedCurrency(currencyData[0]);
      });
  }, []);

  const onSelectedCurrencyChange = (value) => {
    const [selectedCurrency] = currencyOption.filter(
      (currency) => currency.code === value
    );

    setselectedCurrency(selectedCurrency);
  };

  const calculate = (ammount, exchangeRate) => {
    return ammount * exchangeRate;
  };

  return (
    <div className="Amount">
      <form noValidate autoComplete="off">
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm={4} md={4} lg={4}>
            <Paper className={classes.paperElem}>
              <CurrencyValue onChange={setAmmount} />
            </Paper>
          </Grid>
          <Grid item sm={4} md={4} lg={4}>
            <Paper className={classes.paperElem}>
              <SelectCurrency
                selectedCurrency={selectedCurrency}
                currencyOption={currencyOption}
                onSelectedCurrencyValueChange={onSelectedCurrencyChange}
              />
            </Paper>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button
            className={classes.btnCalc}
            color="primary"
            variant="contained"
            size="medium"
            onClick={() =>
              setResultValue(calculate(ammount, selectedCurrency.value))
            }
          >
            Calculate
          </Button>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          <Result value={resultValue} />
        </Grid>
      </form>
    </div>
  );
}
