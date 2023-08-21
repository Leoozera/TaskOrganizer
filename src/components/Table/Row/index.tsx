interface TableRowProps {
  children: JSX.Element[];
}

export const TableRow = ({ children }: TableRowProps) => {
  return <div className="table-row">{children}</div>;
};
