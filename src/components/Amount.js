import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectCurrency from './SelectCurrency';
import CurrencyValue from './CurrencyValue';
import SetDate from './SetDate';

const useStyles = makeStyles({
    btnCalc: {
        width: 150,
        height: 55,
    },
    paperElem: {
        boxShadow: 'none',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 50,
    },
})

function zero(number) {
    return number=(number < 10)? "0"+number : number;
}
const currentDate = new Date();
const dateFormat = currentDate.getFullYear()+'-'+(zero(currentDate.getMonth()+1))+'-'+zero(currentDate.getDate());
const baseUrl = `http://api.nbp.pl/api/exchangerates/tables/c/`;

// ${dateFormat}

export default function Amount() {

    const classes = useStyles();

    const [currencyOption, setCountryCurrency] = useState([]);
    console.log(currencyOption);

    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            setCountryCurrency([data.base, data[0].rates.map((e) => e.code)])
        })
    }, [])
    
    return (
        <div className="Amount">
            <form noValidate autoComplete="off">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>
                            <CurrencyValue />
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>
                            <SelectCurrency 
                                currencyOption={currencyOption}
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>
                            <SetDate />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Button
                            className={classes.btnCalc}
                            color="primary"
                            type="submit" 
                            variant="contained"
                            size="medium"
                        >
                            Calculate
                    </Button>
                </Grid>
            </form>
        </div>
    );
}