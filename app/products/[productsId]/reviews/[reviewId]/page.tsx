import { redirect } from "next/navigation";

const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productsId: string; reviewId: string }>;
}) => {
  const { productsId, reviewId } = await params;
  if (reviewId > "60") {
    redirect("/");
  }
  // if (reviewId === "50") {
  //   throw new Error("50 is Error");
  // }

  return (
    <div>
      Product ID: {productsId} ,ReviewDetails :{reviewId}
    </div>
  );
};

export default ReviewDetails;
