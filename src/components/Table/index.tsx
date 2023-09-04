import { Button } from "../Button";
import { TableCell } from "./Cell";
import { TableHeaderGroup } from "./HeaderGroup";
import { TableRow } from "./Row";
import { TableRowGroup } from "./RowGroup";

interface TableProps {
  data: { id: string, nome: string; descricao: string; tarefas: string }[];
  onDeleteRow: (id: string) => void;
}

export const Table = ({ data, onDeleteRow }: TableProps) => {
  return (
    <div className="table w-full p-10 bg-zinc-900">
      <TableHeaderGroup>
        <TableRow>
          <TableCell className="text-left">
            <p>Matéria</p>
          </TableCell>
          <TableCell className="text-left">
            <p>Identificador</p>
          </TableCell>
          <TableCell className="text-left">
            <p>Descricao</p>
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
                <p>{result.nome}</p>
              </TableCell>
              <TableCell>
                <p>{result.id}</p>
              </TableCell>
              <TableCell>
                <p>{result.descricao}</p>
              </TableCell>
              <TableCell>
                <p>{result.tarefas ?? "Nenhuma"}</p>
              </TableCell>
              <Button label="Remover" onClick={() => onDeleteRow(result.id)}/>
            </TableRow>
          </TableRowGroup>
        );
      })}
    </div>
  );
};
