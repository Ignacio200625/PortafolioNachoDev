import './App.css'
import Header from './components/Header';
import About from "./Pages/About";
import Home from './Pages/Home';

import { BrowserRouter, Routes, Route } from "react-router";
function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;