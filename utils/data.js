const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

var data = {
    labels: labels,
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }
    ]
};

const config1 = {
    type: 'line',
    data: data,
    options: {}
};

var data2 = {
    labels: labels,
    datasets: [
        {
            label: 'B',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [20, 10, 5, 2, 20, 30, 35],
        },
        {
            label: 'A',
            backgroundColor: 'blue',
            borderColor: 'blue',
            data: [32, 42, 56, 32, 56, 43, 23],
        },
    ]
};

const config2 = {
    type: 'line',
    data: data2,
    options: {}
};

