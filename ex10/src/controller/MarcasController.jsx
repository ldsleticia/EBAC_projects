export default class MarcasController {
  async getMarcas() {
    const response = await fetch(
      "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    );
    const result = await response.json();
    return result;
  }
}

