import clsx from "clsx";
import * as styles from "./styles.css";

export const DEFAULT = "div" as const;

export type BadgeProps<T extends React.ElementType> = {
  size: Exclude<keyof typeof styles.badge, "accent">;
  accent?: boolean;
  component?: T;
} & React.ComponentPropsWithoutRef<T>;

export const Badge = <T extends React.ElementType = typeof DEFAULT>({
  size,
  accent,
  children,
  component,
  ...props
}: React.PropsWithChildren<BadgeProps<T>>) => {
  const Component = component || DEFAULT;
  const className = clsx(
    styles.base,  /** badge base style */
    styles.badge[size], /** size style */
    accent && styles.badge.accent /** accent bg/color style */
  );

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};
