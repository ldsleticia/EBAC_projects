import DataFormatada from "../utils/DataFormatada";
import { lineFormat } from "../utils/LineFormat";

export default function ThreeHello() {
  const hello = ["Hello World"];
  const repeatHello = [];

  for (let i = 0; i < 3; i++) {
    const formattedDate = <DataFormatada date_time={new Date()} />;
    const line = lineFormat();
    repeatHello.push({ message: hello, date: formattedDate, line: line });
  }

  return (
    <div>
      {repeatHello.map((item, index) => (
        <div key={index}>
          {item.message} {item.date}
          {item.line}
        </div>
      ))}
    </div>
  );
}
