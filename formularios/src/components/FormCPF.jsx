export default function FormCPF() {
  return (
    <div>
      <div onChange={(e) => console.log(e.target.value)}>
        <label htmlFor="generoEscolhido">Genero Escolhido </label>
        <br />
        <input
          type="radio"
          id="genero"
          name="genero"
          value="Masculino"
          defaultChecked
        />
        Masculino
        <input type="radio" id="genero" name="genero" value="Feminino" />
        Feminino
        <input type="radio" id="genero" name="genero" value="Outros" />
        Outros
      </div>
    </div>
  );
}
