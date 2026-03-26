export const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6rW2Abe_nKBmiJe4ycjHVyY5vx-8WKKgRog7EBjVb2VH3P0Jk5pxWKJfwLVrQKfo1/exec';

export const api = {
    fetchBookings: async () => {
        try {
            const response = await fetch(SCRIPT_URL);
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch bookings:", error);
            return []; // Return empty array on error to prevent crash
        }
    },

    createBooking: async (bookingData) => {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        });
    }
};
