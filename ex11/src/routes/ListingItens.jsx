import "../styles/ListingItens.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function ListingItens() {
  const [storedValues, setStoredValues] = useState([]);
  const db = getFirestore();

  const fetchDataFromFrirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "myCollection"));
    const temporaryArray = [];
    querySnapshot.forEach((doc) => {
      temporaryArray.push(doc.data());
    });
    setStoredValues(temporaryArray);
  };

  useEffect(() => {
    fetchDataFromFrirestore();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="listing">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Sobrenome</th>
            </tr>
          </thead>

          <tbody>
            {
              storedValues.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
