import React, { useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [name, setName] = useState('Guest');
    const value = { name, setName };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => {
    const state = React.useContext(UserContext);
    if (!state) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return state;
}

export { UserProvider, useUserContext };