import React, {useEffect, useState} from "react";

interface MovieProps {
    id:number
    text: string;
    textChange: (newText: string) => void;
    deleteTask: () => void;
}

const MovieItem: React.FC<MovieProps> = React.memo(({text, textChange , deleteTask}) => {

    const [inputText, setInputText] = useState(text);

    useEffect(() => {
        setInputText(text);
    }, [text]);

    console.log(`Rendering MovieItem with text: ${text}`);

    const trackingInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setInputText(newText);
        textChange(newText);
    };

    return (
        <div className={'d-flex justify-content-center'}>
            <div className={'p-3 w-50 d-flex'}>
                <input className={'form-control w-100'} value={inputText}  placeholder={text} onChange={trackingInput} />
                <button className={'btn btn-light border border-black ms-3'} onClick={deleteTask}>❌</button>
            </div>
        </div>
    );
}, (prevProps, nextProps) => {
    return  prevProps.text === nextProps.text;
});

export default MovieItem;