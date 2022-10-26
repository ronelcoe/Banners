import React from "react";
import { makeStyles, useTheme, withTheme } from "@material-ui/core/styles";
import "./buttons.css";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import filt1 from "../../images/filt1.png";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5)
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FFFFFF",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "280px",
    height: "40px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3)
      // width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8782D9"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "100%",
        height: "36px",
        marginTop: "22px",
        fontSize: "14px"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          float: "left",
          width: "40px",
          height: "40px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 8px 20px #A4A4A421",
          borderRadius: "2px",
          color: "#8782D9"
        }}
      >
        <img src={filt1} alt="filt" />
      </div>
      <div className={classes.search} style={{ float: "left" }}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search here.."
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className="bt1" variant="contained" disabled>
        Reject
      </div>
      <div className="bt2" variant="contained" disabled>
        Complete
      </div>
      <div className="bt3" variant="contained" disabled>
        Assigned
      </div>
      <div className="bt4" variant="contained" disabled>
        Action
      </div>

      <div className="bt6" variant="contained">
        Create New
      </div>
      <div className="bt5" variant="contained" disabled>
        Export
      </div>
    </div>
  );
}
