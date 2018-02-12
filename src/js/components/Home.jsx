import React from "react";
import {Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
            <h1>
                Hello, Click on button to go to the library
            </h1>
            <Link to="/search">Go To Library</Link>
        </div>
    );
}

export default Home;
