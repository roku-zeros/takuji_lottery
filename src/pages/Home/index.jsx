import React from "react";
import Welcome from "../../components/Welcome/Welcome";
import HowItWorks from "../../components/HowItWorks/HowItWorks"


const Home = () => {
    return (
        <div>
            <Welcome />
            <br/><br/>
            <HowItWorks />
        </div>
    );
};

export default Home;