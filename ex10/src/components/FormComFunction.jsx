import { useState, useEffect } from "react";
import MarcasController from "../controller/MarcasController";
import SelectComponent from "./SelectComponent";
function FormComFunction() {
  const [marcas, setMarcas] = useState([]);
  const [modelosDeCarros, setModelosDeCarros] = useState([]);

  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const [anos, setAnos] = useState([]);

  useEffect(() => {
    async function fetchMarcas() {
      const controller = new MarcasController();
      try {
        const marcasData = await controller.getMarcas();
        setMarcas(marcasData);
      } catch (error) {
        console.error("Erro ao buscar marcas:", error);
      }
    }

    fetchMarcas();
  }, []);

  async function getModelos(marca) {
    const controller = new MarcasController();
    try {
      const modelosData = await controller.getModelos(marca);
      setModelosDeCarros(modelosData.modelos);
    } catch (error) {}
  }

  const changeModeloComBaseNaMarca = (e) => {
    const marcaSelecionada = e.target.value;
    setMarcaSelecionada(marcaSelecionada);
    getModelos(marcaSelecionada);
  };

  const changeAnoComBaseNoModeloENaMarca = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1>Escolha as informações do carro</h1>

      <SelectComponent options={marcas} onChange={changeModeloComBaseNaMarca} />
      <SelectComponent
        options={modelosDeCarros}
        onChange={changeAnoComBaseNoModeloENaMarca}
      />
    </>
  );
}

export default FormComFunction;
