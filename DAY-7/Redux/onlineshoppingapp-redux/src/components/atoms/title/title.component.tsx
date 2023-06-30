import { FC, ReactNode } from "react";

type TitleProps = {
  //   title: string;
  children: ReactNode;
};
export const Title: FC<TitleProps> = (props: TitleProps) => {
  return <>{props.children}</>;
};
