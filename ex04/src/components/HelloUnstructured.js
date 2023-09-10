import DataFormatada from "../utils/DataFormatada";
import { lineFormat } from "../utils/LineFormat";

export default function HelloUnstructured() {
  const hello = ["Hello", "World"];
  const [ola, mundo] = hello;
  return (
    <div>
      {ola} {mundo}
      <DataFormatada date_time={new Date()} />
      {lineFormat()}
    </div>
  );
}
