interface ButtonProps {
  label: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
}) => {
  const baseStyle =
    "px-10 py-3 rounded-xl font-medium transition-all duration-200";
  const variantStyle =
  variant === "primary"
    ? "bg-red-800 text-white hover:bg-red-700"
    : "border border-red-800 text-red-800";
  return (
    <button 
    className={`${baseStyle} ${variantStyle} ${className}`}>
      {label}
    </button>
  );
};

export default Button;
