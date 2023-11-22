export default function withCurrency(Component) {
  return ({ value, parsedTo, ...otherProps }) => {
    const parsedValue = parsedTo === "BRL" ? value * 5 : value / 5;
    return (
      <Component
        {...otherProps}
        parsedValue={parsedValue.toLocaleString(
          parsedTo === "BRL" ? "pt-BR" : "en-US",
          {
            style: "currency",
            currency: parsedTo,
          }
        )}
      />
    );
  };
}
