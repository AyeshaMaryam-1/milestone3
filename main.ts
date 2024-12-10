const form = document.getElementById('form') as HTMLFormElement;
const displayElement = document.getElementById('display-resume') as HTMLFormElement;

form.addEventListener('submit', (event: Event)=> {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLFormElement).value
    const email = (document.getElementById('email') as HTMLFormElement).value
    const phone = (document.getElementById('phone') as HTMLFormElement).value
    const education = (document.getElementById('education') as HTMLFormElement).value
    const experience = (document.getElementById('experience') as HTMLFormElement).value
    const skills = (document.getElementById('skills') as HTMLFormElement).value

    const resumeHTML = `
        <h2><strong>Resume</strong></h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong>${name}</p>
        <p><strong>Email:</strong>${name}</p>
        <p><strong>Phone:</strong>${name}</p>
        
        <h3>Education</h3>
        <p>${education}</p>
        
        <h3>Experience</h3>
        <p>${experience}</p>
        
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    if(displayElement){
        displayElement.innerHTML = resumeHTML;
    }
    else{
        console.error('Resume display element is missing')
    }

})