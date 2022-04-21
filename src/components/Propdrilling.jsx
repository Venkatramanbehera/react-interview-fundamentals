import React from 'react';
import { useUserContext, UserProvider } from '../context/UserContextProvider';

const Profile = () => {
    const { name } = useUserContext();
    return (
        <div>
            <h3>Your user name : {name} </h3>
        </div>
    )
};

const Greeting = () => {
    return (
        <div>
            <GreetingsMsg />
        </div>
    )
}

const GreetingsMsg = () => {
    const { name } = useUserContext();
    return (
        <h3>Your user name : {name} </h3>
    )
};

const Welcome = () => {
    return (
        <div>
            <Greeting />
        </div>
    )
}

const About = () => {
    const { name } = useUserContext();
    return <h3>About Component</h3>
}

const Home = () => {
    return (
        <div>
            <UserProvider>
                <Profile />
                <Welcome />
                <About />
            </UserProvider>
        </div>
    )
};

export default Home