import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import { Grid } from "@material-ui/core";
import b1 from "../assets/brush.svg";
import b2 from "../assets/circle.svg";
import b3 from "../assets/eraser.svg";
// import b4 from "../assets/input.svg";
import b5 from "../assets/line.svg";
import b6 from "../assets/rect.svg";
import b7 from "../assets/save.svg";
import b8 from "../assets/undo.svg";
import b9 from "../assets/redo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  toolbar: {
    background: "#fff",
    boxShadow: "0 4px 5px gray",
    zIndex: 999,
  },

  settingBar: {
    background: "#fff",
    boxShadow: "0 4px 5px gray",
  },
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Grid container justify="space-between">
            <Grid item xs={6}>
              <IconButton>
                <img src={b1} alt="" />
              </IconButton>
              <IconButton>
                <img src={b6} alt="" />
              </IconButton>
              <IconButton>
                <img src={b2} alt="" />
              </IconButton>
              <IconButton>
                <img src={b3} alt="" />
              </IconButton>
              <IconButton>
                <img src={b5} alt="" />
              </IconButton>
              <IconButton>
                <input type='color' />
              </IconButton>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              <IconButton>
                <img src={b8} alt="" />
              </IconButton>
              <IconButton>
                <img src={b9} alt="" />
              </IconButton>
              <IconButton>
                <img src={b7} alt="" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>

        <Toolbar className={classes.settingBar}>
        
        </Toolbar>
      </AppBar>
    </div>
  );
};
