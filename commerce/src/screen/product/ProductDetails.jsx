import { useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import {
  BodyOne,
  Caption,
  Title,
} from "../../components/common/CustomComponents";
import { RenderRatingStarts } from "../../components/product/ProductCard";
import { useState } from "react";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

export const ProductDetails = () => {
  const { productId } = useParams();
  const product = productlists.find(
    (product) => product.id === parseInt(productId)
  );
  const { title, images, price, description, discount, rating, color } =
    product;
  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedColor, setselectedColor] = useState(color[0].value);
  const [selectedPrice, setselectedPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = price.find((price) => price.color === color);
    setselectedColor(color);
    setselectedPrice(newSelectedPrice);
  };
  return (
    <>
      <section className="container mt-32 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="images lg:w-1/2">
            <div>
              {images.map((image, index) => (
                <img
                  src={image.image}
                  key={index}
                  className="size-full"
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="details lg:w-1/2 px-16 pt-16">
            <button className="feature-btn bg-indigo-500">
              SALE {discount}% OFF
            </button>
            <Title level={2} className={"my-2"}>
              {title}
            </Title>
            <div className="flex items-center gap-2 -mt-5 mb-5 ">
              <div className="flex items-center gap-1">
                {RenderRatingStarts(rating)}
              </div>
              <p>{rating} Review</p>
            </div>
            <p className="text-[15px]">{description}</p>
            <br />
            <div>
              <Caption>Color</Caption>
              <div className="flex items-center gap-3 mt-5">
                {color.map((colorOption, index) => (
                  <div
                    onClick={() => handleColorClick(colorOption.value)}
                    key={index}
                    className={`size-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${
                      selectedColor === colorOption.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: colorsValue[colorOption.value] }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <Caption>Prices</Caption>
              <div className="flex items-center gap-3">
                <BodyOne className={"line-through mt-4"}>
                  {selectedPrice.value}
                </BodyOne>
                <Title level={4} className={"text-primary-green"}>
                  ${" "}
                  {(
                    selectedPrice.value -
                    (selectedPrice.value * discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
