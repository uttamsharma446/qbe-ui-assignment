import React, { ReactNode } from "react";

export interface ToggleButtonGroupProps {
  value: string;
  onChange: (value: string) => void;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ToggleButtonProps {
  value: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
