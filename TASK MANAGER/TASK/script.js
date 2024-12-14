function signOut() {
    alert('Sign out functionality goes here.');
}

function showContent(sectionId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section) => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('hidden');
        selectedSection.classList.add('active');
    }
}



// Handle Profile Editing
document.getElementById('edit-profile-btn').addEventListener('click', () => {
    const newName = prompt('Enter your new name:', 'John Doe');
    const newEmail = prompt('Enter your new email:', 'johndoe@example.com');
    const newDob = prompt('Enter your new date of birth:', '01 January 2000');
    const newSemester = prompt('Enter your current semester:', '6');
    const newBranch = prompt('Enter your branch:', 'Electronics and Communication Engineering');

    if (newName) document.querySelector('.profile-details p:nth-child(1)').innerHTML = `<strong>Name:</strong> ${newName}`;
    if (newEmail) document.querySelector('.profile-details p:nth-child(2)').innerHTML = `<strong>Email:</strong> ${newEmail}`;
    if (newDob) document.querySelector('.profile-details p:nth-child(3)').innerHTML = `<strong>Date of Birth:</strong> ${newDob}`;
    if (newSemester) document.querySelector('.profile-details p:nth-child(4)').innerHTML = `<strong>Semester:</strong> ${newSemester}`;
    if (newBranch) document.querySelector('.profile-details p:nth-child(5)').innerHTML = `<strong>Branch:</strong> ${newBranch}`;
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const sidebarItems = document.querySelectorAll('.sidebar li'); // Sidebar items

    // Toggle sidebar visibility
    hamburgerMenu.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Hide sidebar when a sidebar item is clicked (on mobile view)
    sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            sidebar.classList.remove('active'); // Remove active class to hide the sidebar
        });
    });

});


let tasks = [];

function showTasks(subjectId) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    const subjectTasks = tasks.filter(task => task.subject === subjectId);
    subjectTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.classList.add(task.priority);
        
        // Check if task is near due date (within 2 days)
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        const diffDays = Math.floor((dueDate - today) / (1000 * 3600 * 24));

        if (diffDays <= 2) {
            taskElement.classList.add('near-due');
        }

        taskElement.innerHTML = `
            <h4>${task.name}</h4>
            <p>Due Date: <span>${task.dueDate}</span></p>
            <div class="controls">
                <button onclick="toggleComplete(this)">✔</button>
                <button onclick="deleteTask(this)">🗑</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

function toggleComplete(button) {
    const taskElement = button.closest('.task');
    taskElement.classList.toggle('completed');
}

function deleteTask(button) {
    const taskElement = button.closest('.task');
    taskElement.remove();
}

function addNewTask() {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('task-due-date').value;
    const priority = document.getElementById('task-priority').value;

    if (taskName && dueDate && priority) {
        const newTask = {
            name: taskName,
            dueDate: dueDate,
            priority: priority,
            subject: 'digitalCommunicationTasks' // Assuming tasks belong to Digital Communication by default
        };

        tasks.push(newTask);
        showTasks('digitalCommunicationTasks');
        toggleTaskForm();
    }
}

function toggleTaskForm() {
    const form = document.getElementById('task-form');
    form.classList.toggle('hidden');
}

function filterTasks() {
    const searchQuery = document.getElementById('task-search').value.toLowerCase();
    const priorityFilter = document.getElementById('priority-filter').value;

    const filteredTasks = tasks.filter(task => {
        const matchesSearch = task.name.toLowerCase().includes(searchQuery);
        const matchesPriority = priorityFilter ? task.priority === priorityFilter : true;

        return matchesSearch && matchesPriority;
    });

    displayFilteredTasks(filteredTasks);
}

function displayFilteredTasks(filteredTasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');
        taskElement.classList.add(task.priority);
        
        // Check if task is near due date (within 2 days)
        const dueDate = new Date(task.dueDate);
        const today = new Date();
        const diffDays = Math.floor((dueDate - today) / (1000 * 3600 * 24));

        if (diffDays <= 2) {
            taskElement.classList.add('near-due');
        }

        taskElement.innerHTML = `
            <h4>${task.name}</h4>
            <p>Due Date: <span>${task.dueDate}</span></p>
            <div class="controls">
                <button onclick="toggleComplete(this)">✔</button>
                <button onclick="deleteTask(this)">🗑</button>
            </div>
        `;
        taskList.appendChild(taskElement);
    });
}

function showTasks(subjectId) {
    // Define tasks for each subject
    const tasks = {
        digitalCommunicationTasks: [
            { name: "Assignment 1: Signal Processing", dueDate: "15-12-2024", priority: "high" },
            { name: "Project 1: Modulation Techniques", dueDate: "20-12-2024", priority: "medium" },
            { name: "Assignment 2: Fourier Transforms", dueDate: "25-12-2024", priority: "low" },
            { name: "Project 2: Communication Systems", dueDate: "30-12-2024", priority: "high" },
            { name: "Quiz 1: Theory of Digital Signals", dueDate: "05-01-2025", priority: "medium" }
        ],
        antennaTasks: [
            { name: "Assignment 1: Antenna Design", dueDate: "10-12-2024", priority: "high" },
            { name: "Project 1: Antenna Testing", dueDate: "15-12-2024", priority: "medium" },
            { name: "Assignment 2: Wave Propagation Models", dueDate: "20-12-2024", priority: "low" },
            { name: "Quiz 1: Transmission Lines", dueDate: "22-12-2024", priority: "medium" },
            { name: "Project 2: Antenna Simulation", dueDate: "25-12-2024", priority: "high" }
        ]
    };

    // Clear the task list before adding new tasks
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    // Get the tasks for the selected subject
    const subjectTasks = tasks[subjectId];
    if (subjectTasks) {
        subjectTasks.forEach((task) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.classList.add(task.priority); // Add priority class

            taskElement.innerHTML = `
                <h4>${task.name}</h4>
                <p>Due Date: <span>${task.dueDate}</span></p>
                <div class="controls">
                    <button onclick="toggleComplete(this)">✔</button>
                    <button onclick="deleteTask(this)">🗑</button>
                </div>
            `;
            taskList.appendChild(taskElement);
        });
    } else {
        taskList.innerHTML = '<p>No tasks available for this subject.</p>';
    }
}

// Mark Task as Completed
function toggleComplete(button) {
    const taskElement = button.closest('.task');
    taskElement.classList.toggle('completed');
}

// Delete Task
function deleteTask(button) {
    const taskElement = button.closest('.task');
    taskElement.remove();
}

// Example of how you can call this function when a subject is selected from the sidebar
// You would update the 'subjectId' according to the subject chosen
// For example, if Digital Communication is selected:
showTasks('digitalCommunicationTasks');


function markAsComplete(button) {
    const taskItem = button.parentElement;
    const taskStatus = taskItem.querySelector('.task-details p:nth-child(4)');
    taskStatus.innerHTML = '<strong>Status:</strong> Completed';
    button.style.backgroundColor = '#7f8c8d';
    button.innerHTML = 'Completed';
    button.disabled = true;
}


function addNewTask(day, time, task) {
    const table = document.querySelector('table');
    const newRow = table.insertRow();
    
    const timeCell = newRow.insertCell(0);
    timeCell.textContent = time;
    
    const dayIndex = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].indexOf(day) + 1;
    const taskCell = newRow.insertCell(dayIndex);
    taskCell.textContent = task;
}

// Example usage: add a new task to Wednesday at 3:00 PM
addNewTask('Wednesday', '3:00 PM - 4:00 PM', 'New Subject');
