export const getJobs = async (job, locationJob) => {
    try {
        const url = `https://serpapi.com/search.json?api_key=1ac97ef8032b6ea4b24ddb0f3cadf460bfbe8986c2604c73c346a103407a9d71&engine=google_jobs&q=${job}&location=${locationJob}`;

        const resp = await fetch(url);
        if (!resp.ok) {
            throw new Error("Error al realizar la busqueda");
        }

        const { jobs_results } = await resp.json();

        const jobsOffer = jobs_results.map(jobOffer => ({
            id: jobOffer.job_id,
            title: jobOffer.title,
            company_name: jobOffer.company_name,
            description: jobOffer.description,
            logoCompany: jobOffer.thumbnail,
            location: jobOffer.location,
            posted: jobOffer.detected_extensions.posted_at,
            typeOffer: jobOffer.detected_extensions.schedule_type,
            link: jobOffer.related_links[0]
        }))

        return jobsOffer;
    } catch (error) {
        console.log(error);
        throw new Error("Error al buscar trabajos");
    }
}
