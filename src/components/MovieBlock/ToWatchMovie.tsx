import MovieForm from "./MovieForm.tsx";
import {useState} from "react";
import MovieItem from "./MovieItem.tsx";

interface Props {
    id: number;
    text: string;
}

const ToWatchMovie = () => {

    const [movieName, setMovieName] = useState<Props[]>([
        { id: 1, text: 'test1' },
        { id: 2, text: 'test2' },
        { id: 3, text: 'test' }
    ]);

    const updater = (id: number, newText: string) => {
        setMovieName(movieName.map(movie =>
            movie.id === id ? { ...movie, text: newText } : movie
        ));
    };

    return (
        <div>
            <MovieForm  />

            {movieName.map((iter) => (
                <MovieItem key={iter.id} text={iter.text} textChange={(newText) => updater(iter.id, newText)}/>
            ))}
        </div>
    );
};

export default ToWatchMovie;