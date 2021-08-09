import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherButtonProps }) => (
  <button {...otherButtonProps} className="custom-button">{children}</button>
);

export default CustomButton;
