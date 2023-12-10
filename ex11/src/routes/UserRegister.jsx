import "../styles/App.css";
import { useState } from "react";
import "../firebaseConfig";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import Inputs from "../components/Inputs";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function UserRegister() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [sended, setSended] = useState(false);

  const db = getFirestore();
  const saveDataToFireStore = async () => {
    const docRef = await addDoc(collection(db, "myCollection"), {
      firstName: inputValue1,
      lastName: inputValue2,
    });
    setInputValue1("");
    setInputValue2("");
    setSended(true);
    alert("Enviado com sucesso");
  };

  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <NavBar />
      <h1>Formulário de cadastro</h1>
      <form onSubmit={handlePreventDefault}>
        <Inputs
          inputValue1={inputValue1}
          setInputValue1={setInputValue1}
          inputValue2={inputValue2}
          setInputValue2={setInputValue2}
        />
        <br />
        <button onClick={saveDataToFireStore}>Enviar</button>
      </form>
      <br />
      {sended && (
        <div>
          <Link to={"/listing"}> Clique aqui para verificar as respostas </Link>
        </div>
      )}
    </div>
  );
}

export default UserRegister;
