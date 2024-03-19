import { FC, ReactNode } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

interface DefaultLayoutProps {
  children: ReactNode;
  title?: string;
  hasBackButtom?: boolean;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  title = 'Produtos',
  hasBackButtom = false,
}) => {
  const navigate = useNavigate();

  const handleOnClickBackPage = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="py-3 fs-4">
          {hasBackButtom && (
            <button
              className="btn btn-primary me-3"
              onClick={handleOnClickBackPage}
            >
              Voltar
            </button>
          )}
          {title}
        </div>
        <div className="p-4 bg-light shadow-sm mb-4 rounded-2">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
