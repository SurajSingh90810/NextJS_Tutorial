"use client";

import Link from "next/link";
import { title } from "process";
import React, { Children, useState } from "react";

const navigation = [
  { title: "Login", href: "/login" },
  { title: "Register", href: "/register" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  const [inputVal, setInputVal] = useState<string>("");
  return (
    <div>
      <div className="flex gap-9">
        {navigation.map((nav) => (
          <Link key={nav.title} href={nav.href}>
            {nav.title}
          </Link>
        ))}
      </div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      {children}
    </div>
  );
}
