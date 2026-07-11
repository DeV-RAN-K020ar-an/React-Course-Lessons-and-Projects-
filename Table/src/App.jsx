import Table from "./Table"

const App = () => {
  const students = [
    {
      id: 1,
      name: "Taher",
      lastname: "Shirzad",
      age: 21,
      score: 50,
      status: '● Failed'
    },
    {
      id: 2,
      name: "Farzad",
      lastname: "Hakimi",
      age: 29,
      score: 85,
      status: '● Failed'
    },
    {
      id: 3,
      name: "Daniyal",
      lastname: "Rasooly",
      age: 26,
      score: 93,
      status: '● Successed'
    },
    {
      id: 4,
      name: "Haroon",
      lastname: "Karimi",
      age: 22,
      score: 100,
      status: '● Successed'
    },
  ];

  return (
    <main>
      <Table students={students} />
    </main>
  );
};
export default App

// function Table (students) {
//     return (
//         <table>
//         <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Last Name</th>
//             <th>Age</th>
//         </tr>
//         {students.map((std) => {
//                 return (
//                 <tr>
//                     <td>{std.id}</td>
//                     <td>{std.name}</td>
//                     <td>{std.lastname}</td>
//                     <td>{std.age}</td>
//                 </tr>
//             )
//         })}
//         </table>
// )}
