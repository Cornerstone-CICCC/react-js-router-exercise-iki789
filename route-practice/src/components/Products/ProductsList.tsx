import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductsList = () => {
  const [products, setProducts] = useState<[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const req = await fetch("https://dummyjson.com/products");
      const res = await req.json();
      setProducts(res.products);
      console.log(res);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product?.id}>
              <h2>
                <Link to={`/products/${product?.id}`}>{product?.title}</Link>
              </h2>
              <p>{product?.description}</p>
              <p>Price: ${product?.price}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductsList;
