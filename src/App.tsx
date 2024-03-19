import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LayoutProvider } from "./contexts/LayoutContext";
import ProductDetails from "./pages/ProductDetails";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
           <Route
            path="/home/:category"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          />
          <Route path="/products/:id" element={
            <DefaultLayout title="Detalhes do Produto" hasBackButtom={true}>
              <ProductDetails/>
            </DefaultLayout>
          }/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutProvider>
    </BrowserRouter>
  );
};

export default Router;
