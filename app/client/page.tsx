"use client";
import { useEffect, useState } from "react";
import { userRootContext } from "../components/UserContetx";
import ClientFun from "../utils/client-lib";

function Client() {
  const [value, setValue] = useState("");

  const rootUser = userRootContext();

  const res = ClientFun();

  useEffect(() => {
    setValue("Hello Next.js");
  });
  console.log("Client Component", value);
  return (
    <div>
      Client={rootUser.name} ={res}
    </div>
  );
}

export default Client;
