// Predefined courses/resources based on goal + interest
const courses = [
    { goal: "improve_grades", interest: "math", name: "Math Practice Worksheets" },
    { goal: "improve_grades", interest: "science", name: "Science Lab Activities" },
    { goal: "learn_skills", interest: "computer", name: "Intro to Programming" },
    { goal: "learn_skills", interest: "math", name: "Fun Math Puzzles" },
    { goal: "competitive_exam", interest: "math", name: "Competitive Math Tricks" },
    { goal: "competitive_exam", interest: "science", name: "Physics & Chemistry Shortcuts" },
    { goal: "career_guidance", interest: "computer", name: "Career in AI & Data Science" },
    { goal: "career_guidance", interest: "arts", name: "Creative Design & Arts Career" },
    { goal: "learn_skills", interest: "english", name: "English Speaking & Writing Skills" },
    { goal: "improve_grades", interest: "history", name: "History Notes & Summaries" },
];

// Function to get recommendations
function getRecommendations() {
    const level = document.getElementById("level").value;
    const goal = document.getElementById("goal").value;
    const interest = document.getElementById("interest").value;
    const recommendationList = document.getElementById("recommendations");

    recommendationList.innerHTML = ""; // Clear previous results

    if (!goal || !interest) {
        alert("Please select both your goal and area of interest!");
        return;
    }

    // Step 1: Exact match (goal + interest)
    const exactMatches = courses.filter(course => course.goal === goal && course.interest === interest);

    // Step 2: Related recommendations (same interest OR same goal)
    const relatedCourses = courses.filter(course =>
        (!exactMatches.includes(course)) &&
        (course.goal === goal || course.interest === interest)
    );

    if (exactMatches.length === 0 && relatedCourses.length === 0) {
        recommendationList.innerHTML = "<li>No courses found for your selection.</li>";
        return;
    }

    // Display exact matches first
    if (exactMatches.length > 0) {
        exactMatches.forEach(course => {
            const li = document.createElement("li");
            li.textContent = course.name + " (Exact Match)";
            recommendationList.appendChild(li);
        });
    }

    // Display related courses
    if (relatedCourses.length > 0) {
        relatedCourses.forEach(course => {
            const li = document.createElement("li");
            li.textContent = course.name + " (Recommended)";
            recommendationList.appendChild(li);
        });
    }
}
