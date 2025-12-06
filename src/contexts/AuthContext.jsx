import React, { createContext, useContext, useState, useEffect } from 'react';
import { storage } from '../utils/storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user was logged in (persist session simply)
        const loggedIn = localStorage.getItem('is_admin_logged_in');
        if (loggedIn) {
            setUser({ username: 'admin', role: 'admin' });
        }
        setLoading(false);
    }, []);

    const login = (username, password) => {
        if (storage.checkCredentials(username, password)) {
            setUser({ username, role: 'admin' });
            localStorage.setItem('is_admin_logged_in', 'true');
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('is_admin_logged_in');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
