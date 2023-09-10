import DataFormatada from "../utils/DataFormatada";
import { lineFormat } from "../utils/LineFormat";

export default function ComponentizedHello(props) {
  const hello = ["Hello World"];
  const repeatHello = [];

  for (let i = 0; i < props.times; i++) {
    const formattedDate = <DataFormatada date_time={new Date()} />;
    const line = lineFormat();
    repeatHello.push({ message: hello, date: formattedDate, line: line });
  }
  return (
    <>
      {repeatHello.map((item, index) => (
        <div key={index}>
          {item.message} {item.date}
          {item.line}
        </div>
      ))}
    </>
  );
}
