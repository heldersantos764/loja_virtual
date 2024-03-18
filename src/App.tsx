import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LayoutProvider } from "./contexts/LayoutContext";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <LayoutProvider>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout title="Início">
                <Home />
              </DefaultLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LayoutProvider>
    </BrowserRouter>
  );
};

export default Router;
