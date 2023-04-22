import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* Right column start */}
          <div className="flex-[1] py-3">
            {/* Product detail  */}
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            {/* Product Subtitle  */}
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
           

            {/* Product Price  */}
            <div className="text-lg font-semibold">MRP: $199.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              ( Also includes all applicable duties )
            </div>

            {/* Product size Range Start  */}
            <div className="mb-10">
              {/* Heading start  */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size</div>

                <div className="text-md font-medium text-black/[0.5]">
                  Select Guide
                </div>
              </div>
              {/* Heading End */}

              {/* size start  */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
              </div>
              {/* size End */}
              {/* Show Error start  */}
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* Show Error End  */}
            </div>
            {/* Product size Range End */}

            {/* Add to cart button start  */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add To Cart
            </button>
            {/* Add to cart button End */}

            {/* Wishlist button start  */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Wishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Wishlist button End */}

            <div>
              <div className="text-lg">
                Product Details
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                reiciendis hic soluta? Aut enim dolores libero unde quasi odio
                veniam autem sed nulla aliquam aspernatur quae expedita
                reiciendis minus, labore accusamus! Sequi repellat labore eius
                dolor rem voluptates commodi eum laborum necessitatibus
                architecto? Mollitia quo inventore voluptatibus officiis numquam
                neque facere, eveniet deserunt tenetur praesentium in, voluptate
                illo autem maiores!
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                reiciendis hic soluta? Aut enim dolores libero unde quasi odio
                veniam autem sed nulla aliquam aspernatur quae expedita
                reiciendis minus, labore accusamus! Sequi repellat labore eius
                dolor rem voluptates commodi eum laborum necessitatibus
                architecto? Mollitia quo inventore voluptatibus officiis numquam
                neque facere, eveniet deserunt tenetur praesentium in, voluptate
                illo autem maiores!
              </div>
            </div>
          </div>
           {/* Right column End */}
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
