import React, { useState } from "react";
import useFormatName from "./useFormatName";

function FormularioVendedor() {
  const [sended, setSended] = useState(false);

  const {
    name,
    setName,
    formattedName,
    buyerName,
    setBuyerName,
    buyerNameFormated,
  } = useFormatName("");

  function handleSubmit(e) {
    e.preventDefault();
    setSended(true);
  }

  return (
    <div>
      <form>
        <h1>Formulario Vendedor</h1>
        <label>Departamento:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Nome do vendedor:</label>
        <input
          type="text"
          value={buyerName}
          onChange={(e) => setBuyerName(e.target.value)}
        />

        <p>{formattedName}</p>
        <p>{buyerNameFormated}</p>
      </form>
      <button type="submit" onClick={handleSubmit}>
        {" "}
        Enviar{" "}
      </button>
      {sended && <p>Dados enviados com sucesso</p>}
    </div>
  );
}

export default FormularioVendedor;
