import React, { FC, useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";
import { ProductComponent } from "../product/product.component";
import { NewProduct } from "../newproduct/newproduct.component";

export const ListOfProducts: FC = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch("http://localhost:3005/products")
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((productsData: ProductModel[]) => setProducts(productsData));
  }, []);
  return (
    <>
      <header>
        <h1> List Of Products</h1>
      </header>

      <div className="row">
        {products.map((product: ProductModel) => (
          <ProductComponent productdetails={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

// Class based

// type ListOfProductsState = {
//   products: ProductModel[];
// };

// export class ListOfProducts extends React.Component<{}, ListOfProductsState> {
//   state: Readonly<ListOfProductsState> = {
//     products: [
//       {
//         id: 1,
//         title: "Macbook Pro",
//         price: 250000,
//         rating: 5,
//         likes: 200,
//         imageUrl:
//           "https://photos5.appleinsider.com/gallery/45240-88149-The-new-MacBook-Pro-16-inch-xl.jpg",
//       },
//       {
//         id: 2,
//         title: "Nikon 7200",
//         price: 200000,
//         rating: 4,
//         likes: 500,
//         imageUrl:
//           "https://i0.wp.com/dailylearn.com/wp-content/uploads/2023/01/How-to-Shoot-Video-on-Your-Nikon-d7200.jpg",
//       },
//       {
//         id: 3,
//         title: "Nikon Alucon",
//         price: 20000,
//         rating: 5,
//         likes: 300,
//         imageUrl:
//           "https://cdn.mos.cms.futurecdn.net/Eio3uWyghbtMGVDzXBWn8T.jpg",
//       },
//       {
//         id: 4,
//         title: "DJI Mavic Pro ",
//         price: 300000,
//         rating: 4,
//         likes: 800,
//         imageUrl:
//           "https://i.pcmag.com/imagery/reviews/06N6X13HBTsCmSsZE18mhOC-16..v1569473679.jpg",
//       },
//       {
//         id: 5,
//         title: "Nikon 200-500 ",
//         price: 300000,
//         rating: 4,
//         likes: 800,
//         imageUrl:
//           "https://www.camocoat.in/wp-content/uploads/2018/09/200-500-mm-f5.6E-ED-VR-for-AF-S-NIKKOR-MWG-H-scaled.jpg",
//       },
//     ],
//   };

//   addNewProduct(newProductToBeAdded: ProductModel): void {
//     // console.log("Add a new product here");
//     // console.log(newProductToBeAdded);
//     this.setState({ products: [...this.state.products, newProductToBeAdded] });
//   }
//   deleteAProduct(productId: number) {
//     this.setState({
//       products: this.state.products.filter(p => p.id != productId),
//     });
//   }
//   render(): React.ReactNode {
//     console.log("Render - List Of Products !");
//     return (
//       <>
//         {/* <NewProduct
//           addNewProduct={(newProduct: ProductModel) =>
//             this.addNewProduct(newProduct)
//           }
//         /> */}
//         <h1> List Of Products</h1>
//         <div className="row">
//           {this.state.products.map((product: ProductModel) => (
//             <ProductComponent
//               productdetails={product}
//               deleteAProductFromParent={(id: number) => this.deleteAProduct(id)}
//               key={product.id}
//             />
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// 1st iteration 1109  2908 3909 4909 9990
// 2nd iteration 2290  2988 6676 7776 8886
