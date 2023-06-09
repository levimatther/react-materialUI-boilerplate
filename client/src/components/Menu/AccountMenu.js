import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingRight: 50,
    paddingLeft: 50,
  },
  leftSide: {
    padding: 50
  },
  toolbarRoot: {
    paddingRight: 50,
    paddingLeft: 50,
    height: '80px',
    backgroundColor: '#5DBE79',
    width: '100%'
  },
  title: {
    float: 'right',
    paddingTop: 16,
    marginLeft: 20,
    fontSize: 15,
    fontWeight: 700,
    color: '#58595B',
  },
});

function AccountMenu(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>        
        <Grid item xs={12} sm={4}>
          <div className={classes.leftSide}>
            Image
          </div>
        </Grid>
        <Grid item xs={12} sm={8}>
          <p className={classes.title}>
            CONTACT
          </p>
          <p className={classes.title}>
            CRAEER
          </p>
          <p className={classes.title}>
            MEDIA
          </p>
          <p className={classes.title}>
            ABOUT
          </p>  
          <p className={classes.title}>
            SERVICES
          </p>
          <p className={classes.title}>
            PRODUCTS
          </p>
          <p className={classes.title}>
            HOME
          </p>  
        </Grid>        
      </Grid>
    </div>
  );
}

AccountMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AccountMenu);