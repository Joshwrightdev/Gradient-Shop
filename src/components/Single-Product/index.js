import React, { useContext, useState } from "react";
import { withRouter } from "react-router-dom";
import { ProductsContext } from "../../context/products-context";
import Layout from "../shared/Layout";
import "./SingleProduct.scss";

const SingleProduct = ({ match, history }) => {
  const { products } = useContext(ProductsContext);
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const product = products.find((item) => Number(item.id) === Number(id));
    return () => {
      cleanup;
    };
  }, [input]);
};
