const ReviewDetails = async ({
  params,
}: {
  params: Promise<{ productsId: string; reviewId: string }>;
}) => {
  const { productsId, reviewId } = await params;
  return (
    <div>
      Product ID: {productsId} ,ReviewDetails :{reviewId}
    </div>
  );
};

export default ReviewDetails;
