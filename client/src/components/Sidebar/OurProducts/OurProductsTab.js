import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NonFerrousTab from './NonFerrousTab';
import FerrousTab from './FerrousTab';
import PlasticsTab from './PlasticsTab';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 40,
        paddingBottom: 50,
        paddingRight: 50,
        paddingLeft: 50,
        backgroundColor: '#F1F1F1',
    },  
    grid: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    lineCenter: {
        textAlign: '-webkit-center'
    },
    item: {
        paddingTop: 30,
        paddingBottom: 10,
        fontWeight: 'bold',
        fonrSize: '15px',
        '&:focus': {
            backgroundColor: 'red'
        },
    },
    bottomLine1: {
        border: '1px solid green',
        marginTop: '-10px',
        width: '130px',      
    },
    bottomLine2: {
        border: '1px solid green',
        marginTop: '-10px',
        width: '100px',      
    },
    bottomLine3: {
        border: '1px solid green',
        marginTop: '-10px',
        width: '56px',      
    },
    selected: {
        backgroundColor: "#5DBE79",
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '20px',
        color: 'white'
    },
    backgrounImg: {
        // background: "url(img/1.jpg)",
        backgroundSize: "594px 313px",
        backgroundRepeat: "no-repeat",
        height: "320px",
        marginLeft: 30,
        paddingTop: 120,
        marginBottom: 30,
        color: 'white',
        fonrSize: '100px',
        textAlign: 'left',
        paddingLeft: 30,
        borderRadius: '10px',
    }
});

function OurProductsTab(props) {

    const { classes } = props;
    const [value, setValue] = useState("Non-Ferrous");
    const handleChange = (e) => {
        setValue(e);
    }
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid} >
                <Grid item xs={12} sm={4} className={value === "Non-Ferrous" ? classes.selected: classes.lineCenter}>
                    <div className={classes.item} onClick={e => handleChange("Non-Ferrous")}>
                        Non-Ferrous Metals
                    </div>
                    <p className={value !== "Non-Ferrous" ? classes.bottomLine1: ""}></p>
                </Grid>
                <Grid item xs={12} sm={4} className={value === "Ferrous" ? classes.selected: classes.lineCenter}>
                    <div className={classes.item} onClick={e => handleChange("Ferrous")}>
                        Ferrous Metals
                    </div>
                    <p className={value !== "Ferrous" ? classes.bottomLine2: ""}></p>
                </Grid>
                <Grid item xs={12} sm={4} className={value === "Plastics" ? classes.selected: classes.lineCenter}>
                    <div className={classes.item} onClick={e => handleChange("Plastics")}>
                        Plastics
                    </div>
                    <p className={value !== "Plastics" ? classes.bottomLine3: ""}></p>
                </Grid>
            </Grid>  
            { value === "Non-Ferrous" && <NonFerrousTab grid={classes.grid} backgrounImg={classes.backgrounImg}/>}           
            { value === "Ferrous" && <FerrousTab grid={classes.grid} backgrounImg={classes.backgrounImg}/>}
            { value === "Plastics" && <PlasticsTab grid={classes.grid} backgrounImg={classes.backgrounImg}/>}            
        </div>
    )
}

export default withStyles(styles)(OurProductsTab);