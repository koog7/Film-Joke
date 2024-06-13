import React from "react";

interface MovieProps{
    text: string;
}

const MovieItem: React.FC<MovieProps> = ({text}) => {
    return (
        <div>
            <div>
                <p>{text}</p>
                <input placeholder={text} value={text}/>
            </div>
        </div>
    );
};

export default MovieItem;