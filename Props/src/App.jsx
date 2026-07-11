import Card from "./Card"
const App = () => {
    return (
        <main>
        <Card 
            title="Dark Souls II" 
            description="Dark Souls II is an action role-playing..."
            image="/images/Dark-Souls-II.jpg"
            color="lightblue"
        />
        <Card 
            title="Dark Souls III" 
            description="Dark Souls III is the third and final..."
            image="/images/Dark-Souls-III-03.jpg"
            color="red"
        />
        <Card 
            title="Elden Ring" 
            description="Elden Ring is a critically acclaimed action..."
            image="/images/elden ring.jpg"
            color="orange"
        />
        </main>
    )
}
export default App