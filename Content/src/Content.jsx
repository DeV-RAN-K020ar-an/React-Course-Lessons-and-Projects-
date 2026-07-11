import { useState } from "react"
import Form from "./Form"
import Table from "./Table"

const Content = () => {
  const initialLoad = [
    {
      name: 'Ahmad',
      fathername: 'Qasim',
      lastname: 'Ghafory',
      age: 34,
    },
    {
      name: 'Behzad',
      fathername: 'Mohmmad',
      lastname: 'Rahmani',
      age: 24
    },
    {
      name: 'Omar',
      fathername: 'Khalil',
      lastname: 'Wasiq',
      age: 22
    },
    {
      name: 'Behzad',
      fathername: 'Mohmmad',
      lastname: 'Rahmani',
      age: 24
    },
  ]
  const [students, setStudents] = useState(initialLoad)

  return (
    <main className="h-screen bg-cyan-900 p-10 flex flex-col gap-10">
      <Form setStudents={setStudents} />
      <Table setStudents={setStudents} students={students} />
    </main>
  )
}

export default Content