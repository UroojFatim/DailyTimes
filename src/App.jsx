import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Featured from './pages/Featured';
import Opinion from './pages/Opinion';

const App = () => {
    return (
        <Router>
            <Navbar />
                <div className="container mx-auto">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/featured" element={<Featured />} />
                        <Route path="/opinion" element={<Opinion />} />
                    </Routes>
                </div>
            <Footer />
        </Router>

    );
};

export default App;
