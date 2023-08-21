import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Table } from "@/components/Table";
import { Fragment } from "react";
import { Card } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

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
      <Table />
    </Fragment>
  );
}
