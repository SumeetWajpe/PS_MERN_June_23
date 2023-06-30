import { FC } from "react";

type TitleProps = {
  title: string;
};
export const Title: FC<TitleProps> = (props: TitleProps) => {
  return <h5>{props.title}</h5>;
};
