import { FC } from "react";

type TitleProps = {
//   title: string;
  children: any;
};
export const Title: FC<TitleProps> = (props: TitleProps) => {
  return <>{props.children}</>;
};
