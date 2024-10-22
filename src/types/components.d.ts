import { FormikProps } from "formik";
import React from "react";

export interface ButtonComponentProps {
  img?: React.ReactElement;
  icon?: React.ReactElement;
  small?: boolean;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  styleButton?: string;
  eventButton?: () => void;
  children: React.ChildContextProvider;
}

export interface FabComponentProps {
  text: string;
  icon: React.ReactElement;
  eventButton?: () => void;
}

export interface MoreButtonComponentProps {
  eventFunction?: () => void;
}

export interface CounterButtonComponentProps {
  children: React.ChildContextProvider;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  styleButton?: string;
}

export interface InputComponentProps {
  label?: string;
  type: string;
  name?: string;
  icon?: React.ReactElement;
  formik?: FormikProps;
  disabled?: boolean;
  placeholder?: string;
}

export interface SearchComponentProps {
  iconLeft: React.ReactElement;
  iconRight: React.ReactElement;
  placeholder: string;
}

export interface SelectComponentProps {
  name: string;
  label?: string;
  formik?: FormikProps;
  options: Array[{ value: string; text: string }];
  eventFunction?: (value) => void;
}

export interface SwtichTabComponentProps {
  icon?: React.ReactElement;
  styleText?: string;
  styleSwitchTab?: string;
}

export interface PillComponentProps {
  icon: React.ReactElement;
  text: string;
  stylePill: string;
  styleText: string;
}

export interface ChipTapComponentProps {
  children: React.ChildContextProvider;
  styleChipTap: string;
}

export interface ProgressComponentProps {
  max: string;
  value: string;
}

export interface SwitchIconComponentProps {
  icon: React.ReactElement;
  styleSwitchIcon: string;
}
