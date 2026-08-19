"use client";

import { use } from "react";

const News = ({
  params,
  searchParams,
}: {
  params: Promise<{ newId: string }>;
  searchParams: Promise<{ cat?: string; type: string }>;
}) => {
  const { newId } = use(params);
  const { cat, type } = use(searchParams);

  console.log(cat);

  return (
    <div>
      News: {newId}
      <br />
      Category: {cat} {type}
    </div>
  );
};

export default News;
