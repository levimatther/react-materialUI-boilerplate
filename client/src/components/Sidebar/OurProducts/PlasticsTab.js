import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

function PlaticsTab(props) {
    return (
        <div>
            <Grid container className={props.grid}>
                <Grid item xs={12} sm={6} className="pt-2">                   
                    <div className={props.backgrounImg} style={{background: "url(img/3.jpg)"}}>
                        <h1>Plastics</h1>
                    </div>                    
                </Grid>
                <Grid item xs={12} sm={6} className="pt-10">
                    <Grid container className={props.grid}>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-130">PETE</Button>
                            <Button variant="outlined" className="btn-width-130" style={{marginTop: '30px'}} >LDPE</Button>
                            <Button variant="outlined" className="btn-width-130" style={{marginTop: '30px'}} >OTHER</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-130">HDPE</Button>
                            <Button variant="outlined" className="btn-width-130" style={{marginTop: '30px'}}>PP</Button>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <Button variant="outlined" className="btn-width-130">PVC</Button>
                            <Button variant="outlined" className="btn-width-130" style={{marginTop: '30px'}}>PS</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default PlaticsTab;