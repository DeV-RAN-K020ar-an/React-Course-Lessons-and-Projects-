const Table = ({ students, setStudents }) => {
    const handleDelete = (i) => {
        setStudents((prevStudents) => {
            let newStudents = prevStudents.filter((item, index) => {
                return index != i
            })
            return newStudents
        })
    }
    return (
        <div className="h-7/10 rounded-lg p-10 bg-cyan-600 shadow-xl">
            <table className="w-full overflow-hidden rounded-xl">
                <tr className="bg-cyan-800 h-10">
                    <th>Name</th>
                    <th>F.Name</th>
                    <th>L.Name</th>
                    <th>Age</th>
                    <th>More</th>
                </tr>
                {students.map((item, i) => {
                    return (
                        <tr className="bg-cyan-300 h-8 nth-of-type-[odd]:bg-cyan-500">
                            <td>{item.name}</td>
                            <td>{item.fathername}</td>
                            <td>{item.lastname}</td>
                            <td>{item.age}</td>
                            <td><button className="hover:scale-110 hover:cursor-pointer" onClick={() => handleDelete(i)}>🗑️</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Table