import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    navbar: {
        padding: 0,
    },
    navText: {
        padding: '10px 20px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
    },
});

export default function Nav() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Link to="/" className={classes.navLink}>
                        <Typography 
                            variant="h5"
                            className={classes.navText}    
                        >
                            Home
                        </Typography>
                    </Link>
                    <Link to="/aboutme" className={classes.navLink}>
                        <Typography 
                            variant="h5"
                            className={classes.navText}
                        >
                            About Me
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}