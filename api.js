// api.js
export const getAllTrains = async () => {
    // Replace this with actual API call once you have access to the John Doe Railways API
    // Return dummy data for demonstration
    return [
        { id: 1, name: 'Train A', departureTime: '10:00', seatsAvailable: { sleeper: 50, AC: 20 }, price: { sleeper: 1000, AC: 2000 }, delayedBy: 0 },
        { id: 2, name: 'Train B', departureTime: '12:30', seatsAvailable: { sleeper: 30, AC: 10 }, price: { sleeper: 800, AC: 1800 }, delayedBy: 5 },
        // Add more dummy data as needed
    ];
};

export const getSingleTrain = async (trainId) => {
    // Replace this with actual API call once you have access to the John Doe Railways API
    // Return dummy data for demonstration
    return {
        id: trainId,
        name: 'Train A',
        departureTime: '10:00',
        seatsAvailable: { sleeper: 50, AC: 20 },
        price: { sleeper: 1000, AC: 2000 },
        delayedBy: 0,
    };
};
