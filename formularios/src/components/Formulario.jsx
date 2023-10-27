import { useState } from "react";

export default function Formulario() {
  const [userEmail, setUserEmail] = useState({
    userEmail: "",
  });

  const [password, setPassword] = useState({
    password: "",
  });

  const handleChange = (field, value) => {
    if (field === "userEmail") {
      setUserEmail(value);
      console.log("Campo:", field, "Valor:", value);
    } else if (field === "password") {
      setPassword(value);
      console.log("Campo:", field, "Valor:", value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userEmail"
          id="userEmail"
          required={true}
          placeholder="enter your user name"
          autoComplete="off"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />

        <input
          type="text"
          name="password"
          id="password"
          required={true}
          placeholder="enter your password"
          autoComplete="off"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
        />
        <input type="submit" label="login" value="sing up" />
      </form>
    </div>
  );
}
