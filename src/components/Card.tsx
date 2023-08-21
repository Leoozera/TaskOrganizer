interface CardProps {
  children: JSX.Element;
}

export const Card = ({ children }: CardProps) => {
  return <div className="bg-zinc-900 p-10 min-w-max rounded-md mb-10 w-fit">{children}</div>;
};
