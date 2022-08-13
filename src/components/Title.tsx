import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
// interface StylesProps {
//   fontWeight?: "normal" | "bold";
// }
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontSize: "16px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
}));

interface Props {
  title?: string;
  children?: React.ReactNode;
  fontWeight?: "normal" | "bold";
  style?: React.CSSProperties;
}
export const Title: React.FC<Props> = ({
  children,
  title,
  fontWeight,
  style,
}) => {
  const classes = useStyles();
  return (
    <div
      style={style}
      className={`${classes.root} ${fontWeight === "bold" ? classes.bold : ""}`}
    >
      {children || title}
    </div>
  );
};
