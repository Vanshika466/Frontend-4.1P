import React from 'react';
import Header from './components/Header';
import FeaturedArticles from './components/FeaturedArticles';
import Tutorials from './components/Tutorials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FeaturedArticles />
        <Tutorials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
