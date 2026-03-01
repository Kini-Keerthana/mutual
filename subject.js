// Subjects for each educational level
const subjects = {
    class1_5: ["Math", "Science", "English", "Social Studies", "Arts"],
    class6_10: ["Math", "Science", "English", "Social Studies", "Computer Science", "Arts", "Physical Education"],
    plus1: ["Math", "Physics", "Chemistry", "Biology", "English", "Computer Science", "Economics"],
    plus2: ["Math", "Physics", "Chemistry", "Biology", "English", "Computer Science", "Economics", "Commerce", "History"],
    undergraduate: ["Computer Science", "Engineering", "Commerce", "Arts", "Science", "Law", "Medicine"],
    postgraduate: ["MBA", "MSc", "MA", "MTech", "Law", "PhD Research", "Medical Specialization"]
};

// Contents for each subject
const contents = {
    "Math": ["Algebra", "Geometry", "Calculus Basics", "Probability & Statistics"],
    "Physics": ["Mechanics", "Optics", "Electromagnetism", "Thermodynamics"],
    "Chemistry": ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Lab Experiments"],
    "Biology": ["Botany", "Zoology", "Human Biology", "Genetics"],
    "English": ["Grammar", "Reading Comprehension", "Writing Skills", "Vocabulary"],
    "Social Studies": ["History", "Geography", "Civics", "Current Affairs"],
    "Arts": ["Drawing", "Painting", "Music", "Crafts"],
    "Computer Science": ["Basics of Computing", "Programming", "Typing Skills", "Internet & Safety"],
    "Physical Education": ["Exercise", "Sports", "Team Games", "Health & Fitness"],
    "Economics": ["Microeconomics", "Macroeconomics", "Finance Basics"],
    "Commerce": ["Accounting", "Business Studies", "Entrepreneurship"],
    "Engineering": ["Mechanical Basics", "Electrical Basics", "Civil Concepts"],
    "Law": ["Introduction to Law", "Legal Systems", "Case Studies"],
    "Medicine": ["Anatomy", "Physiology", "Basic Clinical Skills"],
    "MBA": ["Management Principles", "Marketing", "Finance", "HR Concepts"],
    "MSc": ["Advanced Research", "Subject Specialization Topics"],
    "MA": ["Literature", "History", "Philosophy", "Cultural Studies"],
    "MTech": ["Engineering Specializations", "Research & Projects"],
    "PhD Research": ["Advanced Research Methodology", "Thesis Writing"],
    "Medical Specialization": ["Specialized Clinical Knowledge", "Advanced Treatments"]
};

// Enable Next button only when selection is made
document.getElementById("levelSelect").addEventListener("change", function() {
    document.getElementById("next1").disabled = !this.value.trim();
});

document.getElementById("subjectSelect").addEventListener("change", function() {
    document.getElementById("next2").disabled = !this.value.trim();
});

// Move to next step
function nextStep(currentStep) {
    if (currentStep === 1) {
        const level = document.getElementById("levelSelect").value;
        populateSubjects(level);
        document.querySelector(".step1").classList.remove("active");
        document.querySelector(".step2").classList.add("active");
    } else if (currentStep === 2) {
        const subject = document.getElementById("subjectSelect").value;
        showContent(subject);
        document.querySelector(".step2").classList.remove("active");
        document.querySelector(".step3").classList.add("active");
    }
}

// Populate subjects based on level
function populateSubjects(level) {
    const subjectSelect = document.getElementById("subjectSelect");
    subjectSelect.innerHTML = '<option value="">-- Select Subject --</option>';
    subjects[level].forEach(sub => {
        const option = document.createElement("option");
        option.value = sub;
        option.textContent = sub;
        subjectSelect.appendChild(option);
    });
    document.getElementById("next2").disabled = true; // disable until subject selected
}

// Show recommended content
function showContent(subject) {
    const contentDiv = document.getElementById("contentRecommendations");
    if (contents[subject] && contents[subject].length > 0) {
        contentDiv.innerHTML = contents[subject].map(c => `• ${c}`).join("<br>");
    } else {
        contentDiv.innerHTML = "No content found for this subject yet.";
    }
}

// Restart process
function restart() {
    document.querySelector(".step3").classList.remove("active");
    document.querySelector(".step1").classList.add("active");
    document.getElementById("levelSelect").value = "";
    document.getElementById("subjectSelect").innerHTML = '<option value="">-- Select Subject --</option>';
    document.getElementById("next1").disabled = true;
    document.getElementById("next2").disabled = true;
}

