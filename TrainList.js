// TrainList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTrains } from '../api';

const TrainList = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        const fetchTrains = async () => {
            const trainsData = await getAllTrains();
            setTrains(trainsData);
        };
        fetchTrains();
    }, []);

    return (
        <div>
            <h2>All Trains</h2>
            <ul>
                {trains.map((train) => (
                    <li key={train.id}>
                        <Link to={`/trains/${train.id}`}>{train.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainList;
