// AllTrains.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllTrains } from '../api';
import { Box, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

const AllTrains = () => {
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        const fetchTrains = async () => {
            const trainsData = await getAllTrains();
            setTrains(trainsData);
        };
        fetchTrains();
    }, []);

    return (
        <Box mt={2}>
            <Typography variant="h5" component="h2" gutterBottom>
                All Trains
            </Typography>
            <Divider />
            {trains.map((train) => (
                <Card key={train.id} variant="outlined" sx={{ mt: 2 }}>
                    <CardHeader title={train.name} subheader={`Departure Time: ${train.departureTime}`} />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Seats Available: Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Price: Sleeper: {train.price.sleeper}, AC: {train.price.AC}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Delayed By: {train.delayedBy} minutes
                        </Typography>
                        <Link to={`/trains/${train.id}`}>View Details</Link>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default AllTrains;
