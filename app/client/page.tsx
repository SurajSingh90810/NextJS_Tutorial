"use client";
import { useEffect, useState } from "react";

function Client() {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("Hello Next.js");
  });
  console.log("Client Component", value);
  return <div>Client</div>;
}

export default Client;
