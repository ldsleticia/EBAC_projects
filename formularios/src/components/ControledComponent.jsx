import { useState } from "react";

export default function ControledComponent() {
  const preventFormSubmission = (e) => {
    e.preventDefault();
    if (validateCpf(cpf.cpf.value)) {
      console.log("CPF PASSOU");
    } else {
      console.log("CPF NÃO PASSOU");
    }
    setIsSubmitted(true);
  };

  const [cpf, setCpf] = useState({
    cpf: {
      value: "",
      isError: false,
      isValid: false,
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleTextChange = (e) => {
    const newCpf = e.target.value;
    setCpf({
      ...cpf,
      cpf: {
        value: newCpf,
        isError: false,
        isValid: false,
      },
    });
    setIsSubmitted(false);
  };

  const validateCpf = (cpfValue) => {
    const numericCpf = cpfValue.replace(/\D/g, "");

    if (numericCpf.length === 11) {
      setCpf((prevCpf) => ({
        ...prevCpf,
        cpf: {
          ...prevCpf.cpf,
          isValid: true,
          isError: false,
        },
      }));
      return true;
    } else {
      setCpf((prevCpf) => ({
        ...prevCpf,
        cpf: {
          ...prevCpf.cpf,
          isValid: false,
          isError: true,
        },
      }));
      return false;
    }
  };

  return (
    <div>
      <form onSubmit={preventFormSubmission}>
        <input
          type="text"
          onChange={handleTextChange}
          value={cpf.value}
          name="cpf"
        />
        <button>GO!</button>
      </form>
      {cpf.cpf.value === "" && isSubmitted ? <p>CPF é obrigatório</p> : ""}
      {cpf.cpf.isError && cpf.cpf.value !== "" && isSubmitted ? (
        <p>CPF inválido</p>
      ) : (
        ""
      )}
      {cpf.cpf.value !== "" && cpf.cpf.isError === false && isSubmitted ? (
        <p>CPF está correto</p>
      ) : (
        ""
      )}
    </div>
  );
}
