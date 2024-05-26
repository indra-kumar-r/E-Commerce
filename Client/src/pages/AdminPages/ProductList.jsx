import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductList = () => {
  let [products, setProducts] = useState([]);
  let [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/product`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Main>
      {products.map((item) => (
        <ProductCard
          key={item._id}
          props={item}
          onClick={() => setSelectedProduct(item)}
        />
      ))}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasProduct"
        aria-labelledby="offcanvasProductLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasProductLabel">
            {selectedProduct ? selectedProduct.pName : ""}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {selectedProduct && (
            <>
              <img src={selectedProduct.pImage} className="img-fluid" />
              <p>
                <span className="text-secondary fw-bold">Price: </span>$
                {selectedProduct.pPrice}
              </p>
              <p>
                <span className="text-secondary fw-bold">Category: </span>
                {selectedProduct.pCategory}
              </p>
              <p>
                <span className="text-secondary fw-bold">Description: </span>
                {selectedProduct.pDesc}
              </p>
              <p>
                <span className="text-secondary fw-bold">Ingredients: </span>
                {selectedProduct.pIngredients}
              </p>
            </>
          )}
          <div className="d-flex justify-content-center">
            <Link
              to={`/edit/${selectedProduct._id}`}
              className="btn btn-dark fw-bold"
            >
              EDIT
            </Link>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default ProductList;

let Main = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  gap: 2rem 1.5rem;
  width: 100%;
  padding: 1rem 1rem 5rem 1rem;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: repeat(auto-fill, minmax(35%, 1fr));
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
`;
