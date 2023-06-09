import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function NonFerrousTab(props) {
    return (
        <div>
            <Grid container className={props.grid}>
                <Grid item xs={12} sm={6} className="pt-2">                   
                    <div className={props.backgrounImg} style={{background: "url(img/1.jpg)"}}>
                        <h1>Non-Ferrous</h1>
                        <h1>Metals</h1>
                    </div>                    
                </Grid>
                <Grid item xs={12} sm={6} className="pt-15">
                    <Grid container className={props.grid}>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-130">Aluminum</Button>
                            <Button variant="outlined" className="btn-width-130" style={{marginTop: '30px'}} >Lead</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-130">Copper</Button>
                            <Button variant="outlined" className="btn-width-130" style={{marginTop: '30px'}}>Brass</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-130">Zinc</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default NonFerrousTab;