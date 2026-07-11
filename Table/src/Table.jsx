const Table = ({students}) => {
    let sucessedStudent = students.filter((std) => {
        return std.score >= 90
    })
    return (
        <table>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Score</th>
                <th>Status</th>
            </tr>
            {sucessedStudent.map((std) => {
                return (
                <tr style={{
                    backgroundColor: std.score >= 90 ? 'lightgreen' : 'lightcoral',
                }}>
                    <td>{std.id}</td>
                    <td>{std.name}</td>
                    <td>{std.lastname}</td>
                    <td>{std.age}</td>
                    <td>{std.score}</td>
                    <td>{std.status}</td>
                </tr>
                )
            })}
        </table>
    )
}

export default Table