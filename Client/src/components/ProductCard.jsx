import styled from "styled-components";

const ProductCard = ({ props, onClick }) => {
  return (
    <Card
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasProduct"
      aria-controls="offcanvasProduct"
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={`${props.pImage}`}
        alt=""
        className="img-fluid"
      />
      <span className="text-center text-dark">{props.pName}</span>
    </Card>
  );
};

export default ProductCard;

let Card = styled.div`
  width: 100%;
  border-bottom: 0.01rem solid violet;
  border-radius: 0.25rem;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  transition: all 0.25s;

  &:hover {
    box-shadow: 0.25rem 0.25rem 0 plum, -0.25rem -0.25rem 0 lightgray;

    img {
    }
  }
`;
