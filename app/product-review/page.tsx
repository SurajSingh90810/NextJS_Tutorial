import React, { Suspense } from "react";
import Review1 from "../review1/page";
import Review2 from "../review2/page";

export function ProductReview() {
  return (
    <div>
      <h2>Product Review</h2>
      <Suspense fallback="Product Loading...">
        <Review1 />
      </Suspense>
      <Suspense fallback="Review Loading...">
        <Review2 />
      </Suspense>
    </div>
  );
}

export default ProductReview;
