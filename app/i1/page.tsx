import Link from "next/link";

const I1 = () => {
  return (
    <div>
      I1 <Link href={"/i1/i2"}> I2 Click</Link>| I1{" "}
      <Link href={"/i3"}> I3 Click</Link>
    </div>
  );
};

export default I1;
