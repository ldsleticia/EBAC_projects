import withFormatText from "./withFormatText";

function CityLabel({ cityName, title }) {
  return (
    <div>
      <p>{ title }</p>
      <p>{ cityName }</p>
    </div>
  );
}

export default withFormatText(CityLabel);