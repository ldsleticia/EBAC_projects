export default function withFormatText(Component) {
  return ({ title, name, cityName, ...otherProps }) => {
    if (name !== undefined) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
    } else if (cityName !== undefined) {
      cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    }

    return (
      <Component
        {...otherProps}
        title={title}
        name={name}
        cityName={cityName}
      />
    );
  };
}
