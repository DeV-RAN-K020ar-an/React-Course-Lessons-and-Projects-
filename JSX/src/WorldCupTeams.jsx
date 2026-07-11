const WorldCupTeams = () => {
    const teams = [
        {
            name: 'France',
            worldcups: 3,
            color: 'blue'
        },
        {
            name: 'Germany',
            worldcups: 4,
            color: 'orange'
        },
        {
            name: 'Brazil',
            worldcups: 5,
            color: 'green'
        },
        {
            name: 'Spain',
            worldcups: 2,
            color: 'red'
        },
        {
            name: 'Iran',
            worldcups: 0,
            color: 'green'
        }
    ]

    return (
        <nav>
            <table border='1' style={{width: '100%'}}>
                <tr>
                    <th>Name</th>
                    <th>World Cups</th>
                </tr>
                {teams.map((team) => {
                    return (
                        <tr style={{
                            backgroundColor: team.color
                        }}>
                            <td>{team.name}</td>
                            <td>{team.worldcups}</td>
                        </tr>
                    )
                })}
            </table>
        </nav>
    )
}

export default WorldCupTeams