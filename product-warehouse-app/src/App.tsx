// import { Route } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Warehouses from "./pages/Warehouses";

const App = () => {
  return (
    <Routes>
      <>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/warehouses"
          element={
            <Layout>
              <Warehouses />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    </Routes>
  );
};

export default App;
