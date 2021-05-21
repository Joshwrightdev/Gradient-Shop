import React from "react";
import Layout from "../shared/Layout";



const NotFound = () => {
  const style = {
    fontWeight: "bold",
    textAlign: "center",
  };
  return (
    <Layout>
      <p style={style}>
        Unfortunately we cannot find the page you are looking for....
      </p>
    </Layout>
  );
};

export default NotFound;
