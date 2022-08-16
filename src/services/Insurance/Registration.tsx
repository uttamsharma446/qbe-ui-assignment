import React, { useState } from "react";
import { TextField } from "../../components/form/TextField";
// import { Toggle } from "../components/toggle/Toggle";
import { InfoOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Button } from "../../components/form/Button";
import { Typography } from "../../components/typography/Typography";
import { Theme } from "@mui/material";
import { ToggleButtonGroup } from "../../components/toggle/ToggleButtonGroup";
import { ToggleButton } from "../../components/toggle/ToggleButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputDetails: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  textField: {
    width: "350px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  infoText: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "12px",
  },
}));
export const Registeration = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState<string>("");
  const [toggleValue, setToggleValue] = useState("registrationNumber");
  const [isError, setIsError] = useState<boolean>(false);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.root}>
      <Typography variant="h2" className="text-center">
        One more thing
      </Typography>
      <Typography className="text-center">
        What's your vehicle registration number or garaging postcode?
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToggleButtonGroup onChange={setToggleValue} value={toggleValue}>
          <ToggleButton value="registrationNumber">
            Registration number
          </ToggleButton>
          <ToggleButton value="postcode">Postcode</ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className={classes.inputDetails}>
        <Typography variant="h2" className={`${classes.infoText} text-center`}>
          {toggleValue === "postcode"
            ? `What's your postcode?`
            : "What's your vechicle registration number?"}
          <InfoOutlined />
        </Typography>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            className={classes.textField}
            value={inputValue}
            onChange={(value) => {
              setInputValue(value);

              setIsError(false);
            }}
            helperText={
              toggleValue === "postcode"
                ? matches
                  ? "Please enter the postcode"
                  : "Please enter the postcode where your car is garaged"
                : matches
                ? "Please enter the registration number"
                : "Please enter the registration of insured vehicle"
            }
            onBlur={(value) => {
              const regx = new RegExp("^[0-9]+$");

              if (value.length > 0 && !regx.test(value)) {
                setIsError(true);
              }
            }}
            label={
              toggleValue === "registrationNumber"
                ? "Registration number"
                : "Postcode"
            }
            isError={isError}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <Button onClick={() => {}}>continue</Button>
        </div>
      </div>
    </div>
  );
};
