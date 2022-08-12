import { makeStyles } from "@mui/styles";
import React from "react";
import { Stepper } from "../components/stepper";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    backgroundColor: "#14284B",
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
