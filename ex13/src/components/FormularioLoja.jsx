import React, { useState } from "react";
import useFormatName from "./useFormatName";

function FormularioLoja() {
  const {
    name,
    setName,
    formattedName,
    buyerName,
    setBuyerName,
    buyerNameFormated,
  } = useFormatName("");

  return (
    <div>
      <form>
        <h1>Formulario Loja</h1>
        <label>Nome da loja:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Nome do comprador:</label>
        <input
          type="text"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />
        <p>{formattedName}</p>
        <p>{buyerNameFormated}</p>
      </form>
    </div>
  );
}

export default FormularioLoja;
