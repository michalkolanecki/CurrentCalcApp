import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
    fieldForm: {
        marginRight: 50,
    },
})

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