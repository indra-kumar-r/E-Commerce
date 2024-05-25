import { useEffect, useState } from "react";
import styled from "styled-components";

const AddCategory = () => {
  let [name, setName] = useState("");
  let [image, setImage] = useState("");
  let [categoryData, setCategoryData] = useState([]);

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`http://localhost:5000/category`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          image,
        }),
      });
      if (response.ok) {
        let newCategory = await response.json();
        setCategoryData([...categoryData, newCategory]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((response) => response.json())
      .then((data) => {
        setCategoryData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Main className="row">
      <div className="col mt-5 d-flex justify-content-center align-items-start">
        <form onSubmit={addCategory}>
          <div className="text-secondary fw-bold fs-6 text-center mb-3 text-uppercase">
            Add Category
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="cName"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="floatingInput">Category</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="cImage"
              placeholder=""
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="cImage">Image</label>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-dark">
              ADD
            </button>
          </div>
        </form>
      </div>
      <div className="col mt-5 d-flex justify-content-start align-items-center flex-column">
        <span className="text-secondary fw-bold fs-4">CATEGORIES</span>
        <div className="categoryDiv">
          {categoryData.map((item) => (
            <div
              key={item._id}
              className="d-flex flex-column customCategoryDiv"
            >
              <img src={`${item.categoryImage}`} className="img-fluid" />
              <div className="text-secondary text-center">
                {item.categoryName}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default AddCategory;

const Main = styled.div`
  height: 100vh;
  padding: 2rem 0 1rem 0;
  overflow: hidden;

  form {
    width: 60%;

    input:focus {
      outline: none;
      box-shadow: none;
    }
  }

  .categoryDiv {
    width: 100%;
    height: 80vh;
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    overflow: hidden;
    overflow-y: auto;
    padding: 1rem;
  }

  .customCategoryDiv {
    width: 10rem;
    height: 12rem;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 80%;
      object-fit: cover;
      border: 0.01rem solid lightgray;
      border-radius: 50%;
    }

    .text-secondary {
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
