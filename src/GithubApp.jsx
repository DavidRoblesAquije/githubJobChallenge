import { useState } from 'react'
import { getJobs } from './helpers/getJobs'
import { SearchJob } from './SearchJob'
import { useJobs } from './hooks/useJobs'
import { JobGrid } from './JobGrid'
import { SearchLocation } from './SearchLocation'

export const GithubApp = () => {

    const [currentJob, setCurrentJob] = useState("React");
    const [currentlocation, setCurrentlocation] = useState("New York")

    const onGetCurrentJob = (newJob) => {
        if (currentJob == newJob) return;
        setCurrentJob(newJob);
    }
    const onGetCurrentLocation = (newLocation) => {
        if (currentlocation == newLocation) return;
        setCurrentlocation(newLocation)
    }

    return (
        <>
            <div className='container'>
                <h2 className='mainTitle'><b>Github</b> Jobs</h2>
                {/* Input para buscar un trabajo */}
                <SearchJob
                    onGetCurrentJob={(value) => onGetCurrentJob(value)}
                />

                <div className='container'>
                    <div className="row">
                        <div className='col-sm-12 col-md-4 col-lg-4'>
                            <SearchLocation
                                onGetCurrentLocation={(value) => onGetCurrentLocation(value)}
                            />
                        </div>

                        <div className='col-sm-12 col-md-8 col-lg-8'>
                            {/* Informacion que se esta buscando */}
                            <JobGrid
                                key={currentJob + currentlocation}
                                currentJob={currentJob}
                                currentlocation={currentlocation} />
                        </div>
                    </div>
                </div>
            </div>

            <footer className='text-center'>
                <p>Created by <a href="https://www.linkedin.com/in/davidroblesaquije/" target='_blank'><b>David Robles</b></a> - devChallenges.io </p>
            </footer>
        </>
    )
}
