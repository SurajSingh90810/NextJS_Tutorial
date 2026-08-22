import React from "react";
import ServerLib from "../utils/server-lib";
import "server-only";
import ClientFun from "../utils/client-lib";

function Server() {
  console.log("Server Componenet");
  // const res = ServerLib();
  const res = ClientFun();

  return <div>Server {res}</div>;
}

export default Server;
