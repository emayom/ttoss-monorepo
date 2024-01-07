import React, { forwardRef, useEffect, useState } from "react";

import { Box } from "../Box";
import { Typography } from "../Typography";

import clsx from "clsx";
import * as styles from "./styles.css";
import { theme } from "../../styles/theme.css";

import CheckLineSVG from "../../assets/check-line.svg?react";
import RatioBtnSVG from "../../assets/ratio-button.svg?react";

type CheckboxProps<T extends React.ElementType = "span"> =
  React.ComponentPropsWithoutRef<T> &
    styles.CheckboxVariants & {
      label?: string;
      checked?: boolean;
      disabled?: boolean;
      startIcon?: React.ReactNode;
      endIcon?: React.ReactNode;
      onChange?: () => void;
    };

type CheckboxComponent = <T extends React.ElementType = "span">(
  props: CheckboxProps<T> & {
    ref?: React.ComponentPropsWithRef<T>["ref"];
  }
) => React.ReactNode | null;

export const Checkbox: CheckboxComponent = forwardRef(
  <T extends React.ElementType = "span">(
    {
      size = "s",
      label,
      checked,
      disabled,
      startIcon,
      endIcon,
      onChange,
      ...props
    }: CheckboxProps<T>,
    ref: React.ComponentPropsWithRef<T>["ref"]
  ) => {
    const Component: React.ElementType = label ? "label" : Box;

    const [isChecked, setIsChecked] = useState((checked && checked) || false);

    const CheckStateTable = {
      true: <CheckLineSVG style={{ background: theme.text.primary }} />,
      false: <RatioBtnSVG />,
    };

    const className = clsx(
      styles.checkbox({
        size,
      })
    );

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (!disabled) setIsChecked(!isChecked);
      e.preventDefault();
    };

    useEffect(() => {
      if (onChange) onChange();
    }, [isChecked, onChange]);

    return (
      <Component className={className} onClick={handleClick} {...props}>
        {startIcon}
        <Box className={styles.inputContainer}>
          <input
            type="checkbox"
            className={styles.input}
            checked={isChecked}
            disabled={disabled}
            ref={ref}
            readOnly
          />
          <div className={styles.iconWrap}>
            {CheckStateTable[`${!disabled && isChecked}`]}
          </div>
        </Box>
        {Boolean(label) && (
          <Typography component="span" variant="caption1">
            {label}
          </Typography>
        )}
        {endIcon}
      </Component>
    );
  }
);
