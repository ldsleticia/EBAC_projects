import DataFormatada from "../utils/DataFormatada";

export default function HelloUnstructuredProps({ text, line }) {
  return (
    <>
      <div>{text}</div>
      <DataFormatada date_time={new Date()} />
      <div>{line}</div>
    </>
  );
}
