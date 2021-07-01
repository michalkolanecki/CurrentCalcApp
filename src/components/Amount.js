import React from 'react';
import Button from '@material-ui/core/Button';

// const BASE_URL = 'http://api.nbp.pl/api/exchangerates/tables/c/2021-06-01/2021-06-30/';

export default function Amount() {
    return (
        <div className="Amount">
            <label>Amount</label>
            <label>Currency</label>
            <Button
                onClick={() => console.log('CLIKED')}
                type="submit" 
                variant="outlined"
                size="medium"
            >
                Calculate
            </Button>
        </div>
    );
}