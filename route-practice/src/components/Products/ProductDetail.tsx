import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const req = await fetch(`https://dummyjson.com/products/${id}`);
      const res = await req.json();
      setProduct(res);
      console.log(res);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {product === null ? (
        <p>Loading product...</p>
      ) : (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
