import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        padding: '30px 0',
    },
    navText: {
        padding: '10px 20px',
    },
});

export default function Nav() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography 
                        variant="h5"
                        className={classes.navText}    
                    >
                        Home
                    </Typography>
                    <Typography 
                        variant="h5"
                        className={classes.navText}
                    >
                        About Me
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}