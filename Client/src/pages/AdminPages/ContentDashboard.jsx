import AddCategory from "./AddCategory";
import AddProduct from "./AddProduct";
import AddBanner from "./AddBanner";
import styled from "styled-components";
import { useState } from "react";

const ContentDashboard = () => {
  let [component, setComponent] = useState("AddProduct");

  let dashboard = [
    {
      option: "Add Product",
      value: "AddProduct",
    },
    {
      option: "Add Category",
      value: "AddCategory",
    },
    {
      option: "Add Banner",
      value: "AddBanner",
    },
  ];

  const componentMapping = {
    AddProduct: AddProduct,
    AddCategory: AddCategory,
    AddBanner: AddBanner,
  };

  const DynamicComponent = componentMapping[component];

  return (
    <Main>
      <div className="optionBar d-flex gap-2">
        {dashboard.map((item) => (
          <span key={item.option} onClick={() => setComponent(item.value)}>
            {item.option}
          </span>
        ))}
      </div>
      <DynamicComponent />
    </Main>
  );
};

export default ContentDashboard;

const Main = styled.div`
  width: 100%;

  .optionBar {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: darkgray;
      cursor: pointer;
      transition: all 0.2s;
      border-bottom: 0.1rem solid tomato;
      padding: 0.25rem 0;

      &:hover {
        color: tomato;
        transform: translateY(-0.1rem);
      }
    }
  }
`;
