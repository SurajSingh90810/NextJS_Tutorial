"use client";

import { createContext, ReactNode, useContext } from "react";

type User = {
  name: string;
  email: string;
  age: number;
};

const userData: User = {
  name: "ABCD",
  email: "abc@gmail.com",
  age: 23,
};

const RootContext = createContext<User>(userData);

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <RootContext.Provider value={userData}>{children}</RootContext.Provider>
  );
};

export const userRootContext = () => useContext(RootContext);
