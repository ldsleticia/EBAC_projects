function SelectComponent(props) {
    return (
      <div>
        <select value={props.value} onChange={props.onChange} onBlur={props.onBlur}>
          <option value={""}>Selecione...</option>
          {props.options.map((option, index) => (
            <option key={index} value={option.codigo}>
              {option.nome}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default SelectComponent;
  