import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { colors } from "../../assets/colors/colors";
import { StepsData } from "./Props";
import CheckIcon from "@mui/icons-material/Check";
const { green, grey, darkBlue } = colors;
// interface StyleProps {
//   isActive?: boolean;
// }
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    alignItems: "center",
    position: "relative",
    "&:not(:last-child):after": {
      content: `""`,
      position: "absolute",
      left: "50%",
      top: "10%",
      height: "10px",
      width: "100%",
      zIndex: 1,
      borderBottom: `3px dotted ${grey}`,
    },
  },

  count: {
    padding: "10px",
    height: "30px",
    width: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "100%",
    zIndex: 123,
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  title: {
    fontSize: "14px",
    fontWeight: "normal",
    color: theme.palette.primary.light,
  },
  activeTitle: {
    color: green,
  },
}));

interface StepProps extends StepsData {
  stepCount?: number;
  isActive: boolean;
  isCompleted: boolean;
}
export const Steps: React.FC<StepProps> = ({
  title,
  icon,
  isActive,
  stepCount,
  isCompleted,
}) => {
  const classes = useStyles();
  let activeCountStyle = {
    backgroundColor: isActive ? green : darkBlue,
    border: isActive ? "" : "2px solid #949DAD",
  };
  return (
    <div className={classes.root}>
      <div style={activeCountStyle} className={`${classes.count}`}>
        {isCompleted ? <CheckIcon /> : stepCount}
      </div>
      <div
        className={`${classes.title}  ${isActive ? classes.activeTitle : ""}`}
      >
        {title}
      </div>
    </div>
  );
};
