import React, {useEffect, useState} from "react";

interface MovieProps {
    text: string;
    textChange: (newText: string) => void;
}

const MovieItem: React.FC<MovieProps> = React.memo(({text, textChange}) => {

    const [inputText, setInputText] = useState(text);

    useEffect(() => {
        setInputText(text);
        console.log(text)
    }, [text]);

    const trackingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setInputText(newText);
        console.log(newText)
        textChange(newText);
    };

    return (
        <div>
            <div>
                <p>{text}</p>
                <input value={inputText}  placeholder={text} onChange={trackingInput} />
            </div>
        </div>
    );
});

export default MovieItem;