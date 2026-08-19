import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "MetaData",
  description: "About MetaData",
};

const MetaData = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 3000);
  });
  return <div>MetaData</div>;
};

export default MetaData;
