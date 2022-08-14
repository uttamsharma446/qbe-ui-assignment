import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Theme } from "@mui/material";
import { colors } from "../../assets/colors/colors";
const useStyles = makeStyles<Theme>((theme) => {
  const { main } = theme.palette.primary;
  return {
    inputBox: {
      position: "relative",
      width: "100%",
    },
    label: {
      transition: "all .2s",
      fontSize: "16px",
      position: "absolute",
      top: "25px",
      left: "20px",
      lineHeight: "1",
      cursor: "text",
      color: "#70727B",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        top: "20px",
        left: "15px",
      },
    },
    input: {
      width: "100%",
      border: "none",
      borderBottom: `2px solid ${main}`,
      outline: "none",
      fontSize: "16px",
      backgroundColor: "#F1F2F4",
      padding: "25px 35px 15px 20px",
      transition: "all 1s",
      color: colors.darkBlue,
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        padding: "20px 30px 10px 15px",
      },

      "&:focus + $label,&:not(:placeholder-shown)  + $label": {
        top: "8px",
        cursor: "none",
        color: main,
        fontSize: "12px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "10px",
          left: "15px",
        },
      },
    },
    errorInput: {
      borderBottom: "2px solid #A20000",
      "&:focus + $label,&:not(:placeholder-shown)  + $label": {
        color: "#A20000",
      },
    },
    helperText: {
      margin: "8px 0",
      textAlign: "center",
      fontSize: "12px",
      fontWeight: "normal",
      color: main,
      padding: "0 10px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
        textAlign: "left",
        padding: "0 16px",
      },
    },
    error: {
      color: "#A20000",
    },
    reportIcon: {
      position: "absolute",
      right: "10px",
      top: "22px",

      [theme.breakpoints.down("sm")]: {
        right: "5px",
        top: "15px",
      },
    },
  };
});
interface InputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  helperText: string;
  isError?: boolean;
  onBlur?: (value: string) => void;
  style?: React.CSSProperties;
  className?: string;
}
export const TextField: React.FC<InputProps> = ({
  value,
  onChange,
  label,
  helperText,
  isError,
  onBlur,
  style,
  className,
}) => {
  const classes = useStyles();
  return (
    <div className={className} style={style}>
      <div className={classes.inputBox}>
        {isError && (
          <div className={classes.reportIcon}>
            <ReportProblemIcon
              sx={{
                color: "#A20000",
              }}
            />
          </div>
        )}
        <input
          id="label"
          onBlur={() => onBlur && onBlur(value)}
          className={`${classes.input} ${isError ? classes.errorInput : ""}`}
          type="text"
          value={value}
          placeholder=""
          onChange={(e) => {
            onChange(e.target.value);
          }}
          autoFocus={false}
        />
        <label className={`${classes.label} `} htmlFor="label">
          {label}
        </label>
      </div>
      {helperText && (
        <div
          className={`${classes.helperText} ${isError ? classes.error : ""}`}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};
