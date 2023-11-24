export default function withFormatText(Component) {
  return ({ title, capitalizedName, ...otherProps }) => {
    const toCapitalizeName =
      capitalizedName.charAt(0).toUpperCase() + capitalizedName.slice(1);

    return (
      <Component {...otherProps} title={title} toCapitalizeName={toCapitalizeName} />
    );
  };
}
