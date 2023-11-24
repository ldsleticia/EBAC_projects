import withFormatText from "./withFormatText";

function NameLabel({ toCapitalizeName, title }) {
  return (
    <div>
      <p>{ title }</p>
      <p>{ toCapitalizeName }</p>
    </div>
  );
}

export default withFormatText(NameLabel);
