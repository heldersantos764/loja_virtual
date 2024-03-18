import { FC, useEffect, useState } from "react";
import { ProductType } from "../../typing";
import useProductService from "../../services/product";
import { useParams } from "react-router-dom";
import Style from "./styles.module.css";

interface Props {}

const ProductDetails: FC<Props> = (props) => {
  const [product, setProduct] = useState<ProductType>();
  const { findProductById } = useProductService();
  const { id } = useParams();

  useEffect(() => {
    const findProducts = async () => {
      const productsList = await findProductById(id as string);
      setProduct(productsList);
    };

    findProducts();
  }, []);

  return (
    <div className="row">
      <div className="col col-4">
        <img src={product?.image} alt="" className={Style.img}/>
      </div>
      <div className="col col-8">
        <h1>{product?.title}</h1>
        <h2 className="text-primary">$ {product?.price}</h2>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
