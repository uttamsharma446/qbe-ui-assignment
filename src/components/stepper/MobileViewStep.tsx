import { makeStyles } from "@mui/styles";
import React from "react";
import { colors } from "../../assets/colors/colors";
const useStyles = makeStyles(() => ({
  step: {
    flex: 1,
    height: "3px",
  },
}));
interface Props {
  isActive: boolean;
  isCompleted: boolean;
}
export const MobileViewStep: React.FC<Props> = ({ isActive, isCompleted }) => {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: isActive ? colors.green : colors.grey }}
      className={classes.step}
    ></div>
  );
};
