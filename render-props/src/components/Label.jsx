export default function Label({ parsedValue, title }) {
  return (
    <div>
      <p>{title}</p>
      <p>{parsedValue}</p>
    </div>
  );
}
