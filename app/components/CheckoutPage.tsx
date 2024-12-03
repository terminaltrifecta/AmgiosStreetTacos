"use client";

import {
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import usePostMutation, { PostData } from "../hooks/usePosts";
import { useAppSelector } from "@/lib/hooks";
import { RootState } from "@/lib/store";

export default function CheckoutPage({ amount, clientSecret }: any) {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  const { mutate, error } = usePostMutation();

    function functionAdd() {

      const cart = useAppSelector((state: RootState) => state.cart);

      const postData: PostData = {
        customer_first_name: "Aiden",
        customer_last_name: "Alazo",
        email: "luvnataliehanna798@gmail.com",
        phone_number: "5863501415",
        location_id: 2,
        time_placed: "2024-11-26T14:30:00Z",
        time_requested: "2024-11-26T14:30:00Z",
        location: "POINT (-73.935242 40.730610)",
        is_pickup: true,
        status_id: 6,
        cart: cart
      };
      mutate(postData);
    };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    })

    if (error) {
      //only gets here when there's an error the customer needs to see
      setErrorMessage(error.message);
    } else {
      //ui automatically closes with success animation and they're redirected to success url
      functionAdd();
    }

    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid h-fit space-y-4 p-4 rounded-2xl bg-amigoswhite"
    >

      <div className="text-3xl text-center font-bold tracking-wide">
        One step from yumminess..
      </div>

      {clientSecret && <PaymentElement />}
      {errorMessage && <div>{errorMessage}</div>}

      <button disabled={!stripe || loading} className="text-amigoswhite text-[1.3rem] font-semibold text-center flex items-center justify-center rounded-2xl max-h-32 transition duration-200 bg-amigosblack hover:text-amigosblack hover:bg-amigoswhite hover:shadow-md ">
        <div className="flex items-center justify-center p-4">
        {loading ? "Processing ..." : `Pay $${amount}`}
        </div>
      </button>
    </form>
  );
}
