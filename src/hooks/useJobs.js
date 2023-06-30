import { useEffect, useState } from 'react'
import { getJobs } from '../helpers/getJobs'

export const useJobs = (job, location) => {
    const [infoJobs, setInfoJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [isInvalid, setIsInvalid] = useState(false);

    const getInfoJobs = async () => {
        const newInfoJobs = await getJobs(job, location);
        setInfoJobs(newInfoJobs);
        setIsLoading(false)
    }

    useEffect(() => {
        getInfoJobs();
    }, [])

    return {
        infoJobs: infoJobs,
        isLoading: isLoading
    }
}
