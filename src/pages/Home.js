import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Nav from '../components/Nav';
import Amount from '../components/Amount';
import Result from '../components/Result';

const useStyles = makeStyles({
    title: {
        padding: '80px 0',
    },
});

export default function Home() {
    const classes = useStyles();
    return (
        <Container>
            <Nav />
            <Typography
                className={classes.title}
                variant="h2"
                align="center"
            >
                Currency converter
            </Typography>
            <Amount />
            <Result />
        </Container>
    )
}