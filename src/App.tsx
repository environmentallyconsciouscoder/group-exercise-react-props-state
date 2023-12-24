import './App.css';
import { useState } from 'react';
import ChuckCard from './components/chuck_card';
import ChuckInfo from './components/chuck_info';
import ChuckJoke from './components/chuck_joke';
import Joke from './joke';


// ChuckJoke is being tasked with handling an array of jokes, which seems to be beyond the scope suggested by its name.
// For the purposes of this exercise,
// it'd be nominatively sensible to commit the cardinal sin of having App.tsx map/filter over the data to render a ChuckJoke
// for each element of the array.

// This refactor introduces some implications for how you approach the type within chuck_joke.tsx.

// I'd suggest familiarising yourself with TS's utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html
// There are a whole bunch there, so to narrow your focus a little,
// particularly useful/common utility types we see in React apps are Pick, Omit and Record:

// E.g.
// If indeed our ChuckJoke component were to only need the joke string, we can 'pick' the keys we want from the existing Joke type:

// const ChuckJoke: React.FC< Pick<Joke, 'joke'> > = ( { joke } ) => ( <p> { joke } </p> )

// Pretty cool, if you ask me.

function App() {

	const [chuckGreeting, setChuckGreeting] = useState("I am Chuck Norris!!!")
	const [whalesSaved, setWhalesSaved] = useState(700)
	const [roundHouseKicks, setRoundHouseKicks] = useState(300000)
	const [jokes, setJokes] = useState([{
		"id": 1,
		"joke": "Chuck Norris doesn’t read books. He stares them down until he gets the information he wants.",
	},
	{
		"id": 2,
		"joke": "Time waits for no man. Unless that man is Chuck Norris.",
	},
	{
		"id": 3,
		"joke": "The dinosaurs looked at Chuck Norris the wrong way once. You know what happened to them.",
	},
	{
		"id": 4,
		"joke": "Chuck Norris does not own a stove, oven, or microwave, because revenge is a dish best served cold.",
	}])
	const filteredJokes = jokes.filter(joke => joke.id === 3);

	return (
		<div className="App">

			<h1>React props and state</h1>
			<ChuckCard greeting={chuckGreeting} />

			<h2>Chuck Info: </h2>
			<ChuckInfo numberOfWhalesSaved={whalesSaved} numberOfRoundHouseKicks={roundHouseKicks} />

			<h2>Jokes: </h2>
			{/* <ChuckJoke jokes={jokes} /> */}
			{jokes.map(({ id, joke }) => (
				<ChuckJoke key={id} jokes={joke} />
			))}

			<h2>Filtered Jokes: </h2>
			{/* <ChuckJoke jokes={filteredJokes} /> */}
			{filteredJokes.map(({ id, joke }) => (
				<ChuckJoke key={id} jokes={joke} />
			))}
		</div>
	);
}

export default App;
