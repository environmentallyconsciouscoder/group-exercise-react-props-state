import Joke from "../joke";

interface ChuckJokeProps {
    jokes: string;
    key: number;
}

const ChuckJokeOmit: React.FC<Omit<ChuckJokeProps, 'key'>> = ({ jokes }) => {
    return (
        <>
            {jokes}
        </>
    );
}

export default ChuckJokeOmit;
