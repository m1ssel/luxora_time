import React from "react";

import { useParams } from "react-router-dom";

import db from "../../assets/db.json";

import "./product-info.scss";

const ProductInfo = () => {
  const { name } = useParams();

  const anyWatch = db.find((item) => item.name === name);

  const excludedKeys = ["id", "img", "brand", "name", "price", "color", "text"];

  const formatKey = (key) => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <div className="product-info-container">
      <div className="spec-container">
        <h2 className="spec-main-text">Product Specification</h2>
        <table className="spec-table">
          {Object.entries(anyWatch)
            .filter(([key]) => !excludedKeys.includes(key))
            .map(([key, value]) => (
              <tr key={key} className="table-row">
                <td>{formatKey(key)}:</td>
                <td>{value}</td>
              </tr>
            ))}
        </table>
      </div>
      <div className="descr-container">
        <h2 className="descr-main-text">Description</h2>
        <p
          dangerouslySetInnerHTML={{ __html: anyWatch.text }}
          className="descr-text"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
