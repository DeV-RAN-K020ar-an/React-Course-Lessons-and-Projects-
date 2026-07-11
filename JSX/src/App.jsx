const App = () => {
    
    let worldCupTeams = ['France', 'Brazil', 'Iran', 'Germany', 'Spain', 'USA']

    return (
        <nav>
            <ul>
                {worldCupTeams.map((team) => <li>{team}</li>)}
            </ul>
        </nav>
    )
}

export default App