import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

function Nav() {
    return (
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
    );
}
  
export default Nav;

// CENTER PAGES