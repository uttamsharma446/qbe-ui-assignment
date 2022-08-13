import { makeStyles } from "@mui/styles";
import { height } from "@mui/system";
import React from "react";
import { StepperProps } from "./Props";
import { Steps } from "./Steps";
import { v4 as uuidv4 } from "uuid";
import { colors } from "../../assets/colors/colors";
import { MobileViewStep } from "./MobileViewStep";
import { Theme } from "@mui/material";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    border: "1px sold red",
    justifyContent: "center",
    color: "#FFFFFF",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileView: {
    display: "none",
    flexDirection: "column",
    gap: "5px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
  },
  progress: {
    display: "flex",
    gap: "5px",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    color: theme.palette.primary.light,
    fontSize: "12px",
    fontWeight: 400,
  },
}));

export const Stepper: React.FC<StepperProps> = ({ data, activeStep }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        {data.map((d, index) => {
          return (
            <Steps
              key={uuidv4()}
              isActive={index + 1 === activeStep}
              isCompleted={index + 1 < activeStep ? true : false}
              title={d.title}
              stepCount={index + 1}
            />
          );
        })}
      </div>
      <div className={classes.mobileView}>
        <div className={classes.title}>
          <div>{data[activeStep - 1].title}</div>
          <div>{`${activeStep} of ${data.length}`}</div>
        </div>
        <div className={classes.progress}>
          {data.map((d, index) => (
            <MobileViewStep
              isCompleted={index + 1 < activeStep ? true : false}
              isActive={index + 1 === activeStep}
            />
          ))}
        </div>
      </div>
    </>
  );
};
