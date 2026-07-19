import "./Button.css";

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
}) => {
    return (
        <button
            className={`btn btn-${variant}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;