import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',      
        padding: 40
    },    
});

function SlideContentCompo(props) {

    const { classes } = props;
    return (
        <div className={classes.root}>
            sled
        </div>
    )
}

export default withStyles(styles)(SlideContentCompo);