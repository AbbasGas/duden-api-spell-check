import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
  Zoom,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeToggle } from "../Theme/ThemeToggle";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.background,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  iconButton: {
    height: "2.5rem",
    width: "2.5rem",
  },
  icon: {
    fontSize: "1.25rem",
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Spell Check BAC-2023 GERMAN
        </Typography>
        <nav>
          <Tooltip
            title={"Toggle light/dark theme"}
            placement="right"
            TransitionComponent={Zoom}
          >
            <IconButton
              color="inherit"
              aria-label={"Toggle light/dark theme"}
              className={classes.iconButton}
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
          <ThemeToggle />
        </nav>
      </Toolbar>
    </AppBar>
  );
};
