import {createRoot} from 'react-dom/client';
import React from 'react';
import App from './App';

const root = createRoot(document.getElementById('root'));

const H1 = React.createElement(
    "h1", {className:"title"}, "hello world"
);



root.render( 
    // <>  
    //     {/* <h1>hello world</h1>
    //     <div>
    //         dfhlafalf
    //     </div>

    //     {H1} */}

    // </>

    <App/>
)