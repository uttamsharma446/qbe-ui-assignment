import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Toggle } from "../components/toggle/Toggle";
import { Title } from "../components/Title";
import { UserDetails } from "../services/UserDetails";
import { Theme } from "@mui/material";

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    // alignItems: "flex-center",
  },
  useDetails: {},
}));
export const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.panel}>
          <Title fontWeight="bold">On More Thing</Title>
          <Title style={{ textAlign: "center" }}>
            What's your vehical registration number or gagraging post code
          </Title>
          <UserDetails />
        </div>
      </div>
    </>
  );
};
