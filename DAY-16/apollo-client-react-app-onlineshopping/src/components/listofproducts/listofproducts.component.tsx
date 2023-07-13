import { FC, useEffect, useState } from "react";
import { ProductModel } from "../../models/product.model";
import { ProductComponent } from "../product/product.component";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphql/querries";
export const ListOfProducts: FC = () => {
  const PAGE_SIZE = 4;
  const [page, setPage] = useState(0);
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS, {
    variables: {
      limit: PAGE_SIZE,
      offset: PAGE_SIZE * page,
    },
  });

  return (
    <div>
      <header>
        <h1> List Of Products</h1>
      </header>

      {loading ? (
        "Loading.."
      ) : (
        <div>
          <div className="row">
            {data?.products?.map((product: ProductModel) => (
              <ProductComponent productdetails={product} key={product.id} />
            ))}
          </div>
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              disabled={!page}
              onClick={() => setPage(prev => prev - 1)}
            >
              Prev
            </button>
            <div>Page - {page + 1}</div>
            <button
              className="btn btn-primary"
              onClick={() => setPage(prev => prev + 1)}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
