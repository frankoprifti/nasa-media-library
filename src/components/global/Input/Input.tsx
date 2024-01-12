import "./Input.scss";

interface InputProps {
  value?: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: "text" | "number";
  maxNumber?: number;
}

export default function Input({
  value,
  placeholder,
  onChange,
  type,
  maxNumber,
}: InputProps) {
  return (
    <div className={"input-wrapper"}>
      <input
        placeholder={placeholder}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        max={maxNumber}
      />
    </div>
  );
}
