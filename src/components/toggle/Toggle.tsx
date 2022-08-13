import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { ToggleProps } from "./Props";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    border: "1px solid #9FA7B5",
    display: "flex",
    padding: "5px",
    borderRadius: "5px",
    gap: "5px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  label: {
    padding: "5px 15px",
    borderRadius: "5px",
    color: "#828C9F",
    fontSize: "14px",
    display: "flex",
    cursor: "pointer",
    justifyContent: "center",
    transition: "1s",
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
      flex: "1",
    },
  },
  activColor: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light,
  },
}));
export const Toggle: React.FC<ToggleProps> = ({
  firstLabel,
  secondLabel,
  value,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        onClick={() => onChange(firstLabel)}
        className={`${classes.label} ${
          value === firstLabel ? classes.activColor : ""
        }`}
      >
        {firstLabel}
      </div>
      <div
        onClick={() => onChange(secondLabel)}
        className={`${classes.label} ${
          value === secondLabel ? classes.activColor : ""
        }`}
      >
        {secondLabel}
      </div>
    </div>
  );
};
