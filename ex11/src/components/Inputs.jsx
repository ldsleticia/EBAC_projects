function Inputs(props) {
  return (
    <div>
      Digite seu nome:
      <input
        type="text"
        value={props.inputValue1}
        onChange={(e) => props.setInputValue1(e.target.value)}
      />
      <br />
      <br />
      Digite seu sobrenome:
      <input
        type="text"
        value={props.inputValue2}
        onChange={(e) => props.setInputValue2(e.target.value)}
      />
    </div>
  );
}

export default Inputs;
