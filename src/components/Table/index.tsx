import { Button } from "../Button";
import { TableCell } from "./Cell";
import { TableHeaderGroup } from "./HeaderGroup";
import { TableRow } from "./Row";
import { TableRowGroup } from "./RowGroup";

interface TableProps {
  data: { materia: string; professor: string; tarefas: string }[];
}

export const Table = ({ data }: TableProps) => {
  return (
    <div className="table w-full p-10 bg-zinc-900">
      <TableHeaderGroup>
        <TableRow>
          <TableCell className="text-left">
            <p>Matéria</p>
          </TableCell>
          <TableCell className="text-left">
            <p>Professor</p>
          </TableCell>
          <TableCell className="text-left">
            <p>Pendências</p>
          </TableCell>
          <TableCell className="text-left  lg:hidden">
            <p>Ações</p>
          </TableCell>
        </TableRow>
      </TableHeaderGroup>

      {data.map((result, index) => {
        return (
          <TableRowGroup
            key={index}
            variant={index % 2 === 0 ? "light" : "dark"}
          >
            <TableRow>
              <TableCell>
                <p>{result.materia}</p>
              </TableCell>
              <TableCell>
                <p>{result.professor}</p>
              </TableCell>
              <TableCell>
                <p>{result.tarefas}</p>
              </TableCell>
              <Button label="Remover" />
            </TableRow>
          </TableRowGroup>
        );
      })}
    </div>
  );
};
