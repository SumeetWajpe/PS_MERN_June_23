import { PropsWithChildren } from "react";
type IconProps = {
  classes: string;
  color?: string;
};
export const Icon = (props: PropsWithChildren<IconProps>) => {
  return (
    <i
      className={props.classes}
      aria-hidden="true"
      style={{ color: props.color }}
    >
      {props.children}
    </i>
  );
};
