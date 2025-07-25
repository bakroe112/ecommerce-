import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartAction,
  clearCart,
  selectedTotalPrice,
  selectedTotalQuantity,
} from "../redux/slide/cartSlice";
import BgImage from "../assets/common/Frame.png";
import { BodyOne, Title } from "../components/common/CustomComponents";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";
import StripeCheckout from "react-stripe-checkout";

export const CartPage = () => {
  const totalQuantity = useSelector(selectedTotalQuantity);
  const cartItem = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectedTotalPrice);
    const dispatch = useDispatch();
  const handleToken = (token) => {
        console.log("================================");
        console.log(token);
        console.log("================================");
    dispatch(clearCart());
  };
  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-0 w-full h-1/2">
            <img src={BgImage} alt="" className="size-full object-cover" />
          </div>
          <div className="text absolute top-48 left-[45%] ">
            <Title level={1}>Cart</Title>
          </div>
        </div>
        <div className="container flex justify-between">
          <div className="w-2/3">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-primary uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-16 py-5">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItem?.map((item) => (
                    <CartPageCard
                      key={item?.id}
                      id={item?.id}
                      cover={item?.cover}
                      name={item?.name}
                      price={item?.price}
                      quantity={item?.quantity}
                      totalPrice={item?.totalPrice}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-2/6 ml-16">
            <div className="bg-gray-100 p-5">
              <p className="text-lg font-medium text-primary">Cart totals</p>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Subtotal</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Shipping</p>
                <p className="text-sm font-normal">
                  Enter your address to view shipping options.
                </p>
              </div>
              <hr className="my-3 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <StripeCheckout
                token={handleToken}
                stripeKey="pk_test_51RoL8i2YfaFbTl5uJJiNt3XAkghp91V53tfChcNlPC8eZHH9uxYe2b2UJKh8JGMMV9FLoFZ7Erj8M7eKR3HNzOOV00TEIRwHQ9"
                amount={totalPrice * 100}
                name="MoonCart Website"
                email="mooncart@gmail.com"
                description="Payment test"
              >
                <button className="primary-btn mt-5">
                  Process To Checkout
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const CartPageCard = ({
  id,
  cover,
  name,
  price,
  quantity,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const incCartitems = () => {
    dispatch(cartAction.addToCart({ id, name, price }));
  };
  const removCartitem = () => {
    dispatch(cartAction.removeFromCart(id));
  };
  const removCartitems = () => {
    dispatch(cartAction.removeFromAllCart(id));
  };

  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="p-4">
          {cover?.slice(0, 1).map((image, i) => (
            <img
              src={image.image}
              alt={i}
              key={id}
              className="size-24 object-cover"
            />
          ))}
        </td>
        <td className="px-6 py-4">
          <BodyOne>{name}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${price.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={incCartitems}
              className="size-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiPlus size={20} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 h-12 text-center text-primary outline-none border border-gray-300"
            />
            <button
              onClick={removCartitem}
              className="size-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiMinus size={20} />
            </button>
          </div>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${totalPrice.toFixed(2)}</BodyOne>
        </td>
        <td onClick={removCartitems} className="px-6 py-4">
          <button className="size-12 bg-primary-green rounded-full flex items-center justify-center text-white">
            <IoCloseOutline size={25} />
          </button>
        </td>
      </tr>
    </>
  );
};
