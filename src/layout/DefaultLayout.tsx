import { FC, ReactNode } from "react";
import Header from "../components/Header";
import { useLayout } from "../contexts/LayoutContext";
import Loading from "../components/Loading";
import PageTitle from "../components/PageTitle";

interface DefaultLayoutProps {
  children: ReactNode;
  title: string;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children, title }) => {
  const { isLoading } = useLayout();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <div className="container">
            <PageTitle label={title} />
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default DefaultLayout;
