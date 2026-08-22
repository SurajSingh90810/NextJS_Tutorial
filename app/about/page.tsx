import { cookies } from "next/headers";
import React from "react";

export default async function About() {
  const cookieData = await cookies();
  return <div>About{new Date().toLocaleDateString()}</div>;
}
