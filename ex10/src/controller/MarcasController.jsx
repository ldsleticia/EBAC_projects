export default class MarcasController {
  async getMarcas() {
    const response = await fetch(
      "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    );
    const result = await response.json();
    return result;
  }

  async getModelos(marca) {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos`
    );
    const result = await response.json();
    return result;
  }

  async getAnos(marca, modelo) {
    const response = await fetch(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${marca}/modelos/${modelo}/anos`
    );
    const result = await response.json();
    return result;
  }
}
