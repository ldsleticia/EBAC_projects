// Primeiro
document.write("<h1>Hello world</h1>");

// Segundo
const a = document.createElement("p");
a.innerText = "Hello world";
document.body.appendChild(a);

// Terceiro
const b = document.getElementById("texto-com-get-element");
b.innerHTML = "Hello world";

// Quarto
window.alert("Hello world");

// Quinto
const btn = document
  .getElementById("btn")
  .addEventListener("click", imprimirNaTela);
function imprimirNaTela() {
  document.getElementById("texto-com-btn").innerHTML =
    Math.random() + "Hello world";
}

// Sexto
const c = document.querySelector(".texto-com-query-selector");
c.innerText = "Hello world";

// Sétimo
const d = document.createTextNode("Hello world");
const dElement = document.getElementById("texto-node-text");
dElement.appendChild(d);

// Oitavo
document.getElementById("texto-text-content").textContent = "Hello world";

// Nono
const e = document.createElement("p");
e.innerText = "Hello world";
e.setAttribute("id", "texto-com-id");
document.body.appendChild(e);
document.getElementById("texto-com-id").style.color = "red";

// Decimo
const f = document.createElement("p")
f.innerText = "Hello world"
f.setAttribute("class", "texto-com-classe")
document.body.appendChild(f)
document.getElementsByClassName("texto-com-classe")[0].style.fontFamily = "Comic Sans MS"
