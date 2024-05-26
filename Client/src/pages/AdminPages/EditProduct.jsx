import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditProduct = () => {
  let { productId } = useParams();
  let [productData, setProductData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/singleproduct/${productId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [productId]);

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/product/${productId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Successfully deleted");
        navigate(-1);
      } else {
        const errorData = await response.json();
        console.log("Failed to delete:", errorData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Main>
        <div>
          <span
            className="btn btn-dark mb-3"
            onClick={() => window.history.back()}
          >
            BACK <i className="bi bi-arrow-left-circle"></i>
          </span>
        </div>
        <span className="fs-2 fw-bold text-secondary">{productData.pName}</span>
        <div className="imgDiv">
          <img
            className="img-fluid"
            src={productData.pImage}
            alt={productData.pName}
          />
        </div>
        <div>
          <span className="fs-6 fw-bold text-secondary">
            ${productData.pPrice}
          </span>{" "}
          /{" "}
          <span className="fs-6 fw-bold text-secondary">
            {productData.pCategory}
          </span>
        </div>
        <div className="fs-6 fst-italic text-secondary">
          <span className="fw-bold">Description:</span> {productData.pDesc}
        </div>
        <div className="fs-6 fst-italic text-secondary">
          <span className="fw-bold">Ingredients: </span>
          {productData.pIngredients}
        </div>
        <div className="edit_btns mt-3">
          <button className="btn btn-danger" onClick={deleteProduct}>
            DELETE
          </button>
        </div>
      </Main>
    </>
  );
};

export default EditProduct;

const Main = styled.div`
  height: 100vh;
  padding: 1rem;

  .imgDiv {
    height: 20rem;
    /* overflow: hidden; */
    /* overflow-y: auto; */

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
`;
