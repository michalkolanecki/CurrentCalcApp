import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    fieldForm: {
        marginRight: 50,
    },
    btnCalc: {
        width: 150,
        height: 55,
    },
    input: {
        borderRadius: 4,
        border: '1px solid #ced4da',
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

export default function Amount() {

    const classes = useStyles();

    const [textOne, setTextOne] = useState(1);
    const [textTwo, setTextTwo] = useState(1);
    const [countryOne, setCountryOne] = useState([]);
    const [countryTwo, setCountryTwo] = useState([]);
    const [valueOne, setValueOne] = useState(1);
    const [valueTwo, setValueTwo] = useState(1);

    return (
        <div className="Amount">
            <form noValidate autoComplete="off">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>
                            <TextField
                                className={classes.fieldForm}
                                label="Amount value"
                                variant="outlined"
                                required
                                type="number"
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>
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
                                        <option>ABC</option>
                                </Select>
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>
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
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>        
                            <TextField
                                className={classes.fieldForm}
                                label="Amount value"
                                variant="outlined"
                                required
                                type="number"
                            />
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}> 
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
                                        <option>ABC</option>
                                </Select>
                            </FormControl>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={4} lg={4}>
                        <Paper className={classes.paperElem}>
                            <TextField
                                id="specDay"
                                label="Current day"
                                type="date"
                                required
                                className={classes.fieldForm}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
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