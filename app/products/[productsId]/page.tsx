import type { Metadata } from "next";

type Props = {
  params: Promise<{ productsId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productsId } = await params;

  return {
    title: `Product ${productsId}`,
    description: `Details of product ${productsId}`,
  };
}

const ProductDetails = async ({ params }: Props) => {
  const { productsId } = await params;

  return <div>Product ID: {productsId}</div>;
};

export default ProductDetails;
