import Link from "next/link";
import React, { ComponentProps, FC, useState, useEffect, useReducer } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

// import ClickEvent from "../common/ClickEvent";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

// import axios from "axios";
// import fetch from "isomorphic-unfetch";

// import ReducksCounter, {getReducksCounter} from './selectors'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

// const dev = ({ dev, ...other }: devProps) => {
// ↑これでも可
type devProps = {
  style?: React.CSSProperties; //不要かも
};

const gasApp: FC<devProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar style={{ justifyContent: "space-between" }}>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            FX収支記録
          </Typography>

          <Button color="inherit">
            <Link href="/">
              <div>TOPメニュー </div>
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default gasApp;
