import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Stepper } from "../components/stepper";
import {
  Clear,
  Check,
  ArrowBackIos,
  HorizontalRule,
} from "@mui/icons-material";
import { colors } from "../assets/colors/colors";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    backgroundColor: theme.palette.secondary.main,
    alignItems: "center",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "0 10px 10px",
      flexDirection: "column",
      gap: "10px",
    },
  },
  logo: {
    height: "65px",
    width: "120px",
    [theme.breakpoints.down("sm")]: {
      height: "45px",
      width: "90px",
    },
  },
  step: {
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  verticalLine: {
    height: "35px",
    width: "1px",
    backgroundColor: "#BEC3CD",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  arrowBack: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  clearIcon: {
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      right: "10px",
      top: "8px",
    },
  },
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src="QBE_logo.png" className={classes.logo} alt="test" />
      <div className={classes.step}>
        <Stepper
          data={[
            {
              title: "Confirm your details",
            },
            { title: "Consent" },
          ]}
          activeStep={1}
        />
      </div>
      <div className={classes.rightSide}>
        <div className={classes.arrowBack}>
          <ArrowBackIos
            sx={{ height: "23px", width: "23px", color: "#ffffff" }}
          />
        </div>

        <span className={classes.verticalLine}></span>

        <div className={classes.clearIcon}>
          <Clear sx={{ height: "30px", width: "30px", color: "#ffffff" }} />
        </div>
      </div>
    </div>
  );
};
