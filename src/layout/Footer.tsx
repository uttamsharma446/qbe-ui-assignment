import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const useStyles = makeStyles<Theme>((theme) => ({
  footer: {
    boxShadow: " -1px -1px 18px 0px rgba(193,187,187,0.75)",

    backgroundColor: "#FFFFFF",
    padding: "15px 20px",
    height: "60px",
    width: "100%",
    marginTop: "auto",

    [theme.breakpoints.down("sm")]: {
      padding: "0 10px 10px",
    },
    "& a": {
      color: "blue",
      fontSize: "14px",
      fontWeight: 400,
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
      },
    },
  },
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <a href="">Terms and Conditions</a>
    </div>
  );
};
