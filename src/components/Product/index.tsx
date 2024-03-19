import { FC } from "react";
import { Card } from "react-bootstrap";
import Style from "./style.module.css";
import { formatCurrency, limitCharacters } from "../../util";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  id: string;
  title: string;
  price: string;
  image: string;
}

const Product: FC<ProductProps> = (props) => {
  const { id, title, price, image } = props;
  const navigate = useNavigate();

  const handleClickOpenProduct = () : void => {
    navigate(`/products/${id}`);
  }

  return (
    <Card className={Style.card} onClick={handleClickOpenProduct}>
      <div className={Style.containerImg}>
        <img src={image} alt="" className={Style.img} />
      </div>
      <Card.Body>
        <Card.Text className="d-flex flex-column">
          <span className={Style.title}>{limitCharacters(title, 30)}</span>
          <span className={`fs-3 fw-bold text-primary py-1 ${Style.price}`}>
            {formatCurrency(price)}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
