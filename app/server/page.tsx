import React from "react";
import ServerLib from "../utils/server-lib";
import "server-only";

function Server() {
  console.log("Server Componenet");
  const res = ServerLib();
  return <div>Server {res}</div>;
}

export default Server;
