import Joke from "../joke";
interface ChuckJokeProps {
    jokes: Array<Joke>
}

const ChuckJoke: React.FC<ChuckJokeProps> = (jokes) => {
    return (
        <ul>
        {jokes.jokes.map((joke) => <li key={joke.id}>
            {joke.joke}</li>)}
        </ul>
    )
}




export default ChuckJoke;
