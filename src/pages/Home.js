import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Amount from '../components/Amount';

const useStyles = makeStyles({
    title: {
        padding: '50px 0',
        textTransform: 'uppercase',
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <Container>
            <Typography className={classes.title} variant="h2" align="center">
                Currency converter
            </Typography>
            <Amount />
        </Container>
    )
}