import { FC, useEffect, useState } from "react";
import { ProductType } from "../../typing";
import useProductService from "../../services/product";
import { useParams } from "react-router-dom";
import Style from "./styles.module.css";
import { formatCurrency } from "../../util";
import Loading from "../../components/Loading";

interface Props {}

const ProductDetails: FC<Props> = (props) => {
  const [product, setProduct] = useState<ProductType | null >(null);
  const { findProductById } = useProductService();
  const { id } = useParams();

  useEffect(() => {
    const findProducts = async () => {
      const productsList = await findProductById(id as string);
      setProduct(productsList as ProductType);
    };

    findProducts();
  }, []);

  return (
    <>
      {!product ? (
        <Loading/>
      ) : (
        <div className="row p-3 bg-light rounded-2">
          <div className="col col-4">
            <img src={product?.image} alt="" className={Style.img} />
          </div>
          <div className="col col-8">
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>
            <h2 className="text-primary">
              {product?.price && formatCurrency(product?.price as string)}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
