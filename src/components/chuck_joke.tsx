
import Joke from "../joke";
interface ChuckJokeProps {
    jokes: string
}


const ChuckJoke: React.FC<ChuckJokeProps> = ({jokes}) => {
    return (
        <>{jokes}</>
    )
}

export default ChuckJoke;