import { PropsWithChildren } from "react";
import { CartCollection } from "../../organisms/cartcollection/cartcollection.component";
import { Title } from "../../atoms/title/title.component";

export const CartSummary = (props: PropsWithChildren) => {
  return (
    <>
      <Title>
        <header>
          <h1>Cart Summary</h1>
        </header>
      </Title>
      <CartCollection></CartCollection>
    </>
  );
};
