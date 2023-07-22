// TrainDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleTrain } from '../api';
import { Box, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

const TrainDetails = () => {
    const { trainId } = useParams();
    const [train, setTrain] = useState(null);

    useEffect(() => {
        const fetchTrain = async () => {
            const trainData = await getSingleTrain(trainId);
            setTrain(trainData);
        };
        fetchTrain();
    }, [trainId]);

    if (!train) {
        return <div>Loading...</div>;
    }

    return (
        <Box mt={2}>
            <Typography variant="h5" component="h2" gutterBottom>
                Train Details
            </Typography>
            <Divider />
            <Card variant="outlined" sx={{ mt: 2 }}>
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
                </CardContent>
            </Card>
        </Box>
    );
};

export default TrainDetails;
