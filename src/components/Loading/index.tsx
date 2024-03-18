import { FC } from "react";
import { Spinner } from "react-bootstrap";
import Styles from './style.module.css';

const Loading: FC = () => {
  return (
    <div className={Styles.containerLoading}>
      <Spinner animation="border" variant="primary" />
      <span className="mt-2">Aguarde...</span>
    </div>
  );
};

export default Loading;
