import React from 'react'

let ComponentMemoization = ({ hero }) => {
    console.log('child component render');
    return (
        <div>
            <h1>ComponentMemoization</h1>
            <p>My name is {JSON.stringify(hero)} </p>
        </div>
    )
};

ComponentMemoization = React.memo(ComponentMemoization);

const ParentComponent = () => {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState('Tony Stark');
    const hero = React.useMemo(() => ({
        name,
        skills: ['flight', 'x-ray vision'],
        team: 'Avengers'
    }), [name])
    const updateHero = React.useCallback(() => (name, team) => {
        setName(name);
        hero.team = team
    }, [hero])
    console.log('parent component render');
    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>Parent Component </h1>
            <ComponentMemoization hero={hero} updateHero={updateHero} />
            <button onClick={handleClick}>click me</button>
        </>
    )
}

export default ParentComponent