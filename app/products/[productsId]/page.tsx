"use client";

import type { Metadata } from "next";
import { useRouter } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ productsId: string }>;
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { productsId } = await params;

//   return {
//     title: `Product ${productsId}`,
//     description: `Details of product ${productsId}`,
//   };
// }

const ProductDetails = ({ params }: Props) => {
  const router = useRouter();
  const productsId = use(params).productsId;

  const handleBuyNow = () => {
    router.push("/");
  };

  return (
    <div>
      <h2>Product ID: {productsId} </h2>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
