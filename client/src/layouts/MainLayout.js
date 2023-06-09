import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Header from "../components/Header";
import AccountMenu from "../components/Menu/AccountMenu";
import Commited from '../components/Sidebar/Commited';
import OurProducts from '../components/Sidebar/OurProducts/OurProducts';
import OurServices from '../components/Sidebar/OurServices/OurServices';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(9),
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class MainLayout extends Component {
  state = {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    // const { classes } = this.props;
    return (
      <Fragment>
        <div>
          <Header
            handleToggleDrawer={this.handleToggleDrawer}
          />    
          <AccountMenu />    
          <Commited />  
          <OurProducts />
          <OurServices />
        </div>        
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainLayout);
