interface TableRowGroupProps {
  children: JSX.Element;
  variant: "dark" | "light";
}

export const TableRowGroup = ({ children, variant }: TableRowGroupProps) => {
  return (
    <div className={`table-row-group ${variant === "light" ? "bg-zinc-700" : "bg-zinc-900"}`}>
      {children}
    </div>
  );
};
