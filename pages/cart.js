import React from "react";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import CartItem from "@/components/CartItem";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* Heading and paragraph start  */}
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Shopping Cart
          </div>
        </div>
        {/* Heading and paragraph end */}

        {/* cart content start  */}
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          {/* cart item start  */}
          <div className="flex-[2]">
            <div className="text-lg font-bold">Cart Items</div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          {/* cart item end */}

          {/* summary start  */}
          <div className="flex-[1]">
            <div className="text-lg font-bold">Summary</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex justify-between">
                <div className="uppercase text-md md:text-lg font-medium text-black ">
                  Subtotal
                </div>

                <div className="text-md md:text-lg font-medium text-black ">
                  $2312.00
                </div>
              </div>

              <div className="text-sm md:text-md py-5 border-t mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                quae pariatur reprehenderit magni earum laudantium quos
                accusamus placeat repellendus aliquam!
              </div>
            </div>

            {/* Button Start  */}
            <button className=" w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Checkout
            </button>
            {/* Button End */}
          </div>
          {/* summary end */}
        </div>
        {/* cart content end */}
        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            alt="empty cart image"
            width={300}
            height={300}
          />
          <span className="text-xl font-bold">Your cart is Empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories
          </span>
          <Link href="/" className=" py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8">
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
