// Enroll user in a course
function enroll(courseName) {
    alert(`You have enrolled in: ${courseName}`);
    // Show progress bar
    updateProgress(courseName);
}

// Update progress bar as user progresses
function updateProgress(courseName) {
    let progressBar;
    if (courseName === 'Web Development Basics') {
        progressBar = document.getElementById('progress1');
    } else if (courseName === 'Advanced JavaScript') {
        progressBar = document.getElementById('progress2');
    }

    let progress = 0;
    let interval = setInterval(function () {
        if (progress < 100) {
            progress += 10;
            progressBar.style.width = progress + '%';
        } else {
            clearInterval(interval);
            completeCourse(courseName);
        }
    }, 1000);
}

// Handle course completion
function completeCourse(courseName) {
    document.getElementById("completed-course").innerText = courseName;
    document.getElementById("certificate").style.display = 'block';
}

// Download certificate (simulated)
function downloadCertificate() {
    alert("Downloading certificate for " + document.getElementById("completed-course").innerText);
}

// Reset course and progress
function resetCourse() {
    document.getElementById("certificate").style.display = 'none';
    document.getElementById("progress1").style.width = '0%';
    document.getElementById("progress2").style.width = '0%';
}
