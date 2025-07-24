import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slide/cartSlice";
import StripeCheckout from "react-stripe-checkout";

export const CheckOutForm = ({ total, handlePaymentSuccess }) => {
  const dispatch = useDispatch();
  const handleToken = (token) => {
    handlePaymentSuccess();
    dispatch(clearCart());
  };
  return (
    <>
      <>
        <StripeCheckout
          token={handleToken}
          stripeKey="pk_test_51RoL8i2YfaFbTl5uJJiNt3XAkghp91V53tfChcNlPC8eZHH9uxYe2b2UJKh8JGMMV9FLoFZ7Erj8M7eKR3HNzOOV00TEIRwHQ9"
          amount={total * 100}
          name="MoonCart Website"
          email="mooncart@gmail.com"
          description="Payment test"
        >
          <button className="w-full bg-gray-200 py-3.5 my-3 font-medium">
            Pay ${total?.toFixed(2)}
          </button>
        </StripeCheckout>
      </>
    </>
  );
};
