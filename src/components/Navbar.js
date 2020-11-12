import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  colorNav: {
    backgroundColor: "#302E2E",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.colorNav} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Sean Marten
          </Typography>
          <Button component={Link} to="/" color="inherit">
            About
          </Button>
          <Button to="/portfolio" component={Link} color="inherit">
            Portfolio
          </Button>
          <Button to="/contact" component={Link} color="inherit">
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
