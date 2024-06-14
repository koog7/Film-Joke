import MovieForm from "./MovieForm.tsx";
import {useState} from "react";
import MovieItem from "./MovieItem.tsx";

interface Props {
    id: number;
    text: string;
}

const ToWatchMovie = () => {

    const [movieName, setMovieName] = useState<Props[]>([]);

    const updater = (id: number, newText: string) => {
        setMovieName(movieName.map(movie =>
            movie.id === id ? { ...movie, text: newText } : movie
        ));
    };

    const deleteById = (id:number) => {
        for (let i = 0; i < movieName.length; i++) {
            if (movieName[i].id === id) {
                movieName.splice(i, 1);
                break;
            }
        }
        setMovieName([...movieName]);
    };

    const addMovieName = (name : string) => {
        setMovieName([...movieName, {id: Math.random(), text: name}]);
    };

    return (
        <div>
            <MovieForm addTitle={addMovieName}/>
            <h3 className={'text-center'}>To watch list:</h3>
            <div className={'mb-3'}>
                {movieName.map((iter) => (
                    <MovieItem key={iter.id} id={iter.id} text={iter.text} textChange={(newText) => updater(iter.id, newText)} deleteTask={() => deleteById(iter.id)}/>
                ))}
            </div>
        </div>
    );
};

export default ToWatchMovie;