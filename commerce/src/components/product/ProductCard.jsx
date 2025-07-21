import React from "react";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { BodyOne } from "../common/CustomComponents";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const RenderRatingStarts = (rating) =>{
  const totalStars = 5
  const fullStars = Math.floor(rating)
  const hasHalfStars = rating % 1 !== 0;
  const stars = []

  for(let i = 1; i<=totalStars; i++ ){
    if(i<=fullStars){
      stars.push(<FaStar key={i} color="#ff8a00"/>)
    } else if(hasHalfStars && i === fullStars + 1){
      stars.push(<FaStarHalfAlt key="half-star" color="#ff8a00" />);
    }else{
      stars.push(<FaRegStar key={i} color="#ff8a00" />);
    }
  }

  return stars;
}

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
  return (
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
          <button className="quick-view-btn product-btn primary-btn">
            Quick View
          </button>
          <button className="add-to-card-btn product-btn primary-btn">
            <IoCart size={23} />
          </button>
          <button className="love-btn product-btn primary-btn">
            <IoMdHeart size={23} />
          </button>
        </div>
      </div>

      <div className="details flex items-center flex-col bg-white pt-6">
        <NavLink to={`product-details/${id}`}>
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
                {(priceItem.value - (priceItem.value * discount) / 100).toFixed(
                  2
                )}
              </BodyOne>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
