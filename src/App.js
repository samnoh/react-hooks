import React from 'react';
import useAxios from './Hooks/useAxios';

const App = () => {
    const { loading, error, data, refetch } = useAxios({
        url: 'https://jsonplaceholder.typicode.com/users'
    });

    return (
        <>
            <h2>{loading && 'Loading'}</h2>
            <ul>{!loading && data && data.data.map(user => <li>{user.name}</li>)}</ul>
            <button onClick={refetch}>Refetch</button>
        </>
    );
};

export default App;
