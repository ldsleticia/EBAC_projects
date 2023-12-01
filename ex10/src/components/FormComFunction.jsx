import { useState, useEffect } from "react";
import MarcasController from "../controller/MarcasController";
import SelectComponent from "./SelectComponent";
function FormComFunction() {
  const [marcas, setMarcas] = useState([]);
  const [modelosDeCarros, setModelosDeCarros] = useState([]);

  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [modeloSelecionado, setModeloSelecionado] = useState("");
  const [anos, setAnos] = useState([]);
  const [valores, setValores] = useState([]);

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

  async function getAnos(marca, modelo) {
    const controller = new MarcasController();
    try {
      const anosData = await controller.getAnos(marca, modelo);
      setAnos(anosData);
    } catch (error) {}
  }

  async function getValores(marca, modelo, ano) {
    const controller = new MarcasController();
    try {
      const valoresData = await controller.getValores(marca, modelo, ano);
      setValores(valoresData);
    } catch (error) {}
  }

  const changeModeloComBaseNaMarca = (e) => {
    const marcaSelecionada = e.target.value;
    setMarcaSelecionada(marcaSelecionada);
    getModelos(marcaSelecionada);
  };

  const changeAnoComBaseNoModeloENaMarca = (e) => {
    const modeloSelecionadoAnterior = e.target.value;
    const marcaSelecionadaAnterior = marcaSelecionada;

    setModeloSelecionado(modeloSelecionadoAnterior);
    getAnos(marcaSelecionadaAnterior, modeloSelecionadoAnterior);
  };

  const retornaValor = (e) => {
    const anoSelecionadoAnterior = e.target.value;
    const marcaSelecionadaAnterior = marcaSelecionada;
    const modeloSelecionadoAnterior = modeloSelecionado;

    if (
      (anoSelecionadoAnterior,
      marcaSelecionadaAnterior,
      modeloSelecionadoAnterior)
    ) {
      console.log("retornarei o valor");
      getValores(
        marcaSelecionadaAnterior,
        modeloSelecionadoAnterior,
        anoSelecionadoAnterior
      );
    }
  };

  const handleSelectChange = () => {
    setValores("");
  };

  return (
    <>
      <h1>Escolha as informações do carro</h1>

      <SelectComponent
        options={marcas}
        onChange={changeModeloComBaseNaMarca}
        onBlur={handleSelectChange}
      />
      <SelectComponent
        options={modelosDeCarros}
        onChange={changeAnoComBaseNoModeloENaMarca}
        onBlur={handleSelectChange}
      />
      <SelectComponent options={anos} onChange={retornaValor} onBlur={handleSelectChange}/>
      <p>{valores.Valor ? valores.Valor : ""}</p>
    </>
  );
}

export default FormComFunction;
