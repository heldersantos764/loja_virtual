import { FC, useEffect, useState } from "react";
import { ProductType } from "../../typing";
import useProductService from "../../services/product";
import Product from "../Product";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

const ProductList: FC = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);
  const { findAllProducts, findProductsByCotegory } = useProductService();
  const { category } = useParams();

  useEffect(() => {
    const findProducts = async () => {
      let productsList = null;
      setProducts(null);
      if (category) {
        productsList = await findProductsByCotegory(category);
      } else {
        productsList = await findAllProducts();
      }

      productsList != null && setProducts(productsList as ProductType[]);
    };
    console.log(category);
    findProducts();
  }, [category]);

  return (
    <div className="d-flex flex-wrap flex-row gap-2 justify-content-center">
        {
          !products ? (
            <Loading/>
          ) : (
            products?.map((item) => {
              return <Product
                key={item.id}
                id={item.id as string}
                image={item.image}
                title={item.title}
                price={item.price as string}
              />
            })            
          )
        }
    </div>
  );
};

export default ProductList;
