import React, { useState } from "react";
import OutputMsg from "./outputmsg";

export default function InputMsg() {
  const [inputMsg, setInputMsg] = useState<string>("");
  return (
    <div>
      <label>
       Enter message here : <input type="text" onChange={e => setInputMsg(e.target.value)} />
      </label>
      <hr />
      <OutputMsg msg={inputMsg} />
    </div>
  );
}
