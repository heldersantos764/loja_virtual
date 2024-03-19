import { FC, useEffect, useState } from "react";
import { ProductType } from "../../typing";
import useProductService from "../../services/product";
import Product from "../Product";
import Loading from "../Loading";

const ProductList: FC = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const { findAllProducts } = useProductService();

  useEffect(() => {
    const findProducts = async () => {
      const productsList = await findAllProducts();
      productsList != null && setProducts(productsList as ProductType[]);
    };

    findProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap flex-row gap-2 justify-content-center">
      {!products ? (
        <Loading />
      ) : (
        products?.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id as string}
              image={item.image}
              title={item.title}
              price={item.price as string}
            />
          );
        })
      )}
    </div>
  );
};

export default ProductList;
