
import Joke from "../joke";
interface ChuckJokeProps {
    // jokes: Array<Joke>
    jokes: string
}


const ChuckJoke: React.FC<ChuckJokeProps> = (jokes) => {
    return (
        <>{jokes}</>
        // <ul>
        // {jokes.jokes.map((joke) => <li key={joke.id}>
        //     {joke.joke}</li>)}
        // </ul>
    )
}

export default ChuckJoke;