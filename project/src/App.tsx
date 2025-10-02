import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Blog from './components/Blog';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Blog />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;