export function dateFormat(date) {
  return date.toLocaleString('pt-BR').split(",").reverse().join(" ");
}
