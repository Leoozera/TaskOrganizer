interface ButtonProps {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return <button className="rounded-full bg-yellow-500 px-2">{label}</button>;
};
