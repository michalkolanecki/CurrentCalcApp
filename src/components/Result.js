import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  fieldResult: {
    marginTop: 50,
    textAlign: 'center',
  },
})

export default function SetDate() {

  const classes = useStyles();

    return (
      <div className="Result">
          <div className={classes.fieldResult}>
            <h3>Result for buy ad sell currency</h3>
          </div>
      </div>
    );
}