import { useState } from "react";
import styled from "styled-components";

const AddProduct = () => {
  const [pName, setPname] = useState("");
  const [pDesc, setPdesc] = useState("");
  const [pCategory, setPcategory] = useState("");
  const [pIngredients, setPingredients] = useState("");
  const [pPrice, setPprice] = useState("");
  const [pImage, setPimage] = useState("");

  const fetchData = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:5000/product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pName,
          pDesc,
          pCategory,
          pIngredients,
          pPrice,
          pImage,
        }),
      });
      let data = await response.json();
      if (response.ok) {
        alert(data.message);
      }
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleReset = () => {
    setPname("");
    setPdesc("");
    setPcategory("");
    setPingredients("");
    setPprice("");
    setPimage("");
  };

  return (
    <>
      <Productform className="row">
        <div className="col-6 d-flex flex-column justify-content-start align-items-center gap-2 sticky-top">
          <span className="fs-3 fw-bold">ADD PRODUCT</span>
          <form
            onSubmit={fetchData}
            className="form d-flex flex-column justify-content-center align-items-center"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="p-name"
                placeholder=""
                value={pName}
                onChange={(e) => setPname(e.target.value)}
                required
              />
              <label htmlFor="p-name">Product Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="p-description"
                placeholder=""
                value={pDesc}
                onChange={(e) => setPdesc(e.target.value)}
                required
              />
              <label htmlFor="p-description">Product Description</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="p-category"
                placeholder=""
                value={pCategory}
                onChange={(e) => setPcategory(e.target.value)}
                required
              />
              <label htmlFor="p-category">Product Category</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="p-ingredients"
                placeholder=""
                value={pIngredients}
                onChange={(e) => setPingredients(e.target.value)}
                required
              />
              <label htmlFor="p-ingredients">Product Ingredients</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="p-price"
                placeholder=""
                value={pPrice}
                onChange={(e) => setPprice(e.target.value)}
                required
              />
              <label htmlFor="p-price">Product Price</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="p-image"
                placeholder=""
                value={pImage}
                onChange={(e) => setPimage(e.target.value)}
                required
              />
              <label htmlFor="p-image">Product Image</label>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-dark mt-2">
                ADD
              </button>
              <button
                type="reset"
                className="btn btn-dark mt-2"
                onClick={handleReset}
              >
                <i className="bi bi-arrow-clockwise"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="col-6 d-flex flex-column justify-content-start align-items-center gap-2 overflow-auto">
          <span className="fs-3 fw-bold">PREVIEW</span>
          <div className="row">
            <div className="col d-flex align-items-center justify-content-center">
              <img
                src={pImage}
                width="70%"
                height="30%"
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="row preview">
            <div className="col d-flex justify-content-start align-items-center gap-2 flex-column">
              <span>{`Name: ${pName}`}</span>
              <span>{`Description: ${pDesc}`}</span>
              <span>{`Price: $${pPrice}`}</span>
              <span>{`Ingredients: ${pIngredients}`}</span>
              <span>{`Category: ${pCategory}`}</span>
            </div>
          </div>
        </div>
      </Productform>
    </>
  );
};

export default AddProduct;

const Productform = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;

  .sticky-top {
    position: sticky;
    top: 0;
  }

  .overflow-auto {
    height: 100%;
    overflow-y: auto;
  }

  form {
    width: 60%;

    .form-floating {
      width: 100%;
    }

    input {
      width: 100%;

      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  .preview {
    span {
      padding: 0 0.5rem;
      min-width: 100%;
      text-align: justify;
      color: black;
      border-left: 0.15rem solid darkgray;
    }
  }
`;
