import Link from "next/link";
import React from "react";

const I2 = () => {
  return (
    <div>
      I2 Page Intercepted <Link href={"/i1"}> I1 Click</Link>
    </div>
  );
};

export default I2;
