let jobItem = document.querySelector(".job")

const getJobs = async() => {
    try {
        let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?limit=10")
        if (response.ok) {
            let data = await response.json()
            console.log(data)
        jobItem.innerHTML =    data.data.filter(d => d.job_type.includes("full_time")).map(d => 
                `
                <li>${d.title}</li>
                `
                )
        }
    } catch (error) {
        console.log(error)
    }

   
}
getJobs()