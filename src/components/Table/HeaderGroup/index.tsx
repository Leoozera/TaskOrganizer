interface TableHeaderGroup {
    children: JSX.Element
}

export const TableHeaderGroup = ({children}: TableHeaderGroup): JSX.Element => {
    return <div className="table-header-group">{children}</div>;
}