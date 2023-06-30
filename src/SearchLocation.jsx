import { useState } from 'react'

export const SearchLocation = ({ onGetCurrentLocation }) => {

    const [locationJob, setLocationJob] = useState("");
    const inputLocationSearch = ({ target }) => { setLocationJob(target.value) }

    const submitLocationJob = (e) => {
        e.preventDefault();
        ///
        if (locationJob.trim().length == 0) {
            onGetCurrentLocation("london")
        }
        if (locationJob.trim().length == 1) return
        onGetCurrentLocation(locationJob.trim().toLocaleLowerCase());
    }

    return (
        <>

            <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                    Full time
                </label>
            </div>

            <p className='mb-3'>Location</p>

            <form onSubmit={submitLocationJob}>
                <span className="material-symbols-outlined">
                    public
                </span>
                <input
                    className='form-control'
                    type="text"
                    placeholder='City or country'
                    value={locationJob}
                    onChange={inputLocationSearch}
                />
            </form>


            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    London
                </label>
            </div>
            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" for="flexRadioDefault2">
                    Amsterdam
                </label>
            </div>
            <div className="form-check mt-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    New York
                </label>
            </div>
            <div className="form-check mt-3 mb-4">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                <label className="form-check-label" for="flexRadioDefault1">
                    Berlin
                </label>
            </div>
        </>
    )
}
