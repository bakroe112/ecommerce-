import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Layout, Shop } from "./router";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
