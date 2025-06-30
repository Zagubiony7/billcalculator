import type { ReactNode } from "react";

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement>;

//@ BillProps / LeftSide
export interface BillProps extends InputAttributes {
  bill: number;
}
//@ SelectTipProps / LeftSide
export interface SelectTipProps extends InputAttributes {
  tip: number;
  onHandleTip: (arg: string) => void;
}
//@ NumberOfPeople / LeftSide
export interface NumberOfPeopleProps extends InputAttributes {
  numPeople: number;
}
//@ LeftSide / RightSide
export interface Side {
  children: ReactNode;
}

//@ InfoProps / Global
export interface InfoProps {
  price?: string | number;
  children: ReactNode;
}
//@ BoxProps / Global
export interface BoxProps extends InputAttributes {
  children: ReactNode;
}
//@ ButtonProps / Global
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
// DATA
export const SPLIT_OPTIONS: string[] = ["5%", "10%", "15%", "25%", "50%"];
export const MAX_BILL: number = 10000;
export const MAX_TIP: number = 100;
export const MAX_PEOPLE: number = 10;
