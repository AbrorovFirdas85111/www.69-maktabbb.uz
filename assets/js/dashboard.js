// dashboard.js

// Function to toggle the sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Function to close the sidebar when clicking outside
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.getElementById('sidebar-toggle');
    
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Function to show alert messages dynamically
function showAlert(type, message) {
    const alertContainer = document.getElementById('alerts');
    const alertBox = document.createElement('div');
    
    alertBox.classList.add('alert', type);
    alertBox.innerHTML = `
        <span class="alert-message">${message}</span>
        <button class="close-btn" onclick="closeAlert(this)">×</button>
    `;
    
    alertContainer.appendChild(alertBox);
}

// Function to close alert
function closeAlert(button) {
    const alertBox = button.parentElement;
    alertBox.remove();
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formAction = form.getAttribute('action');

    // Simulate a form submission (you can replace it with actual AJAX logic)
    console.log('Form data submitted:', formData);

    // Show success alert
    showAlert('success', 'Form submitted successfully!');
}

// Event listener for form submissions
const form = document.querySelector('.form-container form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}

// Function to update the progress bar dynamically
function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    let progress = 0;
    
    const interval = setInterval(function() {
        if (progress >= 100) {
            clearInterval(interval);
        } else {
            progress += 2;
            progressBar.style.width = `${progress}%`;
        }
    }, 100);
}

// Event listener to trigger progress bar update
const startProgressButton = document.getElementById('start-progress');
if (startProgressButton) {
    startProgressButton.addEventListener('click', updateProgressBar);
}

// Fetch and display user data (simulating API call)
function fetchUserData() {
    const userInfo = document.getElementById('user-info');
    const user = {
        name: 'John Doe',
        role: 'Admin',
        lastLogin: '2024-11-20 14:30:00',
    };

    userInfo.innerHTML = `
        <h4>${user.name}</h4>
        <p>Role: ${user.role}</p>
        <p>Last login: ${user.lastLogin}</p>
    `;
}

// Initialize user data
fetchUserData();

// Fetch and display activity logs
function fetchActivityLogs() {
    const activityLogContainer = document.getElementById('activity-log');
    const activityLogs = [
        { description: 'Logged in', time: '2024-11-20 14:30:00' },
        { description: 'Updated profile', time: '2024-11-19 12:20:00' },
        { description: 'Logged out', time: '2024-11-18 16:45:00' },
    ];

    activityLogs.forEach(log => {
        const logItem = document.createElement('div');
        logItem.classList.add('log-item');
        logItem.innerHTML = `
            <span class="log-description">${log.description}</span>
            <span class="log-time">${log.time}</span>
        `;
        activityLogContainer.appendChild(logItem);
    });
}

// Initialize activity logs
fetchActivityLogs();

// Handle chart rendering (using a library like Chart.js or any other charting library)
function renderChart(chartId, data, options) {
    const ctx = document.getElementById(chartId).getContext('2d');
    new Chart(ctx, {
        type: 'bar', // Change this as needed (line, pie, etc.)
        data: data,
        options: options,
    });
}

// Example chart data and options (to be replaced with actual data)
const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Sales',
        data: [30, 45, 20, 60, 75],
        backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
    }],
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

// Render chart on page load
renderChart('salesChart', chartData, chartOptions);

// Function to update notifications counter
function updateNotificationsCount() {
    const notifications = document.querySelectorAll('.notification-item');
    const notificationsCount = document.getElementById('notifications-count');
    notificationsCount.textContent = notifications.length;
}

// Initialize notifications counter
updateNotificationsCount();

// Function to filter search results dynamically
function filterSearchResults(query) {
    const results = document.querySelectorAll('.result-card');
    
    results.forEach(result => {
        const title = result.querySelector('h4').textContent.toLowerCase();
        if (title.includes(query.toLowerCase())) {
            result.style.display = 'block';
        } else {
            result.style.display = 'none';
        }
    });
}

// Event listener for search input
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        filterSearchResults(searchInput.value);
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const darkModeButton = document.getElementById('dark-mode-toggle');
    darkModeButton.classList.toggle('active');
}

// Event listener to toggle dark mode
const darkModeButton = document.getElementById('dark-mode-toggle');
if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}
