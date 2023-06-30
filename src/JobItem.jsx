import { useState } from "react"
import { JobDescription } from "./JobDescription";

export const JobItem = ({ title, company_name, location, logoCompany, typeOffer, posted, description, link }) => {

    const [showDescription, setShowDescription] = useState(false)

    const handleClick = () => {
        setShowDescription(true);
    }

    const handleBack = () => {
        setShowDescription(false);
    }

    return (
        <>
            {
                showDescription && (
                    <JobDescription
                        handleBack={handleBack}
                        title={title}
                        company_name={company_name}
                        location={location}
                        logoCompany={logoCompany}
                        typeOffer={typeOffer}
                        posted={posted}
                        description={description}
                        link={link}
                    />
                )
            }

            <div className='card cardJob' onClick={handleClick}>
                <div className="jobImage">
                    <img src={logoCompany} alt="Job" />
                </div>
                <div className="jobInfo">

                    <span className="companyJob">{company_name}</span>

                    <p className="titleJob">{title}</p>

                    <div className="position-relative">
                        <p className="typeOfferJob">{typeOffer}</p>

                        <div className="globalInfoJob">
                            <div className="d-flex align-items-center">
                                <span className="material-symbols-outlined">
                                    public
                                </span>
                                <p className="m-0">{location}</p>
                            </div>
                            <div className="d-flex align-items-center">
                                <span className="material-symbols-outlined">
                                    schedule
                                </span>
                                <p className="m-0">{posted}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
