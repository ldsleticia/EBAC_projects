import DataFormatada from "../utils/DataFormatada";

export default function FirstHello() {
  return (
    <>
      <h1>Hello World</h1>
      <DataFormatada date_time={new Date()}/>
    </>
  );
}
