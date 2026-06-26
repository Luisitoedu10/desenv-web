import "../styles/button.css";

interface IButtonProps {
    text: string;
    secondary?: boolean;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    text,
    secondary,
    type = "button",
}: IButtonProps) {
    return (
        <button
            type={type}
            className={secondary ? "btn-secondary" : "btn-primary"}
        >
            {text}
        </button>
    );
}
