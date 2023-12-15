import { useState } from "react";

export default function useFormatName() {
  const [name, setName] = useState("");
  const [buyerName, setBuyerName] = useState("");

  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
  const buyerNameFormated = buyerName.charAt(0).toUpperCase() + buyerName.slice(1);

  return {
    name,
    setName,
    formattedName,
    buyerName,
    setBuyerName,
    buyerNameFormated
  };
}
