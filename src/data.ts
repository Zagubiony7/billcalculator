import type { ReactNode } from "react";

export interface BoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number;
  children: ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export interface RightSideProps {
  children: ReactNode;
}

export interface InfoProps {
  price?: string | number;
  children: ReactNode;
}

export interface LeftSideProps {
  children: ReactNode;
}

export interface SelectTipProps extends React.InputHTMLAttributes<HTMLInputElement> {
  tip: number;
  onHandleTip: (arg: string) => void;
}

// DATA
export const SPLIT_OPTIONS: string[] = ["5%", "10%", "15%", "25%", "50%"];
