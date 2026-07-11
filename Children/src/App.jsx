import Greeting from "./Greeting"

const App = () => {
    return (
        <main>
            <Greeting title="Component Props1">
                <p>Greeting From Children (1) !</p>
            </Greeting>
            <Greeting title="Component Props2">
                <p>Greeting From Children  (2) !</p>
            </Greeting>
        </main>
    )
}
export default App