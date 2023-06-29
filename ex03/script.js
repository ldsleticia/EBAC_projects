const button = document.getElementById("submit-button");

button.addEventListener("click", function (event) {
  event.preventDefault();
});

let nomeAnterior = "";

function salvaNome() {
  
  let nome = document.getElementById("nome").value;

  if (nome === nomeAnterior) {
    nome = 'Nomes iguais'
  }

  nomeAnterior = nome;
  
  return nome;
}

function salvaCor() {
  let checkboxes = document.getElementsByClassName("checkbox-select");
  let coresSelecionadas = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      coresSelecionadas.push(checkboxes[i].value);
    }
  }

  if (coresSelecionadas.length === 0) {
    coresSelecionadas = ["Nenhuma cor selecionada"];
  }

  return coresSelecionadas;
}

function salvaGenero() {
  let radioButtons = document.getElementsByClassName("radio-select");

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      return radioButtons[i].value;
    }
  }
}

function salvaFilme() {
  let selectValues = document.getElementsByName("filmes");
  return selectValues[0].value;
}

function gravaTabela() {
  let nomeSalvo = salvaNome();
  let corSalva = salvaCor();
  let generoSalvo = salvaGenero();
  let filmeSalvo = salvaFilme();

  if (nomeSalvo === "") {
    alert("É necessário colocar o nome");
    return
  }

  else if(nomeSalvo.includes("Nomes iguais")) {
    alert("Os nomes precisam ser diferentes")
    return
  }

  else if (corSalva.includes("Nenhuma cor selecionada")) {
    alert("É necessário colocar a cor");
    return
  }

  else if(generoSalvo === undefined) {
    alert("É necessário escolher um gênero")
    return
  }

  else if(filmeSalvo === "") {
    alert("É necessário escolher um gênero cinematográfico")
    return
  }

  let novaLinha = document.createElement("tr");
  let nomeCelula = document.createElement("td");
  let corCelula = document.createElement("td");
  let generoCelula = document.createElement("td");
  let filmeCelula = document.createElement("td");

  nomeCelula.innerHTML = nomeSalvo;
  novaLinha.append(nomeCelula);

  corCelula.innerHTML = corSalva;
  novaLinha.append(corCelula);

  generoCelula.innerHTML = generoSalvo;
  novaLinha.append(generoCelula);

  filmeCelula.innerHTML = filmeSalvo;
  novaLinha.append(filmeCelula);

  document.getElementById("rows").appendChild(novaLinha);
}

function changeButton() {
  gravaTabela();
  button.disabled = true

  setTimeout(() => {
    button.disabled = false
  }, 1000);
  
}
