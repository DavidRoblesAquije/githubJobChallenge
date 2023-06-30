import { useState } from 'react'

export const SearchJob = ({ onGetCurrentJob }) => {

    const [inputValue, setInputValue] = useState("")
    const inputJobSearch = ({ target }) => setInputValue(target.value);

    const submitJobSeatch = (e) => {
        e.preventDefault();
        ////
        if (inputValue.trim().length <= 2) return;
        onGetCurrentJob(inputValue.trim().toLocaleLowerCase());
        // setInputValue("")
    }

    return (
        <div className="formContainer">
            <form onSubmit={submitJobSeatch}>
                <span className="material-symbols-outlined">
                    work
                </span>
                <input
                    className='form-control'
                    placeholder='Title, companies, expertise or benefits'
                    type="text"
                    value={inputValue}
                    onChange={inputJobSearch}
                />

                <button className='btn btn-primary'>Search</button>

            </form>
        </div>
    )
}
