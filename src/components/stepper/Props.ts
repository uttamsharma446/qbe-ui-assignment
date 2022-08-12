export interface StepsData {
  title: string;
  icon?: JSX.Element;
}
export interface StepperProps {
  data: StepsData[];
  onChange: (data: StepsData) => void;
  value: StepsData[];
}
