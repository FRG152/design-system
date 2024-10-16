import React from "react";

export interface ButtonComponentProps {
  type: "button" | "submit" | "reset"; // Especificar los tipos válidos
  text: string;
  style?: React.CSSProperties;
  disabled: boolean;
  eventButton: () => void;
}

export interface InputComponentProps {
  label?: string;
  type: string;
  name: string;
  formik: any;
  disabled: boolean;
  placeholder?: string;
}

export interface SelectComponentProps {
  name: string;
  label?: string;
  formik: any;
  options: Array[{ value: string; text: string }];
  eventSelect: (value) => void;
}

export interface SearchComponentProps {
  style?: React.CSSProperties;
  placeholder: string;
  eventSearch?: (e: e) => void;
}
