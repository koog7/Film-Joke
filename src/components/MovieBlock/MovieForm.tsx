const MovieForm = () => {
    return (
        <div className={'d-flex justify-content-center'}>
            <form className={'d-flex mb-2 border border-info-subtle rounded p-3 justify-content-center w-50'}>
                <input className={'form-control w-50'} type={"text"} placeholder={'Введите название фильма'}/>
                <button className={'btn btn-primary ms-3 '}>Отправить</button>
            </form>
        </div>
    );
};

export default MovieForm;