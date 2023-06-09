import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',    
    },
    main: {
        fonrWeight: 'bold',
        color: '#5EBE79',
    }
});

function OurServicesTitle(props) {

    const { classes } = props;
    return (
        <div className={classes.root}>            
            <h1 className={classes.main}>
                OUR SERVICES
            </h1>            
            <p>
                The company provides a wide range of services in recovery and recycling solutions
            </p>            
            <p>
                which includes but are not limited to:
            </p>
        </div>
    )
}

export default withStyles(styles)(OurServicesTitle);