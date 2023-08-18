import FirstHello from "@/components/FirstHello";
import SecoundHello from "@/components/SecoundHello";
import { dateFormat } from "@/utils/DateFormat";
import { lineFormat } from "../utils/LineFormat";
import ThreeHello from "../components/ThreeHello";
import HelloUnstructured from "../components/HelloUnstructured";
import HelloUnstructuredProps from "../components/HelloUnstructuredProps";
import ComponentizedHello from "../components/ComponentizedHello";

export default function Home() {
  return (
    <main>
      <FirstHello />
      { lineFormat() }
      <SecoundHello name="Letícia" date_time={dateFormat(new Date())} />
      { lineFormat() }
      <ThreeHello />
      <HelloUnstructured />
      <HelloUnstructuredProps text="Hello World" line={lineFormat()}/>
      <ComponentizedHello times={5}/>
    </main>
  );
}
