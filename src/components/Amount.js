import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { FormatAlignJustify } from '@material-ui/icons';

// const BASE_URL = 'http://api.nbp.pl/api/exchangerates/tables/c/2021-06-01/2021-06-30/';

const useStyles = makeStyles({
    fieldForm: {
        marginRight: 50,
    },
    place: {
        display: 'flex'
    },
    btnCalc: {
        width: 150,
        height: 55,

    }
})

export default function Amount() {
    const classes = useStyles();
    return (
        <div className="Amount">
            <div className={classes.place}>
                <form noValidate autoComplete="off">
                    <TextField
                        className={classes.fieldForm}
                        label="Amount"
                        variant="outlined"
                        required
                    />
                    <TextField
                        className={classes.fieldForm}
                        label="Currency select"
                        variant="outlined"
                        required
                    />
                </form>
                <Button
                    onClick={() => console.log('CLIKED')}
                    className={classes.btnCalc}
                    color="primary"
                    type="submit" 
                    variant="contained"
                    size="medium"
                >
                    Calculate
                </Button>
            </div>
        </div>
    );
}