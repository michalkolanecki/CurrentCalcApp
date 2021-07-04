import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    fieldForm: {
        marginRight: 50,
    },
})

export default function CurrencyValue() {

    const classes = useStyles();
    
    return (
        <div className="CurrencyValue">
            <TextField
                autoComplete='off'
                className={classes.fieldForm}
                label="Amount value"
                variant="outlined"
                required
                type="number"
            />            
        </div>
    );
}