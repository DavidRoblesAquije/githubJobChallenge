import { useEffect, useState } from 'react';
import { JobItem } from './JobItem';
import { useJobs } from './hooks/useJobs'

export const JobGrid = ({ currentJob, currentlocation }) => {

    if (currentJob.length == 0) return;
    const { infoJobs, isLoading } = useJobs(currentJob, currentlocation);

    return (
        <>
            {
                isLoading && <span>Cargando....</span>
            }


            {
                infoJobs.map(infoJob => (

                    <JobItem
                        key={infoJob.id}
                        {...infoJob} />
                ))
            }

        </>
    )
}
