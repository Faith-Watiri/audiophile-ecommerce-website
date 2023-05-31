import React from "react";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";
const ProductReview = ({ dir, description, isNew, name, image, slug }) => {
  const navigate = useNavigate();
  const handleSeeProduct = () => {
    navigate(`${slug}`);
  };
  return (
    <article className={`productReview productReview--${dir}`}>
      <div className="productReview__imageContainer">
        <picture>
          <source srcset={image.mobile} media="(max-width: 600px)" />
          <source srcset={image.tablet} media="(max-width: 900px)" />
          <img
            className="productReview__image"
            src={image.desktop}
            alt="product review"
          />
        </picture>
      </div>

      <div className="productReview__textBox">
        {isNew && <p className="text--overline">new product</p>}
        <h2 className="heading--2">{name}</h2>
        <p className="body">{description}</p>
        <Button
          type={"primary"}
          label={"see product"}
          onClick={handleSeeProduct}
        />
      </div>
    </article>
  );
};

export default ProductReview;
