import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
            const response = await axios.get(`${apiUrl}/auth/current_user`, {
                withCredentials: true
            });
            setUser(response.data || null);
        } catch (err) {
            console.error('Error fetching user:', err);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
            await axios.get(`${apiUrl}/auth/logout`, { withCredentials: true });
            setUser(null);
            window.location.href = '/'; // Force reload to clear any other state
        } catch (err) {
            console.error('Logout failed:', err);
        }
    };

    return (
        <UserContext.Provider value={{ user, loading, login, logout, fetchUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
