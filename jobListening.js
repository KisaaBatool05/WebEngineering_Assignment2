function displayJob(job) {
    const jobList = document.getElementById('jobList');

    const jobContainer = document.createElement('div');
    jobContainer.classList.add('job');

    const jobTitle = document.createElement('h2');
    jobTitle.textContent = job.title;

    const jobDescription = document.createElement('p');
    jobDescription.textContent = job.description;

    const jobDetails = document.createElement('ul');

    const jobTag = document.createElement('li');
    jobTag.textContent = `Tag: ${job.tag}`;

    const jobSalary = document.createElement('li');
    jobSalary.textContent = `Salary: ${job.salary}`;

    const jobLocation = document.createElement('li');
    jobLocation.textContent = `Location: ${job.location}`;

    const jobExperience = document.createElement('li');
    jobExperience.textContent = `Experience: ${job.experience}`;

    

    jobDetails.appendChild(jobTag);
    jobDetails.appendChild(jobSalary);
    jobDetails.appendChild(jobLocation);
    jobDetails.appendChild(jobExperience);
    

    jobContainer.appendChild(jobTitle);
    jobContainer.appendChild(jobDescription);
    jobContainer.appendChild(jobDetails);
  

    jobList.appendChild(jobContainer);
}



async function getJobsAvailable() {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = "login.html";
        return;
    }

    const response = await fetch('http://localhost:3000/user/JobListening', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
    });

    if (response.ok) {
        const data = await response.json(); 
        const jobs = data.jobs; 

        if (Array.isArray(jobs)) {
            jobs.forEach(job => { 
                displayJob(job);
                
                
            });
        } else {
            
        }
    } else {
       
    }
}