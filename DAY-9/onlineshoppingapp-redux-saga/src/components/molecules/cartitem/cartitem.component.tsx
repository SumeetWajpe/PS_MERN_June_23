import { PropsWithChildren } from "react";

export const CartItem = (props: PropsWithChildren) => {
  return (
    <div
      className="d-flex col-md-8 justify-content-between align-items-center p-2"
      style={{ boxShadow: "5px 5px 5px grey", border: "1px solid rey" ,borderRadius:"5px" }}
    >
      {props.children}
    </div>
  );
};
