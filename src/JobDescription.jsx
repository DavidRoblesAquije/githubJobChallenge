export const JobDescription = ({ handleBack, title, company_name, location, logoCompany, typeOffer, posted, description, link }) => {

    const regresarClick = () => {
        handleBack();
    }

    return (
        <>
            <div className="informacionJob">
                <div className="container">
                    <h2 className='mainTitle'><b>Github</b> Jobs</h2>

                    <div className="row">
                        <div className="col-sm-12 col-lg-4 mb-4">
                            <div className="infoToApply">
                                <button
                                    className="btnBack"
                                    onClick={regresarClick}>
                                    Back to search
                                </button>

                                <p className="mt-3 mb-2">HOW TO APPLY</p>

                                <a href={link.link} target="_blank"><b>{link.text}</b></a>

                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-8">
                            <div className="d-flex align-items-center">
                                <p className="titleOfDescription">{title}</p>
                                <p className="typeOfferJob">{typeOffer}</p>
                            </div>

                            <div className="d-flex align-items-center">
                                <span className="material-symbols-outlined">
                                    schedule
                                </span>
                                <p className="m-0">{posted}</p>
                            </div>

                            <div className="mt-4 mb-4 d-flex align-items-center">
                                <img src={logoCompany} alt="Job" />
                                <div className="companyTitle">
                                    <p>{company_name}</p>
                                    <div className="d-flex align-items-center">
                                        <span className="material-symbols-outlined">
                                            public
                                        </span>
                                        <p className="m-0">{location}</p>
                                    </div>
                                </div>
                            </div>

                            <pre className="jobDescription">{description}</pre>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
