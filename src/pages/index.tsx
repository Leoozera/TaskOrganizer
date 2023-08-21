import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Table } from "@/components/Table";
import { Fragment } from "react";


const fakeData = [
  {
    materia: "Python - IA & Machine Learning",
    professor: "Professor Pedro Vidal",
    tarefas: "1"
  },
  {
    materia: "Javascript to Typescript",
    professor: "Professor Marcelo Goes",
    tarefas: "2"
  },
  {
    materia: "Python - IA & Machine Learning",
    professor: "Professor Leo Stronda",
    tarefas: "2"
  },
  {
    materia: "Python - IA & Machine Learning",
    professor: "Professor Breno Massa",
    tarefas: "10"
  },
  {
    materia: "Python - IA & Machine Learning",
    professor: "Professor José Brasilino",
    tarefas: "2"
  },
]


export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <div className="flex w-full justify-around items-center">
        <Card>
          <Fragment>
            <h1 className="text-yellow-500 text-lg">5</h1>
            <p>Matérias</p>
          </Fragment>
        </Card>
        <Card>
          <Fragment>
            <h1 className="text-yellow-500 text-lg">5</h1>
            <p>Professores</p>
          </Fragment>
        </Card>
        <Card>
          <Fragment>
            <h1 className="text-yellow-500 text-lg">17</h1>
            <p>Tarefas</p>
          </Fragment>
        </Card>
      </div>
      <Table data={fakeData}/>
    </Fragment>
  );
}
