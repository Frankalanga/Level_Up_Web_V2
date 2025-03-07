
import React from 'react';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return (
        <div>
            <Header />
            <Nav />
            <Home />
            <Services />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;