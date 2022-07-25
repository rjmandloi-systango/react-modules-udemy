import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h1>Electric vehicle</h1>
      <ul>
        <li>
          <Link to="/products/Electric-Trains">Electric Trains</Link>
        </li>
        <li>
          <Link to="/products/Electric-cars">Electric Cars</Link>
        </li>

        <li>
          <Link to="/products/Electric-bikes">Electric Bikes</Link>
        </li>
      </ul>
    </div>
  );
}
