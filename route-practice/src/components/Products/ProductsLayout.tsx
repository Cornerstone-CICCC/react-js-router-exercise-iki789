import { Outlet } from "react-router-dom";
import Header from "../Header";

const ProductsLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProductsLayout;
