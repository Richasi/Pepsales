import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {
    const data = {
        labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM'],
        datasets: [
            {
                label: 'Price Movement',
                data: [1100, 1150, 1120, 1130, 1140, 1160, 1200],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
            },
        ],
    };

    return <Line data={data} />;
};

export default Graph;
