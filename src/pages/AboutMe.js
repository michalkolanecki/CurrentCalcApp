import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        padding: '55px 100px',
    },
    text: {
        padding: '70px 120px',
    },
});

export default function AboutMe() {
    const classes = useStyles();
    return (
        <Container>
            <Typography
                className={classes.title}
                variant="h3"
                align="center"
                gutterBottom
            >
                This is page about me
            </Typography>
            <Typography
                className={classes.text}
                variant="h6"
                align="justify"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat purus a massa interdum finibus. Vestibulum eget arcu vestibulum, auctor risus eget, semper libero. Proin quis turpis eget enim suscipit semper ut lacinia elit. Vestibulum quis diam sagittis, interdum ex eget, iaculis dui. Phasellus mattis dui quis urna laoreet, a sagittis purus venenatis. Sed gravida ac est quis ullamcorper. Morbi pretium leo sapien, consequat venenatis augue luctus in. Ut eu convallis lorem. Donec lacus nisl, lobortis in congue quis, pharetra sed justo.
                Praesent sagittis sit amet purus vel venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque nulla lacus, ac blandit urna ullamcorper vel. Nunc id ipsum urna. Pellentesque molestie pulvinar magna. Vivamus bibendum orci a tortor dictum pellentesque. Integer ultrices enim in turpis cursus posuere vel eu nunc. Mauris ut magna ut massa ornare finibus. Ut erat sapien, pretium non elementum at, eleifend ac tellus. Aenean tempor consequat urna in sodales.
            </Typography>
            <Typography
                className={classes.text}
                variant="h6"
                align="justify"
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat purus a massa interdum finibus. Vestibulum eget arcu vestibulum, auctor risus eget, semper libero. Proin quis turpis eget enim suscipit semper ut lacinia elit. Vestibulum quis diam sagittis, interdum ex eget, iaculis dui. Phasellus mattis dui quis urna laoreet, a sagittis purus venenatis. Sed gravida ac est quis ullamcorper. Morbi pretium leo sapien, consequat venenatis augue luctus in. Ut eu convallis lorem. Donec lacus nisl, lobortis in congue quis, pharetra sed justo.
                Praesent sagittis sit amet purus vel venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec scelerisque nulla lacus, ac blandit urna ullamcorper vel. Nunc id ipsum urna. Pellentesque molestie pulvinar magna. Vivamus bibendum orci a tortor dictum pellentesque. Integer ultrices enim in turpis cursus posuere vel eu nunc. Mauris ut magna ut massa ornare finibus. Ut erat sapien, pretium non elementum at, eleifend ac tellus. Aenean tempor consequat urna in sodales.
               </Typography>
        </Container>
    )
}