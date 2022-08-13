export interface StepsData {
  title: string;
  icon?: JSX.Element;
}
export interface StepperProps {
  data: StepsData[];
  activeStep: number;
}
