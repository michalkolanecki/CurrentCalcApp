import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    fieldForm: {
        marginRight: 50,
    },
})

function zero(number) {
    return (number = number < 10 ? "0" + number : number);
};

const currentDate = new Date();
const dateFormat =
  currentDate.getFullYear() +
  "-" +
  zero(currentDate.getMonth() + 1) +
  "-" +
  zero(currentDate.getDate());

export default function SetDate() {

    const classes = useStyles();
    
    return (
        <div className="SetDate">
            <TextField
                id="day"
                label="Specific day"
                type="date"
                required
                className={classes.fieldForm}
                InputLabelProps={{
                    shrink: true,
                }}
            />           
        </div>
    );
}