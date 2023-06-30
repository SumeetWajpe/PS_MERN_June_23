// 1st (preferred) using PropWithChildren
import { PropsWithChildren } from "react";

type TitleProps = {
  color?: string;
};

export const Title = (props: PropsWithChildren<TitleProps>) => {
  return <div style={{ color: props.color }}>{props.children}</div>;
};

// 2nd way using ReactNode

// import { FC, ReactNode } from "react";

// type TitleProps = {
//   //   title: string;
//   children: ReactNode;
// };
// export const Title: FC<TitleProps> = (props: TitleProps) => {
//   return <>{props.children}</>;
// };
