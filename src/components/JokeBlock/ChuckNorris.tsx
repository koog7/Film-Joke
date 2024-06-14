import {useEffect, useState} from "react";

interface jokeProps{
    value: string;
}

const ChuckNorris = () => {
    const [data , setData] = useState<jokeProps>();
    const url = 'https://api.chucknorris.io/jokes/random';

    const fetchData = async () => {
        const response = await fetch(url);
        if (response.ok) {
            const joke = await response.json();
            setData({value: joke.value});
        }
    };

    useEffect(() => {
        void fetchData();
    }, []);

    const btnClick = () => {
        setData({ value: '' });
        void fetchData();
    };

    return (
        <fieldset className="card ">
            <legend>Chuck Norris daily joke</legend>
            <div className="card-body w-100 d-flex">
                <p>{data?.value}</p>
                <div className={'ms-auto'}>
                    <button className={'ms-auto btn btn-success'} onClick={btnClick}>Roll</button>
                </div>
            </div>
        </fieldset>
    );
};

export default ChuckNorris;