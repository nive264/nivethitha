document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const pages = document.querySelectorAll(".page");
    const regForm = document.getElementById("regForm");
    const studentList = document.getElementById("studentList");
    const search = document.getElementById("search");

    function showPage(pageId) {
        pages.forEach(p => p.classList.remove("active"));
        document.getElementById(pageId).classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            showPage(link.dataset.page);
        });
    });

    function loadStudents() {
        const students = JSON.parse(localStorage.getItem("students") || "[]");
        studentList.innerHTML = "";
        students.forEach((s, i) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${s.name}</td>
                <td>${s.email}</td>
                <td>${s.course}</td>
                <td>${s.year}</td>
                <td><span class="action-btn" onclick="deleteStudent(${i})">Delete</span></td>
            `;
            studentList.appendChild(row);
        });
    }

    window.deleteStudent = function(index) {
        const students = JSON.parse(localStorage.getItem("students") || "[]");
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        loadStudents();
    };

    regForm.addEventListener("submit", e => {
        e.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const course = document.getElementById("course").value.trim();
        const year = document.getElementById("year").value;

        if (!name || !email || !course || !year) {
            alert("Please fill all fields!");
            return;
        }

        const students = JSON.parse(localStorage.getItem("students") || "[]");
        students.push({ name, email, course, year });
        localStorage.setItem("students", JSON.stringify(students));
        regForm.reset();
        alert("Student Registered!");
    });

    search.addEventListener("input", () => {
        const query = search.value.toLowerCase();
        document.querySelectorAll("#studentList tr").forEach(row => {
            row.style.display = row.children[0].textContent.toLowerCase().includes(query) ? "" : "none";
        });
    });

    loadStudents();
});
