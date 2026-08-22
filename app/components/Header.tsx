"use client";
import { useState } from "react";
import UserSearch from "./UserSearch";

function Header() {
  const [val, setVal] = useState<string>("");
  return (
    <div>
      <h2>Logo</h2>
      <div>navbar</div>
      <div>
        <UserSearch />
      </div>
    </div>
  );
}

export default Header;
