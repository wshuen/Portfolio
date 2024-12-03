document.addEventListener('DOMContentLoaded', ()=>{

    // education & skills section
    document.getElementById("show-education").addEventListener("click", function() {
        const education = document.getElementById("education")
        const skills = document.getElementById("skills")

        education.classList.add("block")
        education.classList.remove("hidden")
        skills.classList.add("hidden")
        skills.classList.remove("block")
    })

    document.getElementById("show-skills").addEventListener("click", function() {
        const education = document.getElementById("education")
        const skills = document.getElementById("skills")
        
        skills.classList.add("block")
        skills.classList.remove("hidden")
        education.classList.add("hidden")
        education.classList.remove("block")
    })

    // projects section
    const projectSection = document.getElementById('projects')

    function clearProjects(){
        projectSection.innerHTML = ''
    }

    function projectsInfo(data){
        data.forEach(project => {
            const languages = project.languages
            .map(language => `
                    <div class = "flex p-1">
                        <div>
                            <img class="w-7 h-7" src="${language.image}">
                        </div>
                        <span class="p-1">${language.name}</span>
                    </div>
                `)
            .join('') 

            const descriptions = project.description 
            .map(assignment => `
                    <li class="list-disc">${assignment}</li>
                `)
            .join('') 
            
            const projects = `
                <div class="flex flex-col border border-solid border-beige p-10 rounded-lg w-64 h-100">
                    <div class="flex justify-center">
                        <h2 class="text-brown text-center text-lg font-semibold">${project.title}</h2>
                    </div>
                    <br>
                    <div class="flex justify-center">
                        <ul>
                            ${descriptions}
                        </ul>
                    </div>
                    <div class="flex flex-col">
                        <br>
                        <p class="text-center font-semibold">Using:</p>
                        ${languages}
                    </div>
                </div> 
            `
            projectSection.innerHTML += projects
        })
    }

    fetch('https://6743e24ab7464b1c2a6631ee.mockapi.io/portfolio') 
    .then (response => response.json()) 
    .then (data => { 
        clearProjects();
        projectsInfo(data) 
    })
})

