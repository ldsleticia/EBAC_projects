export default function Currency({ value, render, parsedTo }) {
  const parsedValue = parsedTo === "BRL" ? value * 5 : value / 5;

  return render(
    parsedValue.toLocaleString(parsedTo === "BRL" ? "pt-BR" : "en-US", {
      style: "currency",
      currency: parsedTo,
    })
  );
}
