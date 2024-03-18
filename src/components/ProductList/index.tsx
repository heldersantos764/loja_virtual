import { FC, useEffect, useState } from "react";
import { ProductType } from "../../typing";
import useProductService from "../../services/product";
import Product from "../Product";

const ProductList: FC = () => {
  const [products, setProducts] = useState<ProductType[]>();
  const { findAllProducts } = useProductService();

  useEffect(() => {
    const findProducts = async () => {
      const productsList = await findAllProducts();
      setProducts(productsList);
    };

    findProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap flex-row gap-4 justify-content-center">
      {products?.map((item) => {
        return (
          <Product
            key={item.id}
            id={item.id as string}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price as string}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
