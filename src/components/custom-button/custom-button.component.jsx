import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherButtonProps }) => (
  <button
    {...otherButtonProps}
    className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
  >
    {children}
  </button>
);

export default CustomButton;
