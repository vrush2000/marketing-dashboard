export const dataBar = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
        {
            data: [60, 130, 100, 50, 120],
            fill: false,
            backgroundColor: ['#FF814A'],
            borderColor: ['#FF814A'],
            stack: 'Stack 2',
            borderWidth: 1,
            barThickness: 5,
            borderRadius: {
                bottomLeft: 50,
                bottomRight: 50,
            },
            borderSkipped: false,
        },
        {
            data: [140, 70, 100, 150, 80],
            fill: false,
            backgroundColor: ["#2E4B85"],
            borderColor: ["#2E4B85"],
            stack: 'Stack 2',
            borderWidth: 1,
            barThickness: 5,
            borderRadius: {
                topLeft: 50,
                topRight: 50,
                bottomLeft: 50,
                bottomRight: 50,
            },
        }]
};

export const dataBarTotal = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
        {
            data: [130, 250, 350, 300, 100, 70, 220, 280, 60],
            fill: false,
            backgroundColor: ['#0BB885'],
            borderColor: ['#0BB885'],
            stack: 'Stack 2',
            borderWidth: 1,
            barThickness: 8,
            borderRadius: {
                topLeft: 50,
                topRight: 50,
            },
            borderSkipped: false,
        },
        {
            data: [-180, -100, -80, -200, -150, -50, -80, -70, -100],
            fill: false,
            backgroundColor: ['#FF814A'],
            borderColor: ['#FF814A'],
            stack: 'Stack 2',
            borderWidth: 1,
            barThickness: 8,
            borderRadius: {
                bottomLeft: 50,
                bottomRight: 50,
            },
        }]
};

export const dataLine = {
    labels: [1, 2, 3, 4, 5, 6],
    datasets: [
        {
            data: [0, 50, 25, 80, 50, 100],
            backgroundColor: ['#0BB885'],
            borderColor: ['#0BB885'],
            stack: 'Stack 2',
            borderWidth: 3,
            pointRadius: [0, 0, 0, 0, 0, 5]
        }]
};

export const optionsDoughnut = {
    events: [],
    plugins: {
        tooltips: { enabled: true },
        legend: {
            display: false,
        }
    },
}

export const optionsBar = {
    responsive: true,
    scales: {
        x: {
            stacked: true,
            display: false,
        },
        y: {
            stacked: true,
            display: false,
        }
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export const optionsBarTotal = {
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        }
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export const optionsLine = {
    responsive: true,
    scales: {
        x: {
            display: true,
            ticks: {
                display: false
            }
        },
        y: {
            display: false,
        }
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};