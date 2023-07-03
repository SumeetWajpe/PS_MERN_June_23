import { useForm } from "react-hook-form";
import { ProductModel } from "../../models/product.model";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../redux/reducers/products.reducer";

type ProductInput = {
  ProductId: number;
  ProductTitle: string;
  ProductPrice: number;
  ProductRating: number;
  ProductLikes: number;
  ProductImageUrl: string;
  ProductDescription: string;
};

export const NewProduct: React.FC = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductInput>({ mode: "onChange" });
  return (
    <>
      <div>
        <h1>New Product</h1>
        <div className="d-flex justify-content-center align-items-center">
          <form
            onSubmit={handleSubmit((data: ProductInput) => {
              let newProduct: ProductModel = new ProductModel(
                +data.ProductId,
                data.ProductTitle,
                +data.ProductPrice,
                +data.ProductLikes,
                +data.ProductRating,
                data.ProductImageUrl,
                data.ProductDescription,
              );

              dispatch(addNewProduct(newProduct));
              // fetch("http://localhost:3005/products", {
              //   method: "POST",
              //   headers: { "Content-Type": "application/json" },
              //   body: JSON.stringify(newProduct),
              // })
              //   .then(res => res.json())
              //   .then(product => {
              //     if (product) {
              //       navigate("/");
              //     }
              //   });
            })}
          >
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductId">Id : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductId"
                  {...register("ProductId", { required: true })}
                />
                {errors.ProductId && (
                  <p style={{ color: "red" }}> Id required !</p>
                )}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductTitle">Title : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  id="txtProductTitle"
                  placeholder="Max 20 chars"
                  {...register("ProductTitle", {
                    required: true,
                    maxLength: {
                      value: 20,
                      message: "You exceeded 20 char limit !",
                    },
                  })}
                />
                {errors.ProductTitle && (
                  <p style={{ color: "red" }}>
                    {" "}
                    {errors.ProductTitle.type === "maxLength"
                      ? errors.ProductTitle.message
                      : "Title required !"}
                  </p>
                )}
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductPrice">Price : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductPrice"
                  {...register("ProductPrice")}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductRating">Rating : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductRating"
                  {...register("ProductRating")}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductLikes">Likes : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="number"
                  id="txtProductLikes"
                  {...register("ProductLikes")}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductImageUrl">Image : </label>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  id="txtProductImageUrl"
                  {...register("ProductImageUrl")}
                />
              </div>
            </div>
            <div className="row my-1">
              <div className="col-md-4">
                <label htmlFor="txtProductDescription">Description : </label>
              </div>
              <div className="col-md-4">
                {/* <input
                  type="text"
                  id="txtProductDescription"
                  {...register("ProductDescription")}
                /> */}

                <textarea
                  id=""
                  cols={30}
                  rows={5}
                  {...register("ProductDescription")}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9">
                <button className="btn btn-success">
                  Add new product{" "}
                  <i className="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
