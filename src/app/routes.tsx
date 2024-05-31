import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../page/home";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
