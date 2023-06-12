import "./button.css";

const Button = ({ type, className, label, isDisabled }) => {
  return (
    <button type={type} className={className} disabled={isDisabled}>
      {label}
    </button>
  );
};

export default Button;
