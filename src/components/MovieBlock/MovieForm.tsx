import React, {useState} from "react";

interface FormProps{
    addTitle: (text: string) => void;
}

const MovieForm: React.FC<FormProps> = ({addTitle}) => {

    const [MovieName, setMovieName] = useState("");

    const followChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMovieName(e.target.value);
    };

    const btnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (MovieName.length === 0) return;
        addTitle(MovieName);
        setMovieName("");
    };


    return (
        <div className={'d-flex justify-content-center'}>
            <form className={'d-flex mb-2 border border-info-subtle rounded p-3 justify-content-center w-50'} onSubmit={btnSubmit}>
                <input className={'form-control w-50'} type={"text"} placeholder={'Введите название фильма'} value={MovieName} onChange={followChange}/>
                <button type={"submit"} className={'btn btn-primary ms-3 '}>Отправить</button>
            </form>
        </div>
    );
};

export default MovieForm;