import withFormatText from "./withFormatText";

function NameLabel({ name, title }) {
  return (
    <div>
      <p>{ title }</p>
      <p>{ name }</p>
    </div>
  );
}

export default withFormatText(NameLabel);
