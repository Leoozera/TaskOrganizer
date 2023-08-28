import { Card } from "@/components/Card";
import { Navbar } from "@/components/Navbar";
import { Table } from "@/components/Table";
import { Fragment, useCallback, useEffect, useState } from "react";


const userAccount = {
  email: process.env.NEXT_PUBLIC_TEST_EMAIL!,
  senha: process.env.NEXT_PUBLIC_TEST_PASSWORD!,
  nome: process.env.NEXT_PUBLIC_TEST_NAME!
}

export default function Home() {
  
  const [materias, setMaterias] = useState<[]>()

  const fetchData = useCallback(async () => {
    const accessToken = await fetch("http://localhost:8080/api/login", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({email: userAccount.email, senha: userAccount.senha}),
    })

    const { token } = await accessToken.json()

    const materiasResult = await fetch("http://localhost:8080/api/materia", {
      method: 'GET',
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
    })
    const materias = await materiasResult.json()
    setMaterias(materias)
  }, []);

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
      <Table data={materias}/>
    </Fragment>
  );
}
