import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import OurProductsTab from './OurProductsTab';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#F1F1F1',
        textAlign: 'center',      
        marginBottom: '40px'      
    },
    main: {
        fonrWeight: 'bold',
        color: '#5EBE79',
        paddingTop: '30px',
        fonrSize: '50px'
    },
    order: {
        color: 'black',
        // marginTop: '-30px',
        fonrWeight: 'bold'
    }
});

function OurProducts(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>            
            <h1 className={classes.main}>
                OUR PRODUCTS
            </h1>
            <h2 className={classes.order}>
                International EMEA Trading - We buy & sell
            </h2>
            <p>
                istanbul Group of Companies & Al Kashif Group offers their valued customers a broad range of quaity produts and services at competitive prices through superior delivery, reliability, credibility, and flexility to be at the forefront of customer service and satisfaction.
            </p>
            
            <OurProductsTab />
        </div>
    )
}

export default withStyles(styles)(OurProducts);