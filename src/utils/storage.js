export const storage = {
    getBookings: () => {
        const data = localStorage.getItem('clinic_bookings');
        return data ? JSON.parse(data) : [];
    },

    addBooking: (booking) => {
        const bookings = storage.getBookings();
        const newBooking = {
            id: Date.now().toString(), // Simple ID generation
            status: 'pending', // pending, confirmed, rejected
            createdAt: new Date().toISOString(),
            ...booking
        };
        bookings.unshift(newBooking); // Add to top
        localStorage.setItem('clinic_bookings', JSON.stringify(bookings));
        return newBooking;
    },

    updateBookingStatus: (id, status) => {
        const bookings = storage.getBookings();
        const updated = bookings.map(b =>
            b.id === id ? { ...b, status } : b
        );
        localStorage.setItem('clinic_bookings', JSON.stringify(updated));
        return updated;
    },

    deleteBooking: (id) => {
        const bookings = storage.getBookings();
        const filtered = bookings.filter(b => b.id !== id);
        localStorage.setItem('clinic_bookings', JSON.stringify(filtered));
        return filtered;
    },

    // Mock login check
    checkCredentials: (username, password) => {
        return username === 'admin' && password === 'admin123';
    }
};
