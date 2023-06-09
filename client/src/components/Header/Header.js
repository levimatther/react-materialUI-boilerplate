import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
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
    color: '#FFFFFF',
  },
  input: {
    marginLeft: 20,
    marginTop: 20,
    float: 'right',
    border: '2px solid #FFFFFF',
    width: '192px',
    height: '40px',
    borderRadius: '30px',
    backgroundColor: '#5DBE79',
    
  }
});

const Header = props => {
  const { classes } = props;
  return (
    <div className={classes.toolbarRoot}>
      <input className={classes.input} placeholder="" icon="search" type="search" />
      <p className={classes.title}>
        sitelevel
      </p>
      <p className={classes.title}>
        REQUEST A QUOTE
      </p>
      <p className={classes.title}>
        CONTACT
      </p>      
    </div>
  );
};

export default withStyles(styles)(Header);
