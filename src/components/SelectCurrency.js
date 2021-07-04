import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
    input: {
        borderRadius: 4,
        border: '1px solid #ced4da',
        width: 150,
        height: 55,
    },
})

export default function SelectCurrency(props) {

    const {
        currencyOption
    } = props

    const classes = useStyles();
    
    return (
        <div className="SelectCurrency">
            <FormControl className={classes.input}>
                <InputLabel id="currency-label">Currency select</InputLabel>
                <Select
                    native
                    labelId="currency-label"
                    // value={currency}
                    // onChange={handleChange}
                    required
                    min="0"
                    >
                        {currencyOption.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                </Select>
            </FormControl>            
        </div>
    );
}