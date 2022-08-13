import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Stepper } from "../components/stepper";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    backgroundColor: theme.palette.secondary.main,
  },
  logo: {},
  step: {
    flex: "1",
  },
}));
export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <img src="brand.svg" alt="test" />
      </div>

      <div className={classes.step}>
        <Stepper
          onChange={() => {}}
          data={[{ title: "Test" }, { title: "Test1" }]}
          value={[]}
        />
      </div>
      <div>Crosss</div>
    </div>
  );
};
