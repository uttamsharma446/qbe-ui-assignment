import { makeStyles } from "@mui/styles";
import React from "react";
import { StepsData } from "./Props";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    alignItems: "center",
    position: "relative",
    contentVisibility: "visible",
    "&:not(:last-child):after": {
      content: `""`,
      position: "absolute",
      left: "50%",
      top: "15%",
      height: "10px",
      width: "100%",
      zIndex: 1,
      borderBottom: "5px dotted red",
    },
  },
  count: {
    border: "1px solid",
    padding: "10px",
    height: "35px",
    width: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "100%",
    zIndex: 123,
    backgroundColor: "blue",
  },
  title: {
    fontSize: "14px",
    fontWeight: 400,
  },
}));

interface StepProps extends StepsData {
  stepCount?: number;
  showNextStepLine?: boolean;
}
export const Steps: React.FC<StepProps> = ({ title, icon, stepCount }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.count}>{stepCount}</div>
      <div className={classes.title}>{title}</div>
    </div>
  );
};
