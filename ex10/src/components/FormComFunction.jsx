import { useState } from "react";
import MarcasController from "../controller/MarcasController";
function FormComFunction() {
  const [marcas, setMarcas] = useState([]);

  async function getMarcas() {
    const controller = new MarcasController();
    try {
      const marcasData = await controller.getMarcas();
      setMarcas(marcasData);
    } catch (error) {}
  }

  getMarcas();

  return (
    <>
      <h1>Lista de marcas</h1>
      <select>
      <option value={""}>Selecione uma marca</option>
        {marcas.map((marca) => (
          <option key={marca.codigo} value={marca.codigo}>
            {marca.nome}
          </option>
        ))}
      </select>
    </>
  );
}

export default FormComFunction;
