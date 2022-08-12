import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import React from "react";
import { StepperProps } from "./Props";
import { Steps } from "./Steps";
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    border: "1px sold red",
    justifyContent: "center",
    color: "#FFFFFF",
  },
}));

export const Stepper: React.FC<StepperProps> = ({ data, onChange, value }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {data.map((d, index) => {
        return <Steps title={d.title} stepCount={index + 1} />;
      })}
    </div>
  );
};
