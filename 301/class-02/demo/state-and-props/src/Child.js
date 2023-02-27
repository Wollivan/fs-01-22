import React, { useState } from "react";
import boy from "./assets/boy.jpg";

function Child({ name }) {
  const [patsOnBillysHead, setPatsOnBillysHead] = useState(0);

  function patBillysHead() {
    setPatsOnBillysHead(patsOnBillysHead + 1);
  }

  return (
    <div>
      <h2>{name}</h2>
      <img onClick={patBillysHead} src={boy} alt={name} title={name} />
      <span>👋 {patsOnBillysHead}</span>
    </div>
  );
}

export default Child;
