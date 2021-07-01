import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';

export default function Nav() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5">
                        Home
                    </Typography>
                    <Typography variant="h5">
                        About Me
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}