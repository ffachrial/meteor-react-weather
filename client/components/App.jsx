import React from 'react';

import Nav from './Nav';

const App = (props) => {
    return (
        <div>
            <Nav />
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};
export default App;