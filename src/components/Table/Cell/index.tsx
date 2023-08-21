interface TableCellProps {
    children: JSX.Element
    className?: string
}

export const TableCell = ({children, className}: TableCellProps) => {
  return <div className={`table-cell p-3 ${className}`}>{children}</div>;
};
