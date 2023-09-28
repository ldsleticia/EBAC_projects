export default function TextOnButton(props) {
  return (
    <div>
      <p
        style={{
          display: "block",
          height: "20px",
          backgroundColor: "#000",
          color: "#fff",
          width: "100%",
        }}
      >
        {props.text}
      </p>
    </div>
  );
}
