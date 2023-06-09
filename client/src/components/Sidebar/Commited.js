import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 60,
        paddingBottom: 120,
        textAlign: 'center',
    },
    main: {
        fontSize: '100px',
        fonrWeight: 'bold'
    },
    order: {
        fontSize: '30px',
        color: '#5EBE79',
        marginTop: '-20px'
    }
});

function Commited(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>   
            <div className={classes.main}>
                COMMITED
            </div>         
            <div className={classes.order}>
                to Sustainble Environmental Development
            </div>
        </div>
    )
}

export default withStyles(styles)(Commited);