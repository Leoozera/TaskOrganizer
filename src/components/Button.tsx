interface ButtonProps {
  label: string;
  onClick?: (args?: unknown) => unknown;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick} className="rounded-full bg-yellow-500 px-2">{label}</button>;
};
