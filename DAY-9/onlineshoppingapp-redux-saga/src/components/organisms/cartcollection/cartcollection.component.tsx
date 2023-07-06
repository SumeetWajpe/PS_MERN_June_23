import { PropsWithChildren } from "react";
import { AppState } from "../../../redux/store/store";
import { useSelector } from "react-redux";
import { ProductModel } from "../../../models/product.model";
import { CartItem } from "../../molecules/cartitem/cartitem.component";
import { Image } from "../../atoms/image/image.component";
import { Title } from "../../atoms/title/title.component";
import { Rating } from "../../rating/rating.component";
import { Text } from "../../atoms/text/text.component";
import { Icon } from "../../atoms/icon/icon.component";

export const CartCollection = (props: PropsWithChildren) => {
  let cart = useSelector((store: AppState) => store.cart);

  return (
    <div className="row justify-content-center p-2">
      {cart.map((ci: ProductModel) => (
        <CartItem>
          <Image>
            <img src={ci.imageUrl} width="350px" className="img-thumbnail" />
          </Image>
          <div>
            <Title>
              <h5>{ci.title}</h5>
            </Title>
            <Rating numberofstars={ci.rating} />
            <Text>
              <p className="m-0">₹. {ci.price}</p>
            </Text>
            <Text>
              <p className="m-0"> Likes : {ci.likes}</p>
            </Text>
          </div>
          <Icon classes="fa-solid fa-trash" color="#dc3545"></Icon>
        </CartItem>
      ))}
    </div>
  );
};
