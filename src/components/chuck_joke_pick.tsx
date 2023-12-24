import Joke from "../joke";

interface ChuckJokeProps {
    jokes: string;
    key: number;
}

const ChuckJokePick: React.FC<Pick<ChuckJokeProps, 'jokes'>> = ({ jokes }) => {
    return (
        <>
            {jokes}
        </>
    );
}

export default ChuckJokePick;
