import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function FerrousTab(props) {
    return (
        <div>
            <Grid container className={props.grid}>
                <Grid item xs={12} sm={6} className="pt-2">                   
                    <div className={props.backgrounImg} style={{background: "url(img/2.png)"}}>
                        <h1>Ferrous</h1>
                        <h1>Metals</h1>
                    </div>                    
                </Grid>
                <Grid item xs={12} sm={6} className="pt-17" id="fe">
                    <Grid container className={props.grid}>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-150">Hard material</Button>                            
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-150">wires</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-150">Other material</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FerrousTab;