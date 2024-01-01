import React, { forwardRef } from "react";

import clsx from "clsx";
import * as styles from "./styles.css";

type LinkProps<T extends React.ElementType = "a"> =
    React.ComponentPropsWithoutRef<T> &
    styles.LinkVariants;

type LinkComponent = <T extends React.ElementType = "a">(
  props: LinkProps<T> & {
    ref?: React.ComponentPropsWithRef<T>["ref"];
  }
) => React.ReactNode | null;

export const Link: LinkComponent = forwardRef(
  <T extends React.ElementType = "a">(
    {
      size = "caption1",
      underline = "none",
      accent,
      children,
      ...props
    }: React.PropsWithChildren<LinkProps<T>>,
    ref: React.ComponentPropsWithRef<T>["ref"]
  ) => {
    const className = clsx(
      styles.link({
        size,
        accent,
        underline,
      })
    );

    return (
      <a className={className} ref={ref} {...props}>
        {children}
      </a>
    );
  }
);
