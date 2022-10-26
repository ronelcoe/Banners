import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

//import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";
import DashboardIcon from "@material-ui/icons/Dashboard";

import PersonIcon from "@material-ui/icons/Person";
//import NotificationsIcon from '@material-ui/icons/Notifications';
import SmallLogo from "../../images/SmallLogo.png";
//import dashboard from './dashboard.svg';
import signs from "../../images/signs.png";
import inter from "../../images/inter.png";
import dashboard from "../../images/dashboard.png";
import Buttons from "../button/Buttons";
import Conta from "../conta/Conta";

// import DashboardIcon from '@material-ui/icons/Dashboard';

import NotificationsRoundedIcon from "@material-ui/icons/NotificationsRounded";
import Icon from "@material-ui/core/Icon";
import "./Nav.css";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: 60,
      flexShrink: 0,
      background: "#282461"
    }
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - 60px)`,
      marginLeft: drawerWidth,
      background: "white",
      height: "61px"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    background: "#00d09c",
    width: 60
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <img src={SmallLogo} className="DrawerSmallLogo" alt="SmallLogo" />
      </div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <div className="imgs1">
          <img src={dashboard} className="Appdash" alt="dash" />
        </div>
        <div className="imgs2">
          <img src={signs} className="Appsign" alt="sign" />
        </div>
        <div className="imgs3">
          <img src={inter} className="Appinter" alt="inter" />
        </div>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>

          {/* <Typography variant="h6" style={{top: "4px",left: "86px",width: "74px",height: "26px", font: "Medium 20px/26px Roboto" ,color: "#000000", opacity: "1"}}>
            Banners<br/>
            </Typography>
            <Typography variant="h7" style={{top: "40px",left: "86px",width: "80px",height: "18px", font: "Regular 13px/18px Roboto" ,color: "#8D8D8D"}}>
            My Campaign
             
            </Typography> */}
          <div className="head">
            <div className="banner">Banners</div>
            <div className="campa">My Campaign > Banners </div>
          </div>
          <div className="IconGroupRight" align="right">
            {/* <i class="fas fa-bell"></i> */}
            <Icon className="IconRight circle-icon-bell">
              <NotificationsRoundedIcon
                style={{ color: "#000000", margin: "0 2%", fill: "#B9B9B9" }}
              />
            </Icon>
            {/* <div>Satyajit</div> */}
            <span
              style={{
                width: "46px",
                height: "19px",
                font: "14px",
                color: "#000000"
              }}
            >
              Satyajit
            </span>
            <Icon className="IconRight circle-icon-person">
              <PersonIcon style={{ color: "#000000" }} />
            </Icon>
            {/* <IconButton className="IconRight"><Icon>add_circle</Icon></IconButton> */}
            {/* <IconButton className="IconRight" style={{fontSize: "19px", color: "#000000"}}>Satyajit</IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} style={{ backgroundColor: "#f1f1f1" }}>
        <div className={classes.toolbar} />
        <div className="heading">List of Banners</div>

        <Buttons />
        <Conta />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

export default ResponsiveDrawer;
