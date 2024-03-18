import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

interface ProductProps {
  id: string;
  title: string;
  price: string;
  image: string;
  description: string;
}

const Product: FC<ProductProps> = (props) => {
  const { id, title, price, image, description } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div className="fs-3 fw-bold text-primary py-1">$ {price}</div>
          {description}
        </Card.Text>
        <Link to={`/products/${id}`} className="btn btn-primary">Ver mais</Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
