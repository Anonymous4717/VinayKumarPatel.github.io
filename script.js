// Show and hide certification form
document.getElementById('add-cert-btn').addEventListener('click', function() {
    document.getElementById('cert-form').classList.toggle('hidden');
});

document.getElementById('cert-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const certInput = document.getElementById('cert-input').value;
    if (certInput) {
        const newCert = document.createElement('li');
        newCert.textContent = certInput;
        document.getElementById('cert-list').appendChild(newCert);
        document.getElementById('cert-input').value = '';
    }
});

// Show and hide project form
document.getElementById('add-project-btn').addEventListener('click', function() {
    document.getElementById('project-form').classList.toggle('hidden');
});

document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const projectInput = document.getElementById('project-input').value;
    if (projectInput) {
        const newProject = document.createElement('li');
        newProject.textContent = projectInput;
        document.getElementById('project-list').appendChild(newProject);
        document.getElementById('project-input').value = '';
    }
});
