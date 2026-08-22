import { useState } from "react";

export default function UserSearch() {
  const [val, setVal] = useState<string>("");
  return (
    <>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
    </>
  );
}
