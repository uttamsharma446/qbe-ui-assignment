import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { Typography } from "../components/typography/Typography";
import { Registeration } from "../services/Insurance/Registration";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    padding: "30px 0",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      display: "flex",
      justifyContent: "",
    },
  },
  panel: {
    width: "600px",
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "30px 50px",
    gap: "10px",
    backgroundColor: theme.palette.primary.light,
    border: "1px solid #c7c7c7",
    boxShadow: "1px 1px 6px -3px rgba(0,0,0,0.74)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "30px 10px",
      borderRadius: "5px",
      border: "none",
    },
  },
  useDetails: {},
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.panel}>
          <Registeration />
        </div>
      </div>
    </>
  );
};
