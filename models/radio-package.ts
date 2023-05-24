import { ComponentProps } from "react";

export type RadioPackageProps = {
  name: string;
  onChange: (value: string) => void;
  selected: boolean;
  title: string;
  price: number;
  description: string;
  details: string;
  value: string;
};
