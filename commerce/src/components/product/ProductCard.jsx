import React, { useState } from "react";
import { IoMdHeart } from "react-icons/io";
import { IoCart, IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BodyOne, Title } from "../common/CustomComponents";
import {
  FaFacebookF,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
  FaTwitter,
} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {} from "react-icons/io5";
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux/slide/cartSlice";
import { favoritesAction } from "../../redux/slide/favoriteSlice";

export const RenderRatingStarts = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStars = rating % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} color="#ff8a00" />);
    } else if (hasHalfStars && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key="half-star" color="#ff8a00" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ff8a00" />);
    }
  }

  return stars;
};

export const ProductCard = ({
  id,
  key,
  title,
  description,
  images,
  price,
  discount,
  rating,
  featured,
  category,
  color,
}) => {
  const [isModelOpen, setisModelOpen] = useState(false);
  const dispatch = useDispatch();

  const openModel = () => {
    setisModelOpen(true);
  };
  const closeModel = () => {
    setisModelOpen(false);
  };

  const discountPrice = price[0].value - (price[0].value * discount) / 100;
  const addToCart = () => {
    dispatch(
      cartAction.addToCart({ id, name: title, price: discountPrice, images })
    );
  };
  const addToFavorites = () => {
    dispatch(
      favoritesAction.addToFavorites({
        id,
        name: title,
        price: discountPrice,
        images,
      })
    );
  };
  return (
    <>
      <div className="product card">
        <div className="images h-96">
          {images.map((cover, index) => (
            <img
              key={index}
              src={cover?.image}
              alt=""
              className="size-full object-cover"
            />
          ))}
          <div className="flex justify-between w-full p-5 absolute top-0 left-0 ">
            {discount && <button className="discount-btn">{discount}%</button>}
            {featured && (
              <button className="feature-btn">
                {featured === true && "Featured"}
              </button>
            )}
          </div>
          <div className="overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5">
            <button
              onClick={openModel}
              className="quick-view-btn product-btn primary-btn"
            >
              Quick View
            </button>
            <button
              onClick={addToCart}
              className="add-to-card-btn product-btn primary-btn"
            >
              <IoCart size={23} />
            </button>
            <button
              onClick={addToFavorites}
              className="love-btn product-btn primary-btn"
            >
              <IoMdHeart size={23} />
            </button>
          </div>
        </div>

        <div className="details flex items-center flex-col bg-white pt-6">
          <NavLink to={`/product-details/${id}`}>
            <BodyOne>{title}</BodyOne>
          </NavLink>
          <div className="flex items-center gap-2 -mt-2 mb-2">
            {RenderRatingStarts(rating)}
          </div>
          <div className="flex items-center gap-3">
            {price.slice(0, 1).map((priceItem, index) => (
              <>
                <BodyOne className="line-through" key={index}>
                  ${priceItem.value}
                </BodyOne>
                <BodyOne className="text-primary-green" key={index}>
                  $
                  {(
                    priceItem.value -
                    (priceItem.value * discount) / 100
                  ).toFixed(2)}
                </BodyOne>
              </>
            ))}
          </div>
        </div>
      </div>

      {isModelOpen && (
        <>
          {" "}
          <div className="overlay-bg" onClick={closeModel}>
            <div className="modal-overlay" onClick={closeModel}>
              <div
                className="modal-content flex justify-between"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="w-1/2 h-[500px] overflow-hidden">
                  {images.slice(0, 1).map((cover, index) => (
                    <img
                      key={index}
                      src={cover?.image}
                      alt=""
                      className="modal-image size-full object-cover"
                    />
                  ))}
                </div>
                <div className="model-details w-1/2 h-[500px] overflow-y-scroll p-9">
                  <button className="feature-btn bg-indigo-500">
                    SALE {discount}% OFF
                  </button>
                  <Title level={2}>{title}</Title>
                  <div className="flex items-center gap-1 -mt-2">
                    {RenderRatingStarts(rating)}
                  </div>
                  {price.slice(0, 1).map((priceItem, index) => (
                    <div className="flex items-center gap-3">
                      <BodyOne className="line-through mt-3" key={index}>
                        ${priceItem.value}
                      </BodyOne>
                      <Title
                        level={3}
                        className="text-primary-green"
                        key={index}
                      >
                        $
                        {(
                          priceItem.value -
                          (priceItem.value * discount) / 100
                        ).toFixed(2)}
                      </Title>
                    </div>
                  ))}
                  <BodyOne className="text-sm leading-6">{description}</BodyOne>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value={1}
                      className="w-12 h-12 text-primary outline-none border-2 border-primary px-4"
                    />
                    <button className="primary-btn">ADD</button>
                  </div>
                  <hr className="my-5" />
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Title level={3} className="text-lg">
                        Category :
                        <span className="font-normal">Wooden Product</span>
                      </Title>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Title level={3} className="text-lg">
                        Tag :<span className="font-normal">Wooden</span>
                      </Title>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Title level={3} className="text-lg">
                        Share :
                      </Title>
                      <div className="flex items-center -mt-1 gap-3">
                        <FaFacebookF />
                        <AiFillInstagram />
                        <FaTwitter />
                      </div>
                    </div>
                  </div>

                  <button
                    className="close-btn absolute top-0 right-0 size-12 flex justify-center items-center bg-primary-green text-white"
                    onClick={closeModel}
                  >
                    <IoClose size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
