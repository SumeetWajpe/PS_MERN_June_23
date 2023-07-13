import React, { FC } from "react";

type RatingProps = {
  numberofstars: number;
  color?: string;
};

export const Rating: FC<RatingProps> = (props: RatingProps) => {
  let ratings: React.ReactNode[] = [];
  for (let i = 0; i < props.numberofstars; i++) {
    ratings.push(
      <i
        className="fa fa-star"
        style={{ color: props.color ? props.color : "orange" }}
        aria-hidden="true"
        key={i}
      ></i>,
    );
  }
  return <>{ratings}</>;
};
