import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Table } from "@/components/Table";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Fragment, useCallback, useEffect, useState } from "react";

type Materia = { id: string, nome: string; descricao: string; tarefas: string };

export default function Home() {
  const {getStorage} = useLocalStorage()

  const [materias, setMaterias] = useState<Materia[]>()

  const fetchData = useCallback(async () => {
    const materiasResult = await fetch("http://localhost:8080/api/materia", {
      method: 'GET',
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${getStorage('token')}` },
    })
    const materias = await materiasResult.json()
    setMaterias(materias)
  }, []);

  const handleCreate = useCallback(async () => {
    await fetch("http://localhost:8080/api/materia", {
      method: 'POST',
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${getStorage('token')}` },
      body: JSON.stringify({nome: "Nova matéria", duracao: 20, descricao: "Nova matéria"}),
    })

    location.reload()
  }, [])

  const handleDelete = useCallback(async (id: string) => {
    await fetch("http://localhost:8080/api/materia/" + id, {
      method: 'DELETE',
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${getStorage('token')}` },
      body: JSON.stringify({nome: "Nova matéria", duracao: 20, descricao: "Nova matéria"}),
    })
    const result = materias!.filter((materia) => materia.id === id)
    location.reload()
  }, [])


  useEffect(() => {
    fetchData()
  }, [fetchData])


  if(!materias) return <Fragment>Loading...</Fragment>;

  return (
    <Fragment>
      <Navbar />
      <div className="flex w-full justify-around items-center">
        <Card>
          <Fragment>
            <h1 className="text-yellow-500 text-lg">{materias.length}</h1>
            <p>Matérias</p>
          </Fragment>
        </Card>
        <Card>
          <Fragment>
            <h1 className="text-yellow-500 text-lg">0</h1>
            <p>Tarefas</p>
          </Fragment>
        </Card>
      </div>
      <Table data={materias} onDeleteRow={handleDelete}/>
      <Button onClick={handleCreate} label="+ Adicionar matéria"  />
    </Fragment>
  );
}
