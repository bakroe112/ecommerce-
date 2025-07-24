import React, { useState } from "react";
import { IoCartOutline, IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { Badges, BodyOne, Title } from "../common/CustomComponents";
import { useDispatch, useSelector } from "react-redux";
import {
    cartAction,
  selectedTotalPrice,
  selectedTotalQuantity,
} from "../../redux/slide/cartSlice";

export const ModelCard = () => {
  const totalQuantity = useSelector(selectedTotalQuantity);
  const cartItem = useSelector((state) => state.cart.itemList);
  const totalprice = useSelector(selectedTotalPrice);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const openModel = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden"; // * ẩn thanh cuộn ngang (horizontal scrollbar) của body
  };

  const closeModel = () => {
    setIsClosing(true);
    document.body.style.overflowX = "hidden";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <button className="relative z-20" onClick={openModel}>
        <IoHeartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">0</Badges>
        </div>
      </button>

      <button className="relative z-20" onClick={openModel}>
        <IoCartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-primary-green">{totalQuantity}</Badges>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModel}></div>
          <div
            className={`cartmodel p-16 text-primary ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "cart" ? "text-primary" : ""
                }`}
                onClick={() => {
                  handleTabChange("cart");
                }}
              >
                Shopping Cart
                <span className="size-7 text-[11px] font-normal rounded-full text-white gird place-content-center bg-primary">
                  {totalQuantity}
                </span>
              </button>
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "wishlist" ? "text-primary" : ""
                }`}
                onClick={() => {
                  handleTabChange("wishlist");
                }}
              >
                Wishlist
                <span className="size-7 text-[11px] font-normal rounded-full text-white gird place-content-center bg-primary">
                  0
                </span>
              </button>
            </div>
            <div className="line-container">
              <div
                className={`line ${activeTab === "cart" ? "active" : ""}`}
              ></div>
              <div
                className={`line ${activeTab === "wishlist" ? "active" : ""}`}
              ></div>
            </div>
            {activeTab == "cart" ? (
              <>
                {cartItem.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>SubTotal:</Title>
                  <Title level={6}>{totalprice.toFixed(2)}</Title>
                </div>
                <div className="checkout">
                  <button className="primary-btn w-full">View Cart</button>
                </div>
              </>
            ) : (
              <>wish</>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CartProduct = ({ id, cover, name, price, quantity }) => {
  const dispatch = useDispatch();

  const removeCartItems = () => {
    dispatch(cartAction.removeFromAllCart(id))
  };
  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images size-20">
            {cover?.slice(0, 1).map((images, i) => (
              <img
                src={images?.image}
                key={i}
                className="size-full object-cover"
              />
            ))}
          </div>
          <div className="details w-1/2">
            <BodyOne>{name}</BodyOne>
            <p className="text-primary-green">
              {quantity} x ${price?.toFixed(2)}
            </p>
          </div>
          <button className="size-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={25} onClick={removeCartItems} />{" "}
          </button>
        </div>
      </div>
    </>
  );
};
