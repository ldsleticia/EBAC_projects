import withCurrency from "./withCurrency";

function RealLabel({ parsedValue, title }) {
  return (
    <div>
      <p>{title}</p>
      <p>{parsedValue}</p>
    </div>
  );
}

export default withCurrency(RealLabel);
