import React, { useState, useEffect,useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function GitHubUser({ login }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/users/${login}`)
            .then(res => res.json())
            .then(setData)
            .catch(console.error)
    }, [login]);

    if (data) {
        return (
            <div>
                <h1>{data.login}</h1>
                <img alt={data.login} src={data.avatar_url} width={100} />
            </div>
        )
    }
    return null;
}

function App() {
    return <GitHubUser login="izuru775" />
}



function Checkbox() {
    const [checked, toggle] = useReducer(checked => !checked, false);

    return (
        <>
            <input
                type="checkbox"
                value={checked}
                onChange={toggle}
            />
            {checked? "Checked":"Not Checked"}
        </>
    );
}

ReactDOM.render(
    <Checkbox />,
    document.getElementById('root')
);


