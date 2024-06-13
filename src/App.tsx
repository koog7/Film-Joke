import './App.css'
import ChuckNorris from "./components/JokeBlock/ChuckNorris.tsx";
import ToWatchMovie from "./components/MovieBlock/ToWatchMovie.tsx";

const App = () => {

  return (
        <>
            <ToWatchMovie />
            <ChuckNorris />
        </>
  )
};

export default App
