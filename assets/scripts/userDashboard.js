
document.addEventListener('DOMContentLoaded', function () {
    // Activity Chart
    var ctxActivity = document.getElementById('activity_chart').getContext('2d');
    var activityChart = new Chart(ctxActivity, {
        type: 'line',
        data: {
            labels: ['July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Recent Activity',
                data: [10, 15, 20, 25, 30, 35], // Example data
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Activity'
                    },
                    beginAtZero: true
                }
            }
        }
    });

    // Stats Chart
    var ctxStats = document.getElementById('stats_chart').getContext('2d');
    var statsChart = new Chart(ctxStats, {
        type: 'bar',
        data: {
            labels: ['Load 1', 'Load 2', 'Load 3', 'Load 4', 'Load 5'],
            datasets: [{
                label: 'Load Statistics',
                data: [12, 19, 3, 5, 2], // Example data
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Loads'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Count'
                    },
                    beginAtZero: true
                }
            }
        }
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.add('d-none');
        });
        document.getElementById(targetId).classList.remove('d-none');
    });
});