import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Speakers from './components/Speakers';
import Events from './components/Events';
import Contact from './components/Contact';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Speakers />
      <Events />
      <Contact />
    </div>
  );
}
