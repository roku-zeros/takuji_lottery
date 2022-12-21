import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ChainId, ThirdwebProvider} from "@thirdweb-dev/react";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import Home from './pages/Home/index'
import Lottery from "./pages/Lottery";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
    return (
        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
            <Router>
                <MyNavbar/>
                <Routes>
                    <Route index path='/' element={<Home/>}/>
                </Routes>
                <Routes>
                    <Route path='/lottery' element={<Lottery/>}/>
                </Routes>
            </Router>
        </ThirdwebProvider>
    );
}

export default App;
